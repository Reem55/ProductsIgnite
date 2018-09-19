import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text, Image, Icon, Alert, View, TextInput, Button, StyleSheet} from 'react-native'
// import { searchBar } from 'react-native elements'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'
import ProductsActions from '../Redux/ProductsRedux'

let launchScreen = class LaunchScreen extends Component {
  state = {
    request: {
      name: '',
      quantity: ''
    },
    loading: false
  };

  componentDidUpdate (prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.state.loading && !this.props.products.fetching) {
      this.setState({loading: false})
      if (this.props.products.error) {
        Alert.alert(
          'failed',
          this.props.products.error.message + '\n' + 'Please try again later',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')}
          ],
          {cancelable: false}
        )
      } else {
        if (this.props.products.data.id) {
          Alert.alert(
            'congratulations',
            'Added Successfully',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')}
            ],
            {cancelable: false}
          )
        } else {
          Alert.alert(
            'failed',
            'Something went wrong' + '\n' + 'Please try again later',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')}
            ],
            {cancelable: false}
          )
        }
      }
    }
  }

  handleInput (key, text) {
    let object = Object.assign({}, this.state.request)
    object[key] = text

    this.setState({ request: object })
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#C71585'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '100'
      },
      headerRight: (<Icon name='add' color='#fff' iconStyle={{marginRight: 20}} onPress={() => { console.log('pressed') }} underlayColor='#C71585' />)
    }
  }

  handleSubmit () {
    // console.log(this.state.textName + ' ' + this.state.textQuantity)
    this.props.addProduct(this.state.textName, this.state.textQuantity)
  }

  render () {
    return (
      <View>
        <TextInput
          placeholder='Name ....'
          inputStyle={inputs.consraints}
          onChangeText={(textName) => this.setState({textName})}
        />
        <TextInput
          placeholder='Name ....'
          inputStyle={inputs.consraints}
          onChangeText={(textQuantity) => this.setState({textQuantity})}
        />

        <Button
          title='Done'
          buttonStyle={{
            width: 200,
            height: 30,
            backgroundColor: '#C71585',
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 25
          }}
          onPress={() => this.handleSubmit()}
        />
      </View>
    )
  }
}
const inputs = StyleSheet.create({
  constraints: {
    paddingTop: 50,
    //    paddingBottom:5,
    marginTop: 50,
    marginBottom: 50
  }
})

function mapStateToProps (state) {
  return { products: state.products}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: function (name, quantity) {
      this.setState({loading: true})
      dispatch(ProductsActions.productAddRequest(name, quantity))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(launchScreen)
