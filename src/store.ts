import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { FeatureReducer } from './features'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  data: FeatureReducer
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store
