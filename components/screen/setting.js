import React, { Component } from 'react';
import {
  StyleSheet,Platform,StatusBar,
  Text,Image,NetInfo,
  View, ListView, Button, Alert,TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default class Setting extends Component {
    constructor(props) {
        super(props);
    }

  render() {
        const { navigate } = this.props.navigation;
        return ( 
            <View style={styles.background}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                    <EntypoIcon name="chevron-left" size={30} color="#fff" style={{paddingLeft:10}} />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <Icon name="settings" size={50} color="#fff" />
                    <Text style={styles.text}>Setting</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    background:{
    flex: 1,
    backgroundColor:'#16a085',
    paddingTop: (Platform.OS === 'ios') ? 20:0,
    
    },
  header: {
    backgroundColor:'#16a085',
    height:50
  },
  body: {
      flex: 1,
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