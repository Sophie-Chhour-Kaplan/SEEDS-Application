// USING GOOGLE AUTHENTICATION ------------------------------------------------------------------------------------

// import React, { Component } from 'react';
// import {
//     GoogleSignin,
//     GoogleSigninButton,
//     statusCodes,
//   } from '@react-native-community/google-signin';
//   import { YellowBox } from 'react-native';
//   import _ from 'lodash';
  
//   YellowBox.ignoreWarnings(['Setting a timer']);
//   const _console = _.clone(console);
//   console.warn = message => {  if (message.indexOf('Setting a timer') <= -1) {    _console.warn(message);  }};

//   GoogleSignin.configure();

// class Login extends Component {

// // Somewhere in your code
// signIn = async () => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const userInfo = await GoogleSignin.signIn();
//     this.setState({ userInfo });
//   } catch (error) {
//     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//       // user cancelled the login flow
//     } else if (error.code === statusCodes.IN_PROGRESS) {
//       // operation (e.g. sign in) is in progress already
//     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//       // play services not available or outdated
//     } else {
//       // some other error happened
//     }
//   }
// };

// render() {
//     return (
//     <GoogleSigninButton
//       style={{ width: 192, height: 48 }}
//       size={GoogleSigninButton.Size.Wide}
//       color={GoogleSigninButton.Color.Dark}
//       onPress={this.signIn}
//     //   disabled={this.state.isSigninInProgress} /> 
//     />
//     )}
// }
// export default Login;

// ------------------------------------------------------------------------------------------------------------------


import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import * as firebase from 'firebase';

export default class Login extends Component {
  state = { email: '', password: '', errorMessage: null }
 handleLogin = () => {
   firebase
     .auth()
     .signInWithEmailAndPassword(this.state.email, this.state.password)
     .then(() => this.props.navigation.navigate('Welcome')) //.then(() => this.props.navigation.navigate('Home'))
     .catch(error => this.setState({ errorMessage: error.message }))
 }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/globeTrotter.png')} style={{width: 106, height: 120, bottom: 10}}/>
        <Text style={{color:'#B95255', fontSize: 40, marginBottom: 40}}>GlobeTrotter</Text>
        <Text style={{color:'#FFF3F0', fontSize: 40}}>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: '#FFF3F0' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email=>this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password=>this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Login" color="#B95255" onPress={this.handleLogin} />
        <View>
        <Text color='#292E47'> Don't have an account? <Text onPress={() => this.props.navigation.navigate('SignUp')} style={{color:'#FFF3F0', fontSize: 18}}> Sign Up </Text></Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D5B9B2',
    marginTop: -150,
  },
  textInput: {
    height: 40,
    fontSize:20,
    width: '90%',
    borderColor: '#B95255',
    borderBottomWidth: 1,
    marginTop: 8,
    marginVertical: 15
  }
})