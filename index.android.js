/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry,Navigator} from 'react-native';

import App from './components/app.js'
import Navigate from './components/navigate'
import Screen1 from './components/screen/screen1'
import Screen2 from './components/screen/screen2'

export default class Main extends Component {
   constructor(props) {
    super(props);
  }

  renderScene(route,navigator){
    switch(route.name){
      case 'screen1': return (<Screen1/>);
      case 'screen2': return (<Screen2/>);
    }
  }

  render() {
    return ( 
      <Navigator
        initialRoute={{name:'screen1'}}
        renderScene={this.renderScene}
      />
    )
  }

}


AppRegistry.registerComponent('Main', () => Main);
