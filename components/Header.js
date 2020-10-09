import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

//Vi instanterer vores header navigation
export default class Header extends Component {
  handleNavigation = () => {
    const {navigation} = this.props;
    this.props.navigation.openDrawer();
  };

  //Vi laver knappen til header navigation
  render() {
    const {title} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.icon} onPress={this.handleNavigation}>
          <MaterialCommunityIcons
            name="forwardburger"
            size={30}
            color="black"
          />
        </TouchableOpacity>

        <Text style={styles.txt}>{title}</Text>
      </View>
    );
  }
}

//Styling
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon: {
    width: '15%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  txt: {
    width: '85%',
    textAlign: 'center',
    fontSize: 30,
    paddingRight: 66,
  },
});
