import React from 'react'
import { Outlet } from 'react-router-dom'
import {Sidebar} from './index.js'

const In = () => {
  return (
    <div className="flex flex-row items-center justify-center">
    <Sidebar/>
    <Outlet/>
    </div>
  )
}

export default In