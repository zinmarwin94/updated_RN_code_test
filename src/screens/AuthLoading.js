import React, { Component } from "react"; 
import AsyncStorage from '@react-native-community/async-storage';
import { Container } from "native-base"; 
 
export default (
  class AuthLoading extends Component {
    _bootstrapAsync = async () => { 
      const refreshToken = await AsyncStorage.getItem("auth:refreshToken"); 
      if (refreshToken) {
        this.props.navigation.navigate("LoginStack");
      } else { 
        this.props.navigation.navigate("LoginStack");
      } 
    };  
    async componentDidMount() {
      this._bootstrapAsync();    
    } 
    
    render() {
      return (
        <Container> 
        </Container>
      );
    }
  }
);