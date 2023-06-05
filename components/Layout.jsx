import React from 'react'
import Sidebar from './Sidebar'
import Bottombar from './Bottombar'

const Layout = ({children}) => {
  return (
    <div className='h-screen flex flex-row justify-start '> 
      <Sidebar />
      <div className=' bg-backcolor flex-1 pt-4 'id="body">
        {children}
        <Bottombar />
      </div>

    </div>
   
  )
}

export default Layout
