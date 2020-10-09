import * as React from 'react';
import {Image, View, Button, StyleSheet} from 'react-native';
import Header from './Header';

export default class ProfilScreen extends React.Component {
  //Der laves en titel, billede og en knap
  render() {
    return (
      <View style={[styles.mainContainer]}>
        <Header navigation={this.props.navigation} title="Profile" />

        <View style={[styles.imageContainer]}>
          <Image
            source={{
              uri:
                'https://scontent-cph2-1.xx.fbcdn.net/v/t1.0-9/83179022_3743858705624540_419416846812798028_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=tEpNWLABtq4AX_9JSr9&_nc_ht=scontent-cph2-1.xx&oh=b7b557aaae9bbf3d2591ff67e43450eb&oe=5F99683B',
            }}
            style={{width: 200, height: 200}}
          />
          <Button title="Change your settings" onPress={() => {}}></Button>
        </View>
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
