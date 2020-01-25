import React, {useState} from 'react'
import { updateText } from './redux/ActionCreators'
import {connect} from 'react-redux'


const mapStateToProps = state => {
  return {
    text:state.text
  }
}

const mapDispatchToProps = {
  updateText:(text)=>(updateText(text))
}

export function App(props) {
  return (    
    <div >  
      <h3>{props.text.text}</h3>
      <input value={props.text.text} onChange={(e)=>props.updateText(e.target.value)}/>
    </div>
  )  
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
