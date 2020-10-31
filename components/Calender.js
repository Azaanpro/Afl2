import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Header from './Header';

export default class App extends Component {
  //constructor props instatiteres
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  //Ved dato skift
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render() {
    const {selectedStartDate} = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';

    //Vi laver header navigation samt laver en knap der referrer til et andet view
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} title="Calender" />

        <CalendarPicker onDateChange={this.onDateChange} />

        <Button
          title="Book your reservation"
          onPress={() => this.props.navigation.navigate('Booking')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});
