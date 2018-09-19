import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  productsRequest: ['data'],
  productsSuccess: ['payload'],
  productsFailure: null,

  /**
   * add product
   */
  productAddRequest: ['name', 'quantity'],
  productAddSuccess: ['payload'],
  productAddFailure: null,

  /**
   * edite
   */
  productEditRequest: ['data'],
  productEditSuccess: ['payload'],
  productEditFailure: null,

  /**
   * delete
   */
  productDeleteRequest: ['data'],
  productDeleteSuccess: ['payload'],
  productDeleteFailure: null

})

export const ProductsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  name: "",
  quantity: 0,
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { name, quantity }) =>
  state.merge({ fetching: true, name, quantity, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/**
 * add data
 * @param state
 * @param data
 * @returns {*}
 */
export const addRequest = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const addSuccess = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const addFailure = state =>
  state.merge({ fetching: false, error: true, payload: null })
/**
 * edit data
 */

export const editRequest = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const editSuccess = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const editFailure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/**
 * delete data
 */
export const deleteRequest = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const deleteSuccess = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const deleteFailure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  /**
   * Listing
   */
  [Types.PRODUCTS_REQUEST]: request,
  [Types.PRODUCTS_SUCCESS]: success,
  [Types.PRODUCTS_FAILURE]: failure,
  /**
   * add
   */
  [Types.PRODUCT_ADD_REQUEST]: addRequest,
  [Types.PRODUCT_ADD_SUCCESS]: addSuccess,
  [Types.PRODUCT_ADD_FAILURE]: addFailure,
  /**
   * edit
   */
  [Types.PRODUCT_EDIT_REQUEST]: editRequest,
  [Types.PRODUCT_EDIT_SUCCESS]: editSuccess,
  [Types.PRODUCT_EDIT_FAILURE]: editFailure,

  /**
   * delete
   */
  [Types.PRODUCT_DELETE_REQUEST]: deleteRequest,
  [Types.PRODUCT_DELETE_SUCCESS]: deleteSuccess,
  [Types.PRODUCT_DELETE_FAILURE]: deleteFailure
})
