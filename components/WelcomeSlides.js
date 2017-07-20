'use strict';
import React, {Component} from 'react';
import StatusBar from './StatusBar';
import ReactNative from 'react-native';
import Slides from './Slides';
import {
  StackNavigator,
} from 'react-navigation';

const {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Animated,
  Switch
} = ReactNative;


const SLIDE_DATA = [
  { text: 'Welcome to StreetFrench Dictionary', color: '#03A9F4' },
  { text: 'Words & Expressions from real french people, you will not find in any other dictionary!', color: '#009688' },
  { text: 'Start now !', color: '#03A9F4' }
];

class WelcomeSlides extends Component{

  static navigationOptions = {
    header: null
  };

  onSlidesComplete = () => {
    this.props.navigation.navigate('Home');
  }

  render(){
    return (

      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    );
  }

}


export default WelcomeSlides;
