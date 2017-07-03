
import React, { Component } from 'react';
import {
  StyleSheet,Platform,StatusBar,Modal,
  Text,Image,NetInfo,TouchableOpacity,
  View, ListView, Button, Alert,TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import ComButtons from '../redux/buttons'
import DisplayItem from '../redux/displayItem'

export default class DemoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
    }

    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }

  render() {
        return ( 
           <Modal
                  animationType={"slide"}
                  transparent={false}
                  visible={this.state.modalVisible}
                  onRequestClose={() => {alert("Modal has been closed.")}}
                  >
                <View style={styles.wrapScreen}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={()=>{this.setModalVisible(false)}} style={styles.backButton}>
                            <EntypoIcon name="cross" size={30} color="#fff"/>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
  wrapScreen: {
    backgroundColor:'#e5e5e5',
    paddingTop: (Platform.OS === 'ios') ? 20:0,
    flex:1
  },
   header: {
    backgroundColor:'#16a085',
    height:50
  },
   backButton: {
    backgroundColor:'#16a085',
    width:30,
    marginTop:10,
    marginLeft:10
  },
})