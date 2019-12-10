import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
class Login extends Component { 
  state={ 
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  } 

  updateText = (key, val) => {
    this.setState({
      [key]: val   
    });
  };

  SignUp = () => { 
    this.props.navigation.navigate("Landing")
  }

  render() { 
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView>
            <View style={styles.body}>
              <Text style={{ fontSize: 22, fontWeight: "bold", marginVertical: 20 }}>Sign up</Text>
              <Text style={styles.text}>Fullname</Text>
              <TextInput
                value={this.state.name} 
                style={styles.searchTextBoxForLanding}
                onChangeText={val => this.updateText("name", val)}
              />
              <Text style={styles.text}>Email</Text>
              <TextInput
                value={this.state.email} 
                style={styles.searchTextBoxForLanding}
                onChangeText={val => this.updateText("email", val)}
              />
              <Text style={styles.text}>Password</Text>
              <TextInput
                value={this.state.password} 
                style={styles.searchTextBoxForLanding}
                autoCompleteType="password"
                onChangeText={val => this.updateText("password", val)}
              />
              <Text style={styles.text}>Confirm Password</Text>
              <TextInput
                
                value={this.state.confirmPassword} 
                style={styles.searchTextBoxForLanding}
                autoCompleteType="password"
                onChangeText={val => this.updateText("confirmPassword", val)}
              />
              <Text 
                onPress={this.SignUp}
                style={{ 
                  backgroundColor: "#ea3222", 
                  color: "#ffffff", 
                  paddingVertical: 10, 
                  textAlign: "center", 
                  marginTop: 40, 
                  borderRadius: 5 
                }}>Sign Up</Text>
              <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "center" }}>
                <Text>Already have an account? </Text>
                <Text style={{color: "#ea3222" }}>Login</Text>
              </View>
              
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
 
const styles = StyleSheet.create({
  text: {
    marginVertical: 10
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: "10%",
    marginVertical: 50,
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  searchTextBoxForLanding: {
    width: "100%",  
    paddingVertical: 0, 
    paddingLeft: 5,
    height: 35,
    fontSize: 16,
    // color: "#FAFAFA",
    borderWidth: 0.5,
    borderRadius: 5,
    marginBottom: 20
  },
});

export default Login;
