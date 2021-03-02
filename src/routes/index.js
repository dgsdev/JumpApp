import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "../screens/Login";
import Modulos from "../screens/Modulos";
import About from "../screens/About";

const Rotas = {
  Login: {
    nome: "Login",
    screen: Login,
  },
  Modulos: {
    nome: "Modulos",
    screen: Modulos,
  },
  About: {
    nome: "About",
    screen: About,
  },
};

const Navegacao = createSwitchNavigator(Rotas);

export default createAppContainer(Navegacao);
