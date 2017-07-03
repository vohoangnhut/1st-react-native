import React, { Component } from 'react';
import {
  StyleSheet,Platform,
  Text,Image,NetInfo,TouchableOpacity,
  View, ListView, Button, Alert,TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class Screen1 extends Component {
    constructor(props) {
    super(props);
  }

 
  render() {
    const { navigate } = this.props.navigation;
    return ( 
      <View style={{flex:1,backgroundColor:'#ee6563',alignItems:'center',justifyContent:'center'}}>
          <Icon name="trophy" size={50} color="#fff" />

          <Text style={styles.text}>HOME</Text>
          <Button
            onPress={() => navigate('Details',{ user: 'Teo' })}
            title="Go To Details" color='#841584'
          />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  text: {
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-thin' : 'AppleSDGothicNeo-Thin',
    color:'#fff',
    fontSize:50,
    
  }
})