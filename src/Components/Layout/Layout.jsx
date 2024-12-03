import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Layout() {


  return (
    <>
    <div className='row'>
    <div className='col-md-2 p-0'>
    <Sidebar/>
    </div>
    <div className='col-md-10 p-0'>
    <Outlet/>
    </div>
    
    </div>
    
    </>
  )
}
