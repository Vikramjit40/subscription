import React, { useState,useMemo } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Link from 'next/link';

const menuItems=[
    {id:1,label:"Home",icon:"/logo1.svg",link:"/"},
    {id:2,label:"Duration",icon:"/logo1.svg",link:"/duration"},
    {id:3,label:"People",icon:"/logo1.svg",link:"/people"},
    {id:4,label:"Bank",icon:"/logo1.svg",link:"/bank"},
    {id:5,label:"Setting",icon:"/logo1.svg",link:"/setting"},
];

const Sidebar = () => {
    const [toggleCollapse,setToggleCollapse]=useState(false);
    const [isCollapsible,setIsCollapsible]=useState(false);
    const router = useRouter()
    const activeMenu=useMemo(()=> menuItems.find(menu=>menu.link===router.pathname ),[router.pathname] )
    const wrapperClasses=classNames('h-screen px-4 pt-0 pb-4 bg-light flex justify-between flex-col',{['w-40']:!toggleCollapse,['w-20']:toggleCollapse})
    const collapseIconClasses=classNames("rounded justify-between bg-light-lighter items-center") 
    const handleSidebarToggle=()=>{
        setToggleCollapse(!toggleCollapse)
    }
    const getNavItemClasses=(menu)=>{
        return classNames("flex items-center cursor-pointer hover:bg-light-lighter rounded overflow-hidden whitespace-nowrap",{
            ["bg-light-lighter"]: activeMenu.id === menu.id
        })
    }
    const onMouseOver=()=>{
        setIsCollapsible(!isCollapsible)
    }
    return (
    <div className={wrapperClasses} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver}>
      <div className='flex flex-col'>
        <div className='flex items-center justify-between relative'>
            <div className='flex items-center pl-1 pt-2 gap-4'>
                <Image src="/logo1.svg" width={40} height={40} />            
            </div>   
        </div>
        <div className='items-center pl-3 pt-4 cursor-pointer' onClick={handleSidebarToggle}>
            <Image src="/navigation.png" width={23} height={20}/>
        </div>
        <div className='flex flex-col items-start mt-5'>
            {menuItems.map(({icon:Icon, ...menu})=>{
                const classes = getNavItemClasses(menu);
                return(
                    <div className={classes}>
                        <Link href={menu.link} className='flex py-4 px-3 items-center w-full h-full'>
                            
                                <div style={{width:'2.5rem'}}>
                                    <Image src={Icon} width={30} height={30} />
                                </div>
                                {!toggleCollapse && (
                                    <span style={{width:'5.5rem'}} className={classNames("text-md font-medium text-text-light")}>{menu.label}</span>
                                )}
                        
                        </Link>
                    </div>
                )
            })}
        </div>
        
      </div>
      <div className='flex flex-col items-start'>
        <Link href="/"><Image src="/logo1.svg" width={30} height={30} /></Link>
        <Link href="/"><Image src="/logo1.svg" width={30} height={30} /></Link>
        </div>
    </div>
  )
}

export default Sidebar
