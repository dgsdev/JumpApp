import React from "react";
import { View, StyleSheet, Text, ScrollView, ImageBackground } from "react-native";
import { Button, Icon } from "react-native-elements";
// import { registerCustomIconType } from "react-native-elements";
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// registerCustomIconType("font-awesome-5", FontAwesome5);


import styles from "../Login/styles";

import Video from 'react-native-video';

<Video source={{uri: "./502100005_LSB_cnt_1_r480P.mp4"}}   />


function Videos({navigation}) {  

  function sair(){
    return navigation.navigate("Login");
}

  return (
    <ScrollView>

      <ImageBackground style={styles.container}>   
   

      <Text style={{ fontFamily: "Comfortaa-regular", color: "#fff", fontSize: 12, textAlign: 'center', margin: 10}}>
        Page video Jump Libras dgsdev
      </Text>
        

        <Icon
          name="sign-in-alt"
          type="font-awesome-5"
          color="#fff"
          style={{ width: 100, marginTop: 20 }}
          onPress={sair}
        />
       

<Text style={{ fontFamily: "Comfortaa-regular", color: "#fff", fontSize: 8, textAlign: 'center', margin: 10}}>
            © Copyright Squad8 SP2 | Jump 2021
            </Text>
      </ImageBackground>
    </ScrollView>
  );
}

export default Videos;