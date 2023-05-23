import React from 'react'
import Sidebar from './Sidebar'
import Right from './Right'
const Layout = ({children}) => {
  return (
    <div className='h-screen flex flex-row justify-start '> 
      <Sidebar />
      <div className=' bg-backcolor flex-1 pt-4 '>
        {children}

      </div>
  
    </div>
   
  )
}

export default Layout
