import React, { Component, Dimensions } from 'react';
import {
  StyleSheet,Platform,StatusBar,
  Text,Image,NetInfo,
  View, ListView, Alert,TouchableHighlight
} from 'react-native';

import { Card, ListItem, Button, CheckBox , SearchBar, Avatar,
Badge,ButtonGroup,Divider,Header,
} from 'react-native-elements';


import Icon from 'react-native-vector-icons/SimpleLineIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
]


export default class Screen3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          checked : false,
          selectedIndex: 2
        }
    }

    onPressCheckBox () {

      this.setState({
        checked : !this.state.checked,
      })

    }

    updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}

  render() {
    const buttons = ['Hello', 'World', 'Buttons']
  const { selectedIndex } = this.state
        return ( 
            <View style={styles.background}>
                {/*<Icon name="rocket" size={50} color="#fff" />
                <Text style={styles.text}>Notification</Text>*/}
<View style={{height:50}}>
                <Header
                  leftComponent={( <EntypoIcon name="chevron-left" size={30} color="#fff"/> )}
                  centerComponent={( <EntypoIcon name="chevron-left" size={30} color="#fff"/> )}
                  rightComponent={( <EntypoIcon name="chevron-left" size={30} color="#fff"/> )}
                />
                </View>
                <View>
                
                <SearchBar
                  round
                  onChangeText={()=>{}}
                  placeholder='Type Here...' />
                                
                <CheckBox
                  center
                  title='Click Here'
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checked={this.state.checked}
                  onPress = {this.onPressCheckBox.bind(this)}
                />

                <Avatar
                  small
                  rounded
                  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                />

                <Divider style={{ backgroundColor: 'yellow' }} />

                <Badge containerStyle={{ backgroundColor: 'violet'}}>
                  <Text>User 1</Text>
                </Badge>

                <ButtonGroup
                onPress={this.updateIndex.bind(this)}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={{height: 100}} />
                </View>



            </View>
        )
    }
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor:'#347c89',
    paddingTop: (Platform.OS === 'ios') ? 20:0,
  },menuIcon: {
    fontSize: 25,
    fontWeight: '600'
  },text: {
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-thin' : 'AppleSDGothicNeo-light',
    color:'#fff',
    fontSize:50
  },
})