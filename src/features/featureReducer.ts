import { GET_PROVIDERS, GET_SERVICES, SET_PROVIDERS, SET_SERVICES } from './actionTypes'
import { ActionTypes } from './types'

const initialState = {

  services: [],
  providers: []

}

export default (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case GET_PROVIDERS:
      return { ...state, value: state.providers }
    case GET_SERVICES:
      return { ...state, value: state.services }
    case SET_PROVIDERS:
      return { ...state, providers: action.payload }
    case SET_SERVICES:
      return { ...state, services: action.payload }
    default:
      return state
  }
}
