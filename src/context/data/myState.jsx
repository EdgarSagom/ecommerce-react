import React from 'react'
import MyContext from './myContext'

function MyState (props) {
  const state = {
    name: 'Edgar Sagom',
    classes: '25 WEB A'
  }

  const color = 'blue'

  return (
    <MyContext.Provider value={{ state, color }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState
