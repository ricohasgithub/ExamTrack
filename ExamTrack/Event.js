import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';

// Image imports
export const CHECK = require('./icons/check.png');
export const NOTCHECK = require('./icons/notcheck.png');

class Event extends Component {

  static propTypes = {
    content: PropTypes.string.isRequired,
    containerStyles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]).isRequired,
    buttonStyles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]).isRequired,
  };

  constructor(props) {
      super(props);
      this.state = {complete: false};
  }

  onPress = () => {
    this.setState({
      complete: true
    })
  }

  render = () => {

    const { containerStyles, buttonStyles, content } = this.props;

    if (this.state.complete) {
      return(
      <TouchableOpacity style={buttonStyles} onPress={this.onPress}>
        <View style={containerStyles}>
          <Image style={{width: 25, height: 25}} source={CHECK} />
          <Text> To Do: {content} </Text>
        </View>
      </TouchableOpacity>);
    } else {
      return(
        <TouchableOpacity style={buttonStyles} onPress={this.onPress}>
          <View style={containerStyles}>
            <Image style={{width: 25, height: 25}} source={NOTCHECK} />
            <Text> To Do: {content} </Text>
          </View>
        </TouchableOpacity>);
    }
  }

}


export default Event;
