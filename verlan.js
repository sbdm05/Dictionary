'use strict';
import Expo from 'expo';
import React, {Component, TextInput, ActivityIndicator} from 'react';
import ReactNative from 'react-native';
import SearchBar from 'react-native-searchbar';
import firebase from 'firebase';
import StatusBar from './components/StatusBar';
import ListOfWords from './components/ListOfWords';
import WordItem from './components/WordItem';
import Spinner from './components/common/Spinner';
import WordOfTheDay from './components/WordOfTheDay';
import { List, ListItem } from 'react-native-elements';
import SplashScreen from './components/SplashScreen';
import Animation from 'lottie-react-native';
import expressions from './expressions'

const styles = require('./styles.js');


const {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Animated,
  Switch,
  AsyncStorage
} = ReactNative;


import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';

class verlan extends Component{


  render(){
    return(
      <View>
        <Text>
          Test Verlan
        </Text>
      </View>
      );
  }
}


export default verlan;
