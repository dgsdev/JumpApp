import React from "react";
import { View, Button, Text } from "react-native";

const About = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>About</Text>
    <Button
      title="Ir para Módulos"
      onPress={() => navigation.navigate("Modulos")}
    />
  </View>
);

About.navigationOptions = {
  title: "About",
};

export default About;
