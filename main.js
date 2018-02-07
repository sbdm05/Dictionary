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
import FullList from './components/FullList';
import MainStackNavigator from './MainStackNavigator';
import expressions from './expressions';
import FirebaseReactNative from './FirebaseReactNative';
import { List, ListItem } from 'react-native-elements';


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


class App extends React.Component {



  render(){
      const MainNavigator =
      TabNavigator(
      {
        Home: {screen: MainStackNavigator},
        Expressions : {screen : expressions},
      }, {
        initialRouteName: 'Home',
      }
      );



  return(
    <MainNavigator
    />
    );
  }

}

Expo.registerRootComponent(App);
