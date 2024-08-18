import React from 'react'
import {ThemeSwitch} from './index.js'
import '../../public/stylesheets/LogIn.css'
function Header() {
  return (
    <>
    <div className='flex items-center justify-between h-6 px-7 py-5'>
      <div className='text-[--primary-color] text-lg'>Finance Tracker</div>
      <ThemeSwitch />
    </div>
    </>
  )
}

export default Header