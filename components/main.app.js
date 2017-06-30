import React, { Component } from 'react';


import {
  StyleSheet,Platform,
  Text,Image,NetInfo,
  View, ListView, Button, Alert,TouchableHighlight
} from 'react-native';

import { NavigateApp } from './navigate'

export default class Main extends Component {
  render() {
    return (
      <NavigateApp />
    )
  }
}
