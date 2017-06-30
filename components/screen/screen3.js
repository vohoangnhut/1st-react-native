import React, { Component } from 'react';
import {
  StyleSheet,Platform,
  Text,Image,NetInfo,
  View, ListView, Button, Alert,TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class Screen3 extends Component {
    constructor(props) {
        super(props);
    }

  render() {
        const { navigate } = this.props.navigation;
        return ( 
            <View style={{flex:1,backgroundColor:'#c0392b'}}>
                <Icon name="list" size={35} color="#fff" />
            </View>
        )
    }
}


const styles = StyleSheet.create({
  text: {
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-thin' : 'AppleSDGothicNeo-Thin',
    color:'#2C3E50',
    fontSize:50
  },
})