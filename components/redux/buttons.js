
import React, { Component } from 'react';
import {
  StyleSheet,Platform,StatusBar,
  Text,Image,NetInfo,TouchableOpacity,
  View, ListView, Button, Alert,TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import { connect } from 'react-redux'

class ComButtons extends Component {
    constructor(props) {
        super(props);
    }

    
  render() {
        return ( 
         
                    <View style={styles.button}>
                        <TouchableHighlight style={styles.buttonItem} underlayColor='#03A678' 
                        onPress={()=>{this.props.dispatch({type:'DOWN'})}}
                    >
                            <Icon name="minus" size={50} color="#fff" />
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.buttonItem} underlayColor='#03A678'
                        onPress={()=>{this.props.dispatch({type:'UP'})}}
                    >
                            <Icon name="plus" size={50} color="#fff" />
                        </TouchableHighlight>
                    </View>
        )
    }
}

export default connect()(ComButtons)

const styles = StyleSheet.create({
 

  button: {
      flex:1/2,
       flexDirection:'row',
       alignItems:'center',justifyContent:'space-around'
  },

  buttonItem: {
      width: 100,
      height:100,
      borderRadius: 10,
      backgroundColor:'#3FC380',
      alignItems:'center',justifyContent:'center'
  },
})
