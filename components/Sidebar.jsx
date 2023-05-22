import React, { useState,useMemo } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Link from 'next/link';



const menuItems=[
    {id:1,label:"Home",icon:"/home.png",link:"/"},
    {id:2,label:"Duration",icon:"/clock.png",link:"/duration"},
    {id:3,label:"People",icon:"/user.png",link:"/people"},
    {id:4,label:"Bank",icon:"/bank.png",link:"/bank"},
    {id:5,label:"Setting",icon:"/settings.png",link:"/setting"},
];

const Sidebar = () => {
    const [toggleCollapse,setToggleCollapse]=useState(false);
    const [isCollapsible,setIsCollapsible]=useState(false);
    const router = useRouter()
    const activeMenu=useMemo(()=> menuItems.find(menu=>menu.link===router.pathname ),[router.pathname] )
    const wrapperClasses=classNames('h-screen px-4 pt-0 pb-4 bg-light flex justify-between flex-col',{['w-20']:!toggleCollapse,['w-40']:toggleCollapse})
    const collapseIconClasses=classNames("rounded justify-between bg-light-lighter items-center") 
    const handleSidebarToggle=()=>{
        setToggleCollapse(!toggleCollapse)
    }
    const getNavItemClasses=(menu)=>{
        return classNames("flex items-center mt-1 cursor-pointer hover:bg-light-lighter rounded overflow-hidden whitespace-nowrap",{
            ["bg-light-lighter"]: activeMenu.id === menu.id
        })
    }
    const onMouseOver=()=>{
        setIsCollapsible(!isCollapsible)
    }
    
    return (
    <div className={wrapperClasses} style={{transition:"width 300ms cubic-bezier(0.2,0,0,1)0s"}} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver}>
      <div className='flex flex-col'>
        <div className='flex items-center justify-between relative'>
            <div className='flex items-center pl-0 pt-2 gap-4'>
                <Image src="/logo1.svg" width={45} height={45} />            
            </div>   
        </div>
        <div className='items-center pl-2 pt-4 cursor-pointer' onClick={handleSidebarToggle}>
            <Image src="/navigation.png" width={23} height={20}/>
        </div>
        <div className='flex flex-col items-start mt-5'>
            {menuItems.map(({icon:Icon, ...menu})=>{
                const classes = getNavItemClasses(menu);
                return(
                    <div className={classes}>
                        <Link href={menu.link} className='flex py-4 px-3 items-center w-full h-full'>
                            
                                <div style={{width:'1.4rem'}}>
                                    <Image src={Icon} width={20} height={20} />
                                </div>
                                {toggleCollapse && (
                                    <span style={{width:'5.5rem'}} className={classNames("text-md font-medium text-text-light")}>{menu.label}</span>
                                )}
                        
                        </Link>
                    </div>
                )
            })}
        </div>
        
      </div>
      <div className='flex flex-col items-start '>
        <p>14/300</p>
       
        <Link href="/"><Image src="/question.png" width={18} height={18} className='ml-3 mt-6' /></Link>
        <Link href="/"><Image src="/exclamation.png" width={18} height={18}  className='mt-5 ml-3 mb-8' /></Link>
        </div>
    </div>
  )
}

export default Sidebar
