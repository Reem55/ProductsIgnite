import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TextInput, Button, StyleSheet} from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
// import { searchBar } from 'react-native elements'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  state = {
    request: {
     name:'',
     quantity:''
    }
  };

  handleInput(key, text) {
    let object = Object.assign({}, this.state.request);
    object[key] = text;

    this.setState({ request: object });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#C71585',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '100',
      },
      headerRight: (<Icon name="add" color="#fff" iconStyle={{marginRight: 20}} onPress={() => { console.log('pressed') }} underlayColor="#C71585" />),
    };
  }

  render () {
    return(
      <View>
        <TextInput
          placeholder='Name ....'
          inputStyle={inputs.consraints}
          onChange={(event) => { this.handleInput('name', event.nativeEvent.text)}}
        />
        <TextInput
          placeholder='Name ....'
          inputStyle={inputs.consraints}
          onChange={(event) => { this.handleInput('name', event.nativeEvent.text)}}
        />


        <Button
          title='Done'
          buttonStyle={{
            width: 200,
            height:30,
            backgroundColor:'#C71585',
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 25
          }}
          onPress={() => {}}
        />
      </View>
    )

  }
}
const inputs = StyleSheet.create({
  constraints: {
    paddingTop:50,
    //    paddingBottom:5,
    marginTop: 50,
    marginBottom: 50
  }
});
