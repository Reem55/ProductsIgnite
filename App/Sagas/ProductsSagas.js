import { call, put } from 'redux-saga/effects'
import ProductsActions from '../Redux/ProductsRedux'

export function * getProducts (api, action) {
  const {data} = action
  // get current data from Store
  // const currentData = yield select(ProductsSelectors.getData)
  // make the call to the api
  const response = yield call(api.getproducts, data)

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(ProductsActions.productsSuccess(response.data))
  } else {
    yield put(ProductsActions.productsFailure())
  }
}

/**
 * ADD
 **/
export function * addProduct (api, action) {
  const {data} = action
  const response = yield
  call(api.addProduct, data)
  if (response.ok) {
    yield
    put(ProductsActions.ProductaddSuccess(response.data))
  } else {
    yield
    put(ProductsActions.ProductaddFailure())
  }
}

/**
 * EDIT
 */

export function * editProduct (api, action) {
  const {data} = action
  const response = yield
  call(api.editProduct, data)
  if (response.ok) {
    yield
    put(ProductsActions.ProducteditSuccess(response.data))
  } else {
    yield
    put(ProductsActions.ProducteditFailure())
  }
}

/**
 *DELETE
**/
export function * deleteProduct (api, action) {
  const {data} = action
  const response = yield
  call(api.deleteProduct, data)
  if (response.ok) {
    yield
    put(ProductsActions.ProductdeleteSuccess(response.data))
  } else {
    yield
    put(ProductsActions.ProductdeleteFailure())
  }
}
