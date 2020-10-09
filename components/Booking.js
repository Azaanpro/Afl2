import React from 'react';
import {FlatList, StyleSheet, Text, View, Alert} from 'react-native';
import Header from './Header';

export default class Booking extends React.Component {
  //Denne funktion skildrer den nederste linje i vores tidsintervaller
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: '100%',
          backgroundColor: 'black',
        }}
      />
    );
  };

  //onPress action, der kommer en alert frem ved valgte tidspunkt
  getListViewItem = (item) => {
    Alert.alert(item.key);
  };

  //Vi laver vores titel og flatliste med tider
  render() {
    return (
      <View style={styles.mainContainer}>
        <Header navigation={this.props.navigation} title="Booking" />
        <View style={styles.container}>
          <FlatList
            data={[
              {key: '09:00-09:30'},
              {key: '09:30-10:00'},
              {key: '10:00-10:30'},
              {key: '10:30-11:00'},
              {key: '11:00-11:30'},
              {key: '11:30-12:00'},
              {key: '12:00-12:30'},
              {key: '12:30-13:00'},
              {key: '13:00-13:30'},
              {key: '13:30-14:00'},
              {key: '14:00-14:30'},
              {key: '14:30-15:00'},
              {key: '15:00-15:30'},
              {key: '15:30:16:00'},
              {key: '16:30-17:00'},
            ]}
            renderItem={({item}) => (
              <Text
                style={styles.item}
                onPress={this.getListViewItem.bind(this, item)}
              >
                {item.key}
              </Text>
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
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
  container: {
    flex: 1,
  },
  item: {
    padding: 30,
    fontSize: 20,
    height: 60,
  },
});
