import React, { Component } from 'react';
import {StyleSheet, Text, View, AppRegistry, ScrollView} from 'react-native';

class Event extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text> To Do: {this.props.name} </Text>
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

// const scrollStyles = StyleSheet.create({
//   contentContainer: {
//     paddingVertical: 20
//   }
// });
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
