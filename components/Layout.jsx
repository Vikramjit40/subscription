import React from 'react'
import Sidebar from './Sidebar'
const Layout = () => {
  return (
    <div className='h-screen flex flex-row justify-start'> 
      <Sidebar />
      <div className=' bg-backcolor flex-1 p-4'>
        Blog dashboard
     
      </div>
    </div>
  )
}

export default Layout
