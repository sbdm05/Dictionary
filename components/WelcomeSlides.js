'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
import Slides from './Slides';

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
  { text: 'Words & Expressions from real french people', color: '#009688' },
  { text: 'Learn true french now !', color: '#03A9F4' }
];

class WelcomeSlides extends Component{

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
