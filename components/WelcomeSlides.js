'use strict';
import React, {Component} from 'react';
import StatusBar from './StatusBar';
import ReactNative from 'react-native';
import Slides from './Slides';
import {AppLoading} from 'expo';
import FirebaseReactNative from '../FirebaseReactNative';
import WordItem from './WordItem';
import Spinner from './common/Spinner';
import WordOfTheDay from './WordOfTheDay';
import FullList from './FullList';
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
  Switch,
  AsyncStorage
} = ReactNative;


const SLIDE_DATA = [
  { text: 'Welcome to StreetFrench Dictionary', color: '#03A9F4' },
  { text: 'Words & Expressions from real french people, you will not find in any other dictionary!', color: '#009688' },
  { text: 'Start now !', color: '#03A9F4' }

];

class WelcomeSlides extends Component{

  constructor(props){
    super(props);
    this.state={
      ShowWelcomeSlides : 'true'
    };
  }

  _setValue = async () => {

      await AsyncStorage.setItem('AlreadyVisited', 'true');
      console.log('inside_setvalue')

  };

   componentDidMount() {
    //AsyncStorage.removeItem('AlreadyVisited');
    console.log('inside componentwillMount');
    this._renderWelcomeSlidesWithAsyncStorage().done();
  }


  _renderWelcomeSlidesWithAsyncStorage = async () => {
    console.log('test component Will mount')

    let value = await AsyncStorage.getItem('AlreadyVisited');

            if (value==='true'){
              this.setState({ShowWelcomeSlides: 'false'});
              console.log('token is present')
            }else{
              this.setState({ShowWelcomeSlides: 'true'});
              console.log('token is not present');
              this._setValue().done;

            }
        }; // Close _renderWelcomeSlidesWith...

    static navigationOptions = {
        header: null
      };

      onSlidesComplete = () => {
        this.props.navigation.navigate('Home');
      }

  render(){
    //Get the navigation props
    const { navigate } = this.props.navigation;

    //New Router
    const SkipWelcome = StackNavigator({
      Home: { screen: FirebaseReactNative },
      Details: { screen: WordItem },
      Daily : {screen: WordOfTheDay},

    });

    if (this.state.ShowWelcomeSlides==='true'){
    console.log('inside return to home');
        return(
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
      );
    }return(
     <SkipWelcome />
    );
  }

}

export default WelcomeSlides;
