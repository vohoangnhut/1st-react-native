
import React, { Component } from 'react';
import {
  StyleSheet,Platform,StatusBar,
  Text,Image,NetInfo,TouchableOpacity,
  View, ListView, Button, Alert,TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default class AdjustVolumn extends Component {
    constructor(props) {
        super(props);
    }

  render() {
        return ( 
            <View style={styles.wrapScreen}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                    <EntypoIcon name="chevron-left" size={30} color="#fff" style={{paddingLeft:10}} />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <View style={styles.display}>
                        <Text>1</Text>
                    </View>
                    <View style={styles.button}>
                        <TouchableHighlight style={{width:55,display:'inline'}} underlayColor='red' onPress={()=>{}}>
                            <Icon name="plus" size={50} color="#fff" />
                        </TouchableHighlight>
                        <TouchableHighlight style={{width:55,display:'inline'}} underlayColor='red' onPress={()=>{}}>
                            <Icon name="minus" size={50} color="#fff" />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  wrapScreen: {
    backgroundColor:'#f39c12',
    paddingTop: (Platform.OS === 'ios') ? 20:0,
    
  },header: {
    backgroundColor:'#16a085',
    height:50
  },
  display: {
    alignItems:'center',justifyContent:'center'
  },
  button: {
    alignItems:'center'
  },
})