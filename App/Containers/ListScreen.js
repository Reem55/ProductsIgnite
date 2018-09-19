import React, { Component } from 'react'
import { View, Text, ListView, FlatList, Platform, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import ProductsActions from '../Redux/ProductsRedux'
import { createStackNavigtor } from 'react-navigation'

let List = class List extends Component {
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

function mapStateToProps (state) {
  return { products: state.products}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(ProductsActions.productsRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
