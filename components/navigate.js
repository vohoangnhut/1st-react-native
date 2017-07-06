import React from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import {
  StyleSheet,Platform,
  Text,Image,NetInfo,TouchableOpacity,
  View, ListView, Button, Alert,TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import Screen1 from './screen/screen1'
import Screen2 from './screen/screen2'
import Screen3 from './screen/screen3'
import Screen4 from './screen/screen4'
import Menu from './screen/menu'
import Setting from './screen/setting'
import AdjustVolumn from './screen/adjustVolumn'



const stack1 = StackNavigator({
  Home: { 
    screen: Screen1,  
    navigationOptions : ({navigation}) => ({
      headerLeft: 
          <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
              <EntypoIcon style={{paddingLeft: 10,color:'#fff'}} name="menu" size={30} />
          </TouchableOpacity>
      ,
      title: null,//'Welcome',
      headerTitleStyle : {fontFamily: (Platform.OS === 'android') ? 'sans-serif-thin' : 'AppleSDGothicNeo-Thin'},
      headerStyle: {
        backgroundColor:'#ee6563',
        borderBottomWidth: 0,
        
      },
      tintColor: 'black'
    })
  },
  Details: { 
    screen: Screen2,
    navigationOptions : {
      headerTitleStyle :{color:'#e5e5e5', //textAlign: 'center',alignSelf:'center',
                        fontFamily: (Platform.OS === 'android') ? 'sans-serif-thin' : 'AppleSDGothicNeo-Thin',},
      // headerStyle:{
      //     backgroundColor:'#2c3e50',
      // },
    }
  }
},{
  initialRouteName : 'Home'
})

const stack2 = StackNavigator({
  Home1: { 
    screen: Screen3,  
    navigationOptions : {
      header: null,
      headerTitleStyle : {fontFamily: (Platform.OS === 'android') ? 'sans-serif-thin' : 'AppleSDGothicNeo-Thin'}
    }
  },

   DetailsUser: { 
    screen: Screen2,
    navigationOptions : {
      headerTitleStyle :{color:'#e5e5e5', //textAlign: 'center',alignSelf:'center',
                        fontFamily: (Platform.OS === 'android') ? 'sans-serif-thin' : 'AppleSDGothicNeo-Thin',},
      // headerStyle:{
      //     backgroundColor:'#2c3e50',
      // },
    }
  }
})

const stask3 = StackNavigator({
  Menu: { 
    screen: Menu,  
    navigationOptions : {
      header: null,
      headerTitleStyle : {fontFamily: (Platform.OS === 'android') ? 'sans-serif-thin' : 'AppleSDGothicNeo-Thin'}
    }
  }
})

const stask4 = StackNavigator({
  Menu: { 
    screen: Screen4,  
    navigationOptions : {
      header: null,
      headerTitleStyle : {fontFamily: (Platform.OS === 'android') ? 'sans-serif-thin' : 'AppleSDGothicNeo-Thin'}
    }
  }
})


// const Tabs = TabNavigator(
//   { //Router
//     Home: {
//       screen: stack1,
//       navigationOptions : {
//         title : 'Home',
//         tabBarIcon  : ({tintColor}) => <Icon name="home" size={20} color={tintColor} />,
        
//       },
//       tabBarOptions: {
//         style: {
//           backgroundColor: 'blue',
//         }
//       }
//     },
//     Notifications: {
//       screen: stack2,
//       navigationOptions : {
//         title : 'Notification'     
//         ,tabBarIcon  : ({tintColor}) => <Icon name="equalizer" size={20} color={tintColor} />
//       }
//     },Screen: {
//       screen: stask4,
//       navigationOptions : {
//         title : 'Screen' 
//         ,tabBarIcon  : ({tintColor}) => <Icon name="cursor" size={20} color={tintColor} />
//       }
//     },
//   },{ //Config
//     tabBarPosition : 'bottom',
//     swipeEnabled: true,
//     initialRouteName: 'Home',
//     tabBarOptions: {
//         showIcon : true,
//         showLabel : false,
//         activeTintColor: '#ff274b',
//         inactiveTintColor: '#878787',
//         style: {
//           backgroundColor: '#ee6563',//'#f8f8f8',
//           //width:40,
//         },
//         titleStyle: {
//           color: 'white',
//         }
//     }
//   });

  export const NavigateApp = DrawerNavigator({
    Menu : {
      screen : stack1
    },menuItem1:{
      screen: Setting
    }, adjustVolumns: {
      screen:AdjustVolumn
    }
  },{
  drawerWidth: 300,
  drawerPosition: 'left',
  contentComponent: props => (<Menu {...props}/>)
});