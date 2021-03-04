import React, { useState } from "react";
import {
  View,  
  ImageBackground,
  Image,
  TextInput,
  Text,
  TouchableOpacity, 
  ScrollView,
  Alert, 
} from "react-native";

import { Button } from "react-native-elements";

import styles from "./styles";


const apiusuario = {
  id: 1,
  usuario: "jump",
  email: "jump@jump.com",
  senha: "squad8",
};

function Login({ navigation }) {
  function autenticacao() {
    if (apiusuario.email === email && apiusuario.senha === senha) {
      navigation.navigate("Videos");
    } else {
      Alert.alert("E-mail ou Senha Inválido!", "Tente novamente!");
    }
  }

  
  const [senha, setSenha] = React.useState("");
  const [email, setEmail] = React.useState("");

  
  return (
    <ScrollView>
      <View style={styles.caixa}>      
      
        <ImageBackground style={styles.container}>
          <View style={styles.divlogo}>
            <Image
              source={require("../../../assets/marca.png")}
              style={styles.logo}
            ></Image>
          </View>      
       
      
          <TextInput
            style={styles.input}
            placeholder="Seu e-mail"
            inlineImageLeft='at'            
            value={email}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
         
   

          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />
          {/*
          <TouchableOpacity style={styles.btn} onPress={autenticacao}>
            <Text style={styles.texto}>Entrar</Text>
          </TouchableOpacity>
          */}
          <View style={styles.divbutton}>
            <Button
              title="Entrar"
              titleStyle={{fontFamily: 'Comfortaa-regular', fontSize: 16}}
              buttonStyle={styles.button}
              onPress={autenticacao}
            ></Button>
            <Button
              title="Cadastre-se"
              titleStyle={{fontFamily: 'Comfortaa-regular', fontSize: 16}}
              buttonStyle={styles.button}
                            
            ></Button>
          </View>

          <Text style={{ fontFamily: 'Comfortaa-regular', fontSize: 8, color: '#fff' }}>© Copyright Squad8 SP2 | Jump 2021</Text>

        </ImageBackground>
      </View>
    </ScrollView>
  );
}

export default Login;
