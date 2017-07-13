import React, {Component} from 'react';
import ReactNative from 'react-native';
import { List, ListItem, Card } from 'react-native-elements';
import firebase from 'firebase';
const { View, TouchableHighlight, Text } = ReactNative;

const {
  AppRegistry,
  ListView,
  StyleSheet,
  TouchableOpacity,
} = ReactNative;



class WordOfTheDay extends Component{

  constructor(props) {
    super(props);
    // const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    // this.state = {
    //     dataSource: ds.cloneWithRows([])
    // };
}


  render(){


    return(
      <Card
        title='WORD OF THE DAY'
      >
              <ListView
              automaticallyAdjustContentInsets={false}
              dataSource={this.props.dataSource}
              renderRow={this.props.renderRow}
              enableEmptySections={true}
              />
      </Card>

      );

  }

_renderItem(item){

}

 _renderWordOfTheDay(item) {
       return (
        <ListItem item={item} />
        );
    }

}


export default WordOfTheDay ;

