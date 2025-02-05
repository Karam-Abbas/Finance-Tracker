import React from 'react'
import { Outlet } from 'react-router-dom'
import {Sidebar} from './index.js'

const In = () => {
  return (
    <div className="flex flex-row items-start justify-evenly h-full">
    <Sidebar className="h-full flex-grow"/>
    <Outlet/>
    </div>
  )
}

export default In