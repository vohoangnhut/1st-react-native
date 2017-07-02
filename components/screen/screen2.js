import React, { Component } from 'react';
import {
  StyleSheet,Platform,
  Text,Image,NetInfo,
  View, ListView, Button, Alert,TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class Screen2 extends Component {
    constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Details - ${navigation.state.params.user}`,
  });

  render() {

    const { params } = this.props.navigation.state;
    return ( 
      <View style={{flex:1,backgroundColor:'#2c3e50',alignItems:'center',justifyContent:'center'}}>
          <Icon name="earphones-alt" size={50} color="#fff" />
          <Text style={styles.text}>{params.user}</Text>
          <Button
            onPress={() => (this.props.navigation.navigate('DrawerOpen'))}
            title="Menu" color='#fff'
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-thin' : 'AppleSDGothicNeo-Thin',
    color:'#fff',
    fontSize:50
  },
})