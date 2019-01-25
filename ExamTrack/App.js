import React, { Component } from 'react';
import {StyleSheet, Text, View, AppRegistry, ScrollView, Image} from 'react-native';

export const CHECK = require('./icons/check.png');
export const NOTCHECK = require('./icons/notcheck.png');

class Event extends Component {

  constructor(props) {
      super(props);
      this.state = {complete: false};
  }

  render() {

    if (this.state.complete) {
      return(
      <View style={EventContainerStyles.item}>
        <Image style={{width: 25, height: 25}} source={CHECK} />
        <Text> To Do: {this.props.name} </Text>
      </View>);
    } else {
      return(
      <View style={EventContainerStyles.item}>
        <Image style={{width: 25, height: 25}} source={NOTCHECK} />
        <Text> To Do: {this.props.name} </Text>
      </View>);
    }
  }

}

class Title extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text> Exam Track </Text>
      </View>
    );
  }
}

export default class EventsList extends Component {
  render() {
    return (
      <ScrollView>
        <Event name= 'Study for Science Exam'/>
        <Event name= 'Study for Computer Science Exam'/>
        <Event name= 'Study for Computer Engineering Exam'/>
      </ScrollView>
    );
  }
}

const EventContainerStyles = StyleSheet.create({
  item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        margin: 5,
        borderColor: '#000000',
        borderWidth: 2,
        backgroundColor: '#ffffff'
     }
});
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

AppRegistry.registerComponent('ExamTrack', () => EventsList);
