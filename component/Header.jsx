import React, { useContext } from 'react'
import { ModeContext } from '../context/ModeContext'

const Header = () => {

  // "나 context 안에 있는 데이터 혹은 함수 쓰고 싶어"
  const {isDark} = useContext(ModeContext)
  console.log('is Dark', isDark);
  return (
    <div 
    className='header'
    style={{
      backgroundColor: isDark? "black" : "skyblue",
      color: isDark ? "white" : "black"
    }}
    >
      <h1>빙그레</h1>
    </div>
  )
}

export default Header
