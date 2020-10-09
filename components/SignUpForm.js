import * as React from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import firebase from 'firebase';

//Vi styler vores SignUpForm og bestemmer farve på fejlkode
const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
  inputField: {
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  header: {
    fontSize: 30,
  },
});

export default class SignUpForm extends React.Component {
  //Vores state består af følgende:
  state = {
    email: '',
    password: '',
    isLoading: false,
    isCompleted: false,
    errorMessage: null,
  };

  //Vi sættter vores authenticate/genkendelse
  startLoading = () => this.setState({isLoading: true});
  endLoading = () => this.setState({isLoading: false});
  setError = (errorMessage) => this.setState({errorMessage});
  clearError = () => this.setState({errorMessage: null});

  handleChangeEmail = (email) => this.setState({email});
  handleChangePassword = (password) => this.setState({password});

  //Vi opretter vores bruger gennem firebase
  handleSubmit = async () => {
    const {email, password} = this.state;
    try {
      this.startLoading();
      this.clearError();
      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(result);
      this.endLoading();
      this.setState({isCompleted: true});
    } catch (error) {
      // Der sendes en fejlmeddelelse.
      this.setError(error.message);
      this.endLoading();
    }
  };

  //Såfremt man formår at signe op gennnem nedenstående kriterier sendes følgende besked
  render = () => {
    const {errorMessage, email, password, isCompleted} = this.state;
    if (isCompleted) {
      return <Text>You are now signed up</Text>;
    }
    //Styling til vores SignUpForm
    return (
      <View>
        <Text style={styles.header}>Sign up</Text>
        <TextInput
          placeholder="email"
          value={email}
          onChangeText={this.handleChangeEmail}
          style={styles.inputField}
        />
        <TextInput
          placeholder="password"
          value={password}
          onChangeText={this.handleChangePassword}
          secureTextEntry
          style={styles.inputField}
        />
        {errorMessage && (
          <Text style={styles.error}>Error: {errorMessage}</Text>
        )}
        {this.renderButton()}
      </View>
    );
  };

  //Vores knap til at trykke "Create User"
  renderButton = () => {
    const {isLoading} = this.state;
    if (isLoading) {
      return <ActivityIndicator />;
    }
    return <Button onPress={this.handleSubmit} title="Create user" />;
  };
}
