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
import WelcomeSlides from './components/WelcomeSlides';
import FirebaseReactNative from './FirebaseReactNative';
import { List, ListItem } from 'react-native-elements';
import SplashScreen from './components/SplashScreen';
import Animation from 'lottie-react-native';
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
  Switch
} = ReactNative;


import {
  StackNavigator,
} from 'react-navigation';



class App extends React.Component {

  render(){
      const MainNavigator = StackNavigator({
      WelcomeSlides: {screen: WelcomeSlides},
      Home: { screen: FirebaseReactNative },
      Details: { screen: WordItem },
      Daily : {screen: WordOfTheDay},
    });

  return(
    <MainNavigator />
    );
  }

}

Expo.registerRootComponent(App);

