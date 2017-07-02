import React, { Component } from 'react';
import {
  StyleSheet,Platform,StatusBar,
  Text,Image,NetInfo,
  View, ListView, Button, Alert,TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class Screen4 extends Component {
    constructor(props) {
        super(props);
    }

  render() {
        const { navigate } = this.props.navigation;
        return ( 
            <View style={styles.background}>
                <Icon name="screen-desktop" size={50} color="#fff" />
                <Text style={styles.text}>Screen</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor:'#f39c12',
    paddingTop: (Platform.OS === 'ios') ? 20:0,
    alignItems:'center',justifyContent:'center'
  },menuIcon: {
    fontSize: 25,
    fontWeight: '600'
  },text: {
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-thin' : 'AppleSDGothicNeo-light',
    color:'#fff',
    fontSize:50
  },
})