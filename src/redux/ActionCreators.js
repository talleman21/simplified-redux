import * as ActionTypes from './ActionTypes'

export const updateText = (text) => ({  
  type:ActionTypes.UPDATE_TEXT,
  payload:text
})