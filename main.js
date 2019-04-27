
import Expo from "expo";
import React from "react";
import ReactNative from "react-native";
import MainStackNavigator from "./MainStackNavigator";

import { TabNavigator } from "react-navigation";

class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator(
      {
        Home: { screen: MainStackNavigator }
        //Expressions : {screen : expressions},
      },
      {
        initialRouteName: "Home"
      }
    );

    return <MainNavigator />;
  }
}

Expo.registerRootComponent(App);
