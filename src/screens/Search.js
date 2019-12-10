import React, { Component } from "react";
import { TextInput, Keyboard, StatusBar, Text } from 'react-native';
import { Container, View, Header, Button } from "native-base";
import { Icon } from "react-native-elements"; 

import styles from './styles/componentStyle';  
import { Colors } from "./../themes";


class Search extends Component { 
  state={ 
    keyword: ""
  } 

  cancel = () => { 
    Keyboard.dismiss();
  }   

  updateText = (key, val) => {
    this.setState({
      [key]: val   
    });
  };

  render () {
    return ( 
      <Container>
          <Header style={{backgroundColor: "#ea3222"}}>  
            <StatusBar backgroundColor={"#ea3222"} /> 
            <Text style={{ color: "#FAFAFA", fontSize: 18 }}>Search</Text>
          </Header>   
         <View >
         <TextInput
           value={this.state.keyword} 
           style={{ borderWidth: 0.5, borderRadius: 5, margin: 10}} 
           placeholder={"Search Movies"}  
           returnKeyType="search"
           onChangeText={val => this.updateText("keyword", val)}
         /> 
       </View>
       <View />  
      </Container>
    )
  }
} 
export default Search;
 