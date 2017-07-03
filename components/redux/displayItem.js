
import React, { Component } from 'react';
import {
  StyleSheet,Platform,StatusBar,
  Text,Image,NetInfo,TouchableOpacity,
  View, ListView, Button, Alert,TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import { connect } from 'react-redux'

class DisplayItem extends Component {
    constructor(props) {
        super(props);
    }

  render() {
      const color = this.props.yellowColor ? 'yellow':'white'
        return ( 

                <View style={styles.display}>
                    <Text style={[styles.Textdisplay,{color}]}>{this.props.myValue}</Text>
                </View>

        )
    }
}

function mapStateToProps(state){
    return {myValue: state.value, yellowColor: state.colorYellow}
}
export default connect(mapStateToProps)(DisplayItem);

const styles = StyleSheet.create({
  display: {
    flex:1/2,
    alignItems:'center',justifyContent:'center'
  },

  Textdisplay: {
    fontSize: 80
  },
})