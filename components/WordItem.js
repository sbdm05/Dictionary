import React, {Component} from 'react';import ReactNative from 'react-native';import { List, ListItem, Icon } from 'react-native-elements';const styles = require('../styles.js');const firebase = require('firebase');const { View, TouchableHighlight, Text, ListView } = ReactNative;class WordItem extends Component {    constructor(props) {    super(props);    this.onPressIcon = this.onPressIcon.bind(this);    this.state= { value_of_likes: 0 };    }    componentWillMount() {      this.createDataSource(this.state.value_of_likes);    }    createDataSource(value_of_likes) {      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });      this.dataSource = ds.cloneWithRows(value_of_likes);    }    onPressIcon(word){                //Initialize Firebase                var config = {                apiKey: "AIzaSyDWedZY1svNHxPUi2ReQJTlCf9Q60407E8",                authDomain: "streetfrench-a84df.firebaseapp.com",                databaseURL: "https://streetfrench-a84df.firebaseio.com"                };                var ref = firebase.database().ref();                let childItem = word+"/likes";                //Create reference                var likes_words = ref.child("items").child(word).child("likes");                      // Increment by One                       likes_words.transaction(function(currentLike) {                              return currentLike + 1;                        });                       //Sync Object Changes                       likes_words.on('value', snapshot => {                              value_of_likes = snapshot.val()                        });                       this.setState({ value_of_likes: value_of_likes});                       console.log(value_of_likes)                       console.log({value_of_likes})                       console.log(this.state.value_of_likes)              }render() {    const {english, english_erudite, likes, _key} = this.props.navigation.state.params;    return (        <TouchableHighlight>            <View style={styles.li}>                <Text style={styles.liText} >{english}</Text>                <Text style={styles.liText} >{english_erudite}</Text>                <Icon                raised                name='heartbeat'                type='font-awesome'                color='#f50'                onPress={()=>{this.onPressIcon(_key)}}                />               <ListView               enableEmptySections               dataSource={this.dataSource}               renderRow={this.renderRow}               />                <Text>{this.state.value_of_likes}</Text>           </View>        </TouchableHighlight>    );}}export default WordItem;