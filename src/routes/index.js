import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "../screens/Login";
import Videos from "../screens/Videos";
import Home from "../screens/Home";

const Rotas = {
  Login: {
    nome: "Login",
    screen: Login,
  },
  Videos: {
    nome: "Videos",
    screen: Videos,
  },
  Home: {
    nome: "Home",
    screen: Home,
  },
};

const Navegacao = createSwitchNavigator(Rotas);

export default createAppContainer(Navegacao);
