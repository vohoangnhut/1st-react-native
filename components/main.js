import React, { Component } from 'react';
import {
  StyleSheet,
  Text,Image,NetInfo,
  View, ListView, Button, Alert,TouchableHighlight
} from 'react-native';

import Screen1 from './screen/screen1'

export default class Main extends Component {
    constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <Screen1/>
    )
  }
}