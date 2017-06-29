import React, { Component } from 'react';
import {AppRegistry,Navigator} from 'react-native';

import Main from './components/main'

export default class Maincomponent extends Component {
   constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <Main/>
    )
  }

}


AppRegistry.registerComponent('Maincomponent', () => Maincomponent);
