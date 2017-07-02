import React, { Component } from 'react';
import {
  StyleSheet,Platform,StatusBar,
  Text,Image,NetInfo,TouchableOpacity,
  View, ListView, Button, Alert,TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class Meni extends Component {
  constructor(props) {
      super(props);
  }


  render() {
        return ( 
            <View style={styles.background}>
                <Text style={styles.TextMenu}>Menu</Text>
                <TouchableHighlight style={styles.menuTouchWrap} underlayColor={'#64a3ad'} onPress={()=>{this.props.navigation.navigate('Home')}}>
                    <Icon name="home" style={styles.icon}>
                      <Text style={styles.text}>  Hone</Text>
                    </Icon>
                </TouchableHighlight>
                <TouchableHighlight style={styles.menuTouchWrap} underlayColor={'#64a3ad'} onPress={()=>{}}>
                    <Icon name="user" style={styles.icon}>
                      <Text style={styles.text}>  Profile</Text>
                    </Icon>
                </TouchableHighlight>
                <TouchableHighlight style={styles.menuTouchWrap} underlayColor={'#64a3ad'} onPress={()=>{this.props.navigation.navigate('menuItem1')}}>
                    <Icon name="settings" style={styles.icon}>
                      <Text style={styles.text}>  Setting</Text>
                    </Icon>
                </TouchableHighlight>
                <TouchableHighlight style={styles.menuTouchWrap} underlayColor={'#64a3ad'} onPress={()=>{}}>
                    <Icon name="event" style={styles.icon}>
                      <Text style={styles.text}>  Notification</Text>
                    </Icon>
                </TouchableHighlight>
            </View>
        )
    }
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor:'#347c89',
    paddingTop: (Platform.OS === 'ios') ? 20:0,
    alignItems:'flex-start',justifyContent:'center'
  },TextMenu: {
    fontSize: 40,
    color: '#fff',
    marginBottom: 20,
    textAlign : 'left',
    marginLeft: 55,
  },menuTouchWrap : {
    borderRadius: 35,
    //backgroundColor:'#64a3ad',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 30,
  },
  icon :{
    fontSize: 30,
    color: '#fff',
  },text : {
    fontSize: 25,
    color: '#fff',
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-thin' : 'AppleSDGothicNeo-Thin',
  }
})