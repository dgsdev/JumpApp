import React from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import { ListItem, Button, Icon } from "react-native-elements";
import { registerCustomIconType } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
registerCustomIconType("font-awesome-5", FontAwesome5);

import styles from "../Login/styles";

const Modulos = [
  {
    nome: "Aprender Libras",
  },
  {
    nome: "Conteúdo Libras",
  }, 
];

function Modulo({navigation}) {

  function sair(){
    return navigation.navigate("Login");
}

  return (
    <ScrollView>
      <ImageBackground style={styles.fundo}>
        {/*}
        <View>
            {
                modulos.map((modulo, index) => 
                <Text key={index}>{tarefa.nome}</Text>
                )
            }
        </View>
        */}

       

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

export default Modulo;
