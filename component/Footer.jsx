import React, { useContext } from 'react'
import { ModeContext } from '../context/ModeContext'

const Footer = () => {
  const {isDark, setIsDark}= useContext(ModeContext)
  

  return (
    <div className='footer'
    style={{
      backgroundColor:isDark?"black":"lightgray",
      color:isDark?"white":"black"
    }}
    >
      <button className='button' onClick={()=>{setIsDark(!isDark)}}>
        {isDark?'Dark Mode':'Light Mode'}
      </button>
    </div>
  )
}

export default Footer
