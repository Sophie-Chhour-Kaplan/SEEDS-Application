import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
 

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Home Screen</Text>
                <Button title="Go to Info Screen" onPress={() => this.props.navigation.navigate('Info')}/>
                <Button title="Go to Task Screen" onPress={() => this.props.navigation.navigate('Task')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    headerText: {
      fontSize: 40,
      textAlign: "center",
      margin: 10
    },
  
  });
  

export default Home;