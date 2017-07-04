import React, { Component, Dimensions } from 'react';
import {
  StyleSheet,Platform,StatusBar,
  Text,Image,NetInfo,ScrollView,FlatList,
  View, ListView, Alert,TouchableHighlight,Modal
} from 'react-native';

import { Card, ListItem, Button, CheckBox , SearchBar, Avatar,
Badge,ButtonGroup,Divider,Header,List,
} from 'react-native-elements';

import DemoModal from '../modal/modal'

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const list = [
  {
    id:1,
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    id:2,    
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },{
    id:3,    
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    id:4,   
    name: 'Jackie Chan',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    id:5,   
    name: 'Jackie Chan',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    id:6,   
    name: 'Jackie Chan',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    id:7,   
    name: 'Jackie Chan',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    id:8,   
    name: 'Jackie Chan',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    id:9,   
    name: 'Jackie Chan',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    id:10,   
    name: 'Jackie Chan',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    id:11,   
    name: 'Jackie Chan',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    id:12,   
    name: 'Jackie Chan',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'Vice Chairman'
  },
  // more items
]


export default class Screen3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          checked : false,
          selectedIndex: 2,
          _listData : list
        }
    }

    _keyExtractor = (item, index) => item.id;

    _pressItem(name){
      Alert.alert(
        'Alert',
        name)
    }

     renderHeader = () => {
      return <SearchBar placeholder="Type Here..." lightTheme round />;
    };

    _renderItem = ({item}) => (
          <ListItem
            roundAvatar
            title='Limited supply! Its like digital gold!'
            avatar={{uri:item.avatar_url}}
            //onPress={()=>{this._pressItem(item.name)}}
            onPress={()=>{this.props.navigation.navigate('DetailsUser',{ user: item.name })}}
            title={item.name}
            containerStyle={{backgroundColor:'#e5e5e5' }}
            subtitle={
              <View style={styles.subtitleView}>
                <Text>{item.subtitle}</Text>
              </View>
            }
          />
      );

      callChildMethod(){
        console.log(this.refs)
      }

      _changeSearchBar(text) {
         const filteredAssets = this.state._listData.filter(asset => asset.name.indexOf(text) !== -1);
        this.setState({
          _listData: filteredAssets
        });
      }

  render() {
        const { navigate } = this.props.navigation;
        return ( 
            <View style={styles.background}>
                {/*<Icon name="rocket" size={50} color="#fff" />
                <Text style={styles.text}>Notification</Text>*/}
                <FlatList
                  ListHeaderComponent={()=>{return <SearchBar placeholder="Type Here..." round onChangeText={(text)=>{this._changeSearchBar(text)}}/>}}
                  data={this.state._listData}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
                  ListFooterComponent={()=>{return <Button
                      raised
                      backgroundColor='#3f51b5'
                      icon={{name: 'cached'}}
                      onPress={()=> {this.refs.abc.setModalVisible(true)}}
                      title='SHOW MODAL' />
                  }}
                />

                


               

                
                <DemoModal ref='abc'/>
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
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
  },

})