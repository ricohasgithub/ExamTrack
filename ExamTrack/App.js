import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';

// Custom event Component
import Event from './Event.js';

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
        <Event
          buttonStyles = {EventContainerStyles.button}
          containerStyles = {EventContainerStyles.item}
          content = {'Study for Science Exam'}/>
        <Event
          buttonStyles = {EventContainerStyles.button}
          containerStyles = {EventContainerStyles.item}
          content = {'Study for Computer Science Exam'}/>
        <Event
          buttonStyles = {EventContainerStyles.button}
          containerStyles = {EventContainerStyles.item}
          content = {'Study for Computer Engineering Exam'}/>
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
     },
  button: {
       // alignItems: 'center',
       backgroundColor: '#ffffff',
       padding: 10
    }
});

AppRegistry.registerComponent('ExamTrack', () => EventsList);
