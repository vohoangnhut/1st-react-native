import React, { Component } from 'react';
import {
  StyleSheet,
  Text,Image,NetInfo,
  View, ListView, Button, Alert,TouchableHighlight
} from 'react-native';



export default class App extends Component {
   constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: dataSource.cloneWithRows([]),
      isOnline: false,
    };
  }

  componentDidMount() {

    //network checking
    NetInfo.isConnected.fetch().then(isConnected => {
      this.setState({
        isOnline : isConnected
      })
      //console.log('Init, is ' + (isConnected ? 'online' : 'offline'));
    });

    NetInfo.isConnected.addEventListener(
      'change',
      (isConnected)=> {
          this.setState({
            isOnline : isConnected
          })
          //console.log('Have changed to ' + (isConnected ? 'online' : 'offline'));
      }
    );

  }

  _onPressButton(){
    if(!this.state.isOnline)
    {
      Alert.alert(
            'Warning',
            'No Network'
          )
      return;
    }
    

    this.callAPI((json)=>{
      this.setState({
        dataSource : this.state.dataSource.cloneWithRows(json)
      })
    })
  }

  callAPI(next){
    fetch('https://react-service-nhut.herokuapp.com/api/' + 0, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(function(response) {
        return response.json();
    })
    .then(function(response) {
      return next(response.rows);
    })
    .catch(function(error) {
        console.error(error);
    });
  }

  render() {
    return ( 
      <View style={styles.container}>

        <Button
          onPress={this._onPressButton.bind(this)}
          title="Fetch"
          color="#2ecc71"
          accessibilityLabel="Learn more about this purple button"
        />


        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
            <View style={styles.itemView}>
              <Image style={styles.itemViewImage} source={{uri: rowData.usrImg }} style={{width: 70, height: 70}} />
              <View style={styles.itemViewWrapText}>
                <Text style={styles.itemViewText}>{rowData.usrNm}</Text>
                <Text style={styles.itemViewText1}>{rowData.usrEml}</Text>
              </View>
            </View>
          }
        />

        
      </View>

    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5'
  },
  itemView: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    padding: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  itemViewWrapText: {
    flexDirection:'column',
    paddingLeft:10,
    paddingRight:10,
    width: 0,
    flexGrow: 1
  },
  itemViewText: {
    fontWeight:'bold',
    height:20
  },

  itemViewText1: {
    height:53
  },


});