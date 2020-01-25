import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Text} from './text'


export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      text:Text
    }),
    applyMiddleware(thunk)
  )

  return store
}