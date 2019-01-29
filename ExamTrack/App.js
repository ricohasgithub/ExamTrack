import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TouchableHighlight, ScrollView, Image, StyleSheet, AppRegistry } from 'react-native';

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

class BottomButton extends Component {

  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  render = () => {
    return (
      <View style=MainStyles.container}>
        <TouchableHighlight style={styles.button} onPress={this.onPress}>
          <Text> Add Event </Text>
        </TouchableHighlight>
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

const MainStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    bottomButton: {
        alignItems: 'center',
        backgroundColor: '#4286f4',
        padding: 10,
        position: 'absolute',
        bottom: 35
    }
});

AppRegistry.registerComponent('ExamTrack', () => EventsList);
