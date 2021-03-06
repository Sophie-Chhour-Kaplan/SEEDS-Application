
import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from "./components/Login";
import Loading from './components/Loading';
import Welcome from './components/Welcome';
import signUp from './components/SignUp';
import Home from './components/Home';
import Info from "./components/Info";
import Task1 from './components/Task1';
import Task3 from './components/Task3';
import Task2 from './components/Task2';
import Task4 from './components/Task4';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
   
    createHomeStack = () =>
    <Stack.Navigator headerMode={'none'} screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="SignUp" component={signUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="UK" component={Info} />
        <Stack.Screen name="India" component={Info} />
        <Stack.Screen name="USA" component={Info} />
        <Stack.Screen name="China" component={Info} />
        <Stack.Screen name="Task1" component={Task1} />
        <Stack.Screen name="Task2" component={Task2} />
        <Stack.Screen name="Task3" component={Task3} />
        <Stack.Screen name="Task4" component={Task4} />

    </Stack.Navigator>

    render() {

        return (
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" children={this.createHomeStack}/>
                    <Drawer.Screen name="UK" component={Info} />
                    <Drawer.Screen name="India" component={Info} />
                    <Drawer.Screen name="USA" component={Info} />
                    <Drawer.Screen name="China" component={Info}/>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
};

  

