import React, { useContext } from 'react'
import { ModeContext } from '../context/ModeContext'

const Content = () => {
  const {isDark} = useContext(ModeContext)
  return (
    <div className='content'
    style={{
      backgroundColor: isDark? "black": "white",
      color:isDark?"white":"black"
    }}
    >
      <h1>스누피</h1>
    </div>
  )
}

export default Content
