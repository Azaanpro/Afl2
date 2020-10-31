import * as React from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';
import firebase from 'firebase';
import ProfilScreen from './ProfilScreen';
import SignupForm from './SignUpForm';
import Booking from './Booking';
import Calender from './Calender';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

//Vi deklarerer vores drawnavigator og bestemmer følgende screens
const AppDrawerNavigator = createDrawerNavigator({
  Calender: {
    screen: Calender,
  },

  Booking: {
    screen: Booking,
  },

  Settings: {
    screen: ProfilScreen,
  },
});

const AppNav = createAppContainer(AppDrawerNavigator);

export default class LoginForm extends React.Component {
  //Vi tilsutter en firebase database ifb med login og authentication
  state = {user: null};
  componentDidMount() {
    const fireBaseConfig = {
      apiKey: 'AIzaSyBbQpsY5tx-76T6pnC3Fls1pP-tbmkshA0',
      authDomain: 'log-ind.firebaseapp.com',
      databaseURL: 'https://log-ind.firebaseio.com',
      projectId: 'log-ind',
      storageBucket: 'log-ind.appspot.com',
      messagingSenderId: '699496729025',
      appId: '1:699496729025:web:2edc580382446ce5384740',
      measurementId: 'G-31GD13DX66',
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(fireBaseConfig);
    }

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({user});
    });
  }
  //Vi definerer vores state
  state = {
    email: '',
    password: '',
    isLoading: false,
    isCompleted: false,
    errorMessage: null,
  };

  //Vi sætter følgende authentication metoder
  startLoading = () => this.setState({isLoading: true});
  endLoading = () => this.setState({isLoading: false});
  setError = (errorMessage) => this.setState({errorMessage});
  clearError = () => this.setState({errorMessage: null});

  handleChangeEmail = (email) => this.setState({email});
  handleChangePassword = (password) => this.setState({password});

  //Vi kører gennem firebase for at se om der er overenstemmelse
  handleSubmit = async () => {
    const {email, password} = this.state;
    try {
      this.startLoading();
      this.clearError();
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log(result);
      this.endLoading();
      this.setState({isCompleted: true});
    } catch (error) {
      this.setError(error.message);
      this.endLoading();
    }
  };

  render() {
    //Såfremt man er logget ind skal den vise vores DrawNavigator i siden
    const {errorMessage, email, password, isCompleted} = this.state;
    if (isCompleted) {
      return <AppNav />;
    }

    //Vi laver vores titel samt textinput til login og signup.
    //Ydemere kalder vi på errormessage hvis indtastet er forkert
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={{
            uri:
              'https://cosmeticideas.com/wp-content/uploads/2016/04/low-fade-haircut-with-Razor-Faded-Pompadour-model.jpg',
          }}
        />

        <Text style={styles.paragraph}>BarberBook</Text>

        <Text style={styles.header}>Login</Text>
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

        <SignupForm />
      </View>
    );
  }

  //Vores login knap
  renderButton = () => {
    const {isLoading} = this.state;
    if (isLoading) {
      return <ActivityIndicator />;
    }
    return <Button onPress={this.handleSubmit} title="Login" />;
  };
}

//Styling
const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
  inputField: {
    fontWeight: 'bold',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  header: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 4,
  },

  paragraph: {
    fontWeight: 'bold',
    fontSize: 40,
    padding: 60,
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.3,
  },
});
