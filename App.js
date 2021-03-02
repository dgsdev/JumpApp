import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar
} from 'react-native';

import Rotas from './src/routes';

import * as Font from "expo-font";
import  AppLoading  from "expo-app-loading";

// import {  
//   Comfortaa_400Regular,
//   Comfortaa_500Medium,
//   Comfortaa_600SemiBold,
// } from "@expo-google-fonts/comfortaa";


const customFonts = {
  "Comfortaa-regular": require("./assets/fonts/comfortaa/Comfortaa_400Regular.ttf"),
  "Comfortaa-medium": require("./assets/fonts/comfortaa/Comfortaa_500Medium.ttf"),
  "Comfortaa-semi": require("./assets/fonts/comfortaa/Comfortaa_600SemiBold.ttf"),
  "Comfortaa-bold": require("./assets/fonts/comfortaa/Comfortaa_700Bold.ttf"),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };  

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
  return(
    <View>     
      <StatusBar hidden />
      <Rotas />
    </View>
  )
} else {
  return <AppLoading />;   
}
}
}

