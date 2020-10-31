import * as React from 'react';
import {Image, View, Button, StyleSheet} from 'react-native';
import Header from './Header';
import {SettingsPage, NavigateRow, CheckRow} from 'react-native-settings-view';

export default class ProfilScreen extends React.Component {
  //Vi laver en titel, indsætter billede og forneden i siden laver vi ikoner til de forskellige valgmuligheder
  render() {
    return (
      <View style={[styles.mainContainer]}>
        <Header navigation={this.props.navigation} title="Settings" />

        <View style={[styles.imageContainer]}>
          <Image
            source={{
              uri:
                'https://scontent-cph2-1.xx.fbcdn.net/v/t1.0-9/83179022_3743858705624540_419416846812798028_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=tEpNWLABtq4AX_9JSr9&_nc_ht=scontent-cph2-1.xx&oh=b7b557aaae9bbf3d2591ff67e43450eb&oe=5F99683B',
            }}
            style={{width: 150, height: 150}}
          />
        </View>

        <SettingsPage>
          <NavigateRow
            text="Account"
            leftIcon={{
              name: 'settings',
              type: 'material-community',
            }}
            onPress={() => console.log('terms')}
          />
          <NavigateRow
            text="Terms and conditions"
            leftIcon={{
              name: 'file-document',
              type: 'material-community',
            }}
            onPress={() => console.log('terms')}
          />
          <NavigateRow
            text="Privacy Policy"
            leftIcon={{
              name: 'folder-lock',
              type: 'material-community',
            }}
            onPress={() => console.log('policy')}
          />
          <NavigateRow
            text="Contact us"
            leftIcon={{
              name: 'users',
              type: 'font-awesome',
            }}
            onPress={() => console.log('contact')}
          />
          <CheckRow
            text="Notifications"
            checked
            leftIcon={{
              name: 'ios-notifications',
              type: 'ionicon',
            }}
            onValueChange={(isChecked) => console.log('checked', isChecked)}
          />
        </SettingsPage>
      </View>
    );
  }
}

//Styling
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },

  imageContainer: {
    height: 150,
    alignItems: 'center',
  },
});
