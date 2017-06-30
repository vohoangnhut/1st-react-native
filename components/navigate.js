import React from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import {
  StyleSheet,Platform,
  Text,Image,NetInfo,
  View, ListView, Button, Alert,TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Screen1 from './screen/screen1'
import Screen2 from './screen/screen2'
import Screen3 from './screen/screen3'

const NavigatorComponent = StackNavigator({
  Home: { 
    screen: Screen1,  
    navigationOptions : {
      //header: null,
      title: 'Welcome',
      headerTitleStyle : {fontFamily: (Platform.OS === 'android') ? 'sans-serif-thin' : 'AppleSDGothicNeo-Thin'}
    }
  },
  Details: { 
    screen: Screen2,
    navigationOptions : {
      headerTitleStyle :{color:'#e5e5e5', //textAlign: 'center',alignSelf:'center',
                        fontFamily: (Platform.OS === 'android') ? 'sans-serif-thin' : 'AppleSDGothicNeo-Thin',},
      headerStyle:{
          backgroundColor:'#2c3e50',
      },
    }
  }
},{
  initialRouteName : 'Home'
})

const NavigatorComponent1 = StackNavigator({
  Home: { 
    screen: Screen3,  
    navigationOptions : {
      header: null,
      headerTitleStyle : {fontFamily: (Platform.OS === 'android') ? 'sans-serif-thin' : 'AppleSDGothicNeo-Thin'}
    }
  }
})

export const NavigateApp = TabNavigator(
  { //Router
    Home: {
      screen: NavigatorComponent,
      navigationOptions : {
        title : 'Home',
        tabBarIcon  : ({tintColor}) => <Icon name="emotsmile" size={25} color={tintColor} />
      }
    },
    Notifications: {
      screen: NavigatorComponent1,
      navigationOptions : {
        title : 'Notification'
      }
    },
  },{ //Config
    tabBarPosition : 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
        initialRouteName: 'Home',
        showIcon : true,
        activeTintColor: '#fff',
        inactiveTintColor: '#bbb',
        style: {
          backgroundColor: '#8e44ad',
        },
        titleStyle: {
          color: 'white',
        }
    }
  });