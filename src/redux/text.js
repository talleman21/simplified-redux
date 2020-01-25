import * as ActionTypes from './ActionTypes'

export const Text = (state = {text:'Im text'},action) => {
  switch(action.type){
    case ActionTypes.UPDATE_TEXT:
      return{...state,text:action.payload}
    default:
      return state
  }
}