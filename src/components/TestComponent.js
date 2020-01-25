import React, { Component } from 'react'

function TestComponent (props){  
  
  return (
    <div onClick={()=>props.clickFunction('Clicked!!!')}>
      {props.testProp}<br/>
      {props.testProp2}
    </div>
  )
  
}

export default TestComponent
