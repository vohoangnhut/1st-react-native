import React, { Component } from 'react';
import {
  StyleSheet,Platform,
  Text,Image,NetInfo,TouchableOpacity,
  View, ListView, Button, Alert,TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { SegmentedControls  } from 'react-native-radio-buttons'

import SimpleSegmentedControl from '../segmented'

export default class Screen1 extends Component {
    constructor(props) {
    super(props);

    this.state = {
      selectedOption : 'Option 2'
    }
  }

 
  render() {
    const { navigate } = this.props.navigation;

    const options = [
      "Option 1",
      "Option 2"
    ];

    function setSelectedOption(selectedOption){
        this.setState({
          selectedOption
        });
      }

    return ( 
      <View style={{flex:1,backgroundColor:'#ee6563',alignItems:'center',justifyContent:'center'}}>
          {/*<Icon name="trophy" size={50} color="#fff" />

          <Text style={styles.text}>HOME</Text>
          <Button
            onPress={() => navigate('Details',{ user: 'Teo' })}
            title="Go To Details" color='#841584'
          />*/}

         <SegmentedControls
          tint={'#f80046'}
          selectedTint= {'white'}
          backTint= {'#1e2126'}
          options={ options }
          allowFontScaling={ false } // default: true
          onSelection={ setSelectedOption.bind(this) }
          selectedOption={ this.state.selectedOption }
          optionStyle={{fontFamily: 'AvenirNext-Medium'}}
          optionContainerStyle={{flex: 1}}
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