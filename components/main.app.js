import React, { Component } from 'react';

import {
  StyleSheet,Platform,
  Text,Image,NetInfo,
  View, ListView, Button, Alert,TouchableHighlight
} from 'react-native';
import { NavigateApp } from './navigate'

import { createStore } from 'redux';
import { Provider } from 'react-redux';


const defaultState = {
  value : 0,
  colorYellow : false,
}

const reducer = (state = defaultState, action) => {
  if(action.type === 'UP')
  {
    if(state.value >= 4) //change to yellow from 5
      return {value: state.value + 1, colorYellow:true}
    return {value: state.value + 1, colorYellow:false}
  }
  if(action.type === 'DOWN')
  {
    if(state.value == 0)
      return {...state,value: 0}
    if(state.value <= 5)
      return {value: state.value - 1, colorYellow:false}
    return {value: state.value - 1, colorYellow:true}
  }
  return state
}

const store = createStore(reducer)

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigateApp />
      </Provider>
    )
  }
}
