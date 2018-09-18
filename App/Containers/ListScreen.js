import React, { Component } from 'react'
import { View, Text, ListView, FlatList, Platform, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { createStackNavigtor } from 'react-navigation'


export default class List extends Component {
  static NavigationOptions = ({ navigation }) => {
    return {
      title: 'List Messages',
      headerStyle: {
        backgroundColor: '#C71585',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight : '100',
      },
    };
  }


}

