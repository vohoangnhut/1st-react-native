import React, { Component } from 'react';
import {
  StyleSheet,Platform,
  Text,Image,NetInfo,TouchableOpacity,FlatList,
  View, ListView, Button, Alert,TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { SegmentedControls  } from 'react-native-radio-buttons'

import SimpleSegmentedControl from '../segmented'


import {list1,list2} from '../data'


export default class Screen1 extends Component {
    constructor(props) {
    super(props);

    this.state = {
      selectedOption : {id:1,name:'category 1'},
      lstData : list1
    }
  }

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id) => {
    // updater functions are preferred for transactional updates
    // this.setState((state) => {
    //   // copy the map rather than modifying state.
    //   const selected = new Map(state.selected);
    //   selected.set(id, !selected.get(id)); // toggle
    //   return {selected};
    // });
  };

  _renderItem = ({item}) => (
    <View style={defineStyle.viewBoxItem}>
      <Text style={defineStyle.textItem}>{item.name}</Text>
    </View>
  );

 renderSeparator = () => {
    return (
      <View
        style={{
          width: 20,
          backgroundColor: "#CED0CE",
          borderBottomRightRadius:1
        }}
      />
    );
  };

  setSelectedOption(selectedOption){
    console.log(selectedOption)
    this.setState({
      selectedOption
    });
  }

 
  render() {
    const { navigate } = this.props.navigation;

    const options = [
      {id:1,name:'category 1'},
      {id:2,name:'category 2'},
      {id:3,name:'category 3'},
    ];

   

    return ( 
      <View style={{flex:1,backgroundColor:'#ee6563'}}>
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
            options={ options.map((item)=> item.name) }
            allowFontScaling={ false } // default: true
            onSelection={ this.setSelectedOption.bind(this) }
            selectedOption={ this.state.selectedOption }
            optionStyle={{fontFamily: 'AvenirNext-Medium'}}
            containerStyle={{margin:10}}
            optionContainerStyle={{flex:1}}
          />

          <Text style={defineStyle.text}>{this.state.selectedOption.name}</Text>
          
          {/*<View style={defineStyle.wrapBox}>
            <FlatList
            
              data={this.state.lstData}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
              ItemSeparatorComponent={
                () => {
                      return (
                        <View
                          style={{
                            width: '80%',
                            backgroundColor: "#CED0CE",
                            borderBottomWidth:1,
                            borderColor:"#CED0CE",
                            marginLeft:'20%'
                          }}
                        />
                      )}
              }
              
              horizontal={true}
              //numColumns={4}
            />
          </View>*/}

      </View>
    )
  }
}


const defineStyle = StyleSheet.create({
  text: {
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-thin' : 'AppleSDGothicNeo-Thin',
    color:'#fff',
    fontSize:50,
    
  }, wrapBox: {
    backgroundColor:'#fff',
    marginTop:0,marginRight:10,marginBottom:10,marginLeft:10,
    flex:1,
  },viewBoxItem:{
    padding: 20,
  },textItem: {
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-thin' : 'AppleSDGothicNeo-Thin',
    color:'#000',
  }
})

