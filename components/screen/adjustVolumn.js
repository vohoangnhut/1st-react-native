
import React, { Component } from 'react';
import {
  StyleSheet,Platform,StatusBar,
  Text,Image,NetInfo,TouchableOpacity,
  View, ListView, Button, Alert,TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import ComButtons from '../redux/buttons'
import DisplayItem from '../redux/displayItem'

export default class AdjustVolumn extends Component {
    constructor(props) {
        super(props);
    }

  render() {
        return ( 
            <View style={styles.wrapScreen}>
               <View style={styles.header}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={styles.backButton}>
                        <EntypoIcon name="chevron-left" size={30} color="#fff"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <DisplayItem/>
                    
                    <ComButtons/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  wrapScreen: {
    backgroundColor:'#2C3E50',
    paddingTop: (Platform.OS === 'ios') ? 20:0,
    flex:1
  },

   header: {
    backgroundColor:'#16a085',
    height:50
  },
   backButton: {
    backgroundColor:'#16a085',
    width:30,
    marginTop:10,
    marginLeft:10
  },

  body: {
      flex:1,
      flexDirection:'column'
  },

})