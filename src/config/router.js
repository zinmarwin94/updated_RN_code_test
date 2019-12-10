import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';   
import { Icon } from "react-native-elements";  
 
import Landing from "../screens/Landing";
import Search from "../screens/Search";
import Login from "../screens/Login";
import AuthLoading from "../screens/AuthLoading";
 


const LoginStack = createStackNavigator(
  {
    Login: Login,
    Landing: Landing,
    Search: Search
  },
  {
    headerMode: 'none',
    header: null,
    
  }
);
 
const MainSwitch = createSwitchNavigator({
  AuthLoading,
  // Tabs,
  LoginStack
});

export default AppContainer = createAppContainer(MainSwitch);