import React, { Component } from 'react';
import {
  StyleSheet,
  Text,Image,NetInfo,
  View, ListView, Button, Alert,TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Screen1 extends Component {
    constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <View style={{flex:1,backgroundColor:'#e74c3c',alignItems:'center',justifyContent:'center'}}>
          
          <Icon name="rocket" size={30} color="#900" />
          <Text style={{fontSize:30,color:'#ecf0f1'}}>#e74c3c</Text>
      </View>
    )
  }
}