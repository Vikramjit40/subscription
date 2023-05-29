import React, { useState,useMemo, useEffect } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Link from 'next/link';
import MOCK_DATA from '@/public/MOCK_DATA.json';
const tbodyCount=MOCK_DATA.length;

export const activeDatalen=(active)=>{
    if(active){
        const asd=MOCK_DATA.filter(function (el) {
            return el.active == true})
    return (document.getElementById("len").innerHTML=asd.length,
    document.getElementById("app").style.width=((asd.length/MOCK_DATA.length)*100) +"%"
    )
}
else{
    return (document.getElementById("len").innerHTML=MOCK_DATA.length,
    document.getElementById("app").style.width=((MOCK_DATA.length/MOCK_DATA.length)*100) +"%")
}
}
export const catDatalen=(value)=>{
    if(value=="allProjects"){
        document.getElementById("len").innerHTML=MOCK_DATA.length;
        document.getElementById("app").style.width=((MOCK_DATA.length/MOCK_DATA.length)*100) +"%"
    }
    else{
        const cat=MOCK_DATA.filter(function (el) {
            return el.category == value})
    return (document.getElementById("len").innerHTML=cat.length,
    document.getElementById("app").style.width=((cat.length/MOCK_DATA.length)*100) +"%");
    }
}
export const payDatalen=(value)=>{
    if(value=="allProjects"){
        document.getElementById("len").innerHTML=MOCK_DATA.length;
        document.getElementById("app").style.width=((MOCK_DATA.length/MOCK_DATA.length)*100) +"%"
    }
    else{
        const pay=MOCK_DATA.filter(function (el) {
            return el.payment_method == value})
    return (document.getElementById("len").innerHTML=pay.length,
    document.getElementById("app").style.width=((pay.length/MOCK_DATA.length)*100) +"%");
    }
}
export const periodDatalen=(value)=>{
    if(value=="allProjects"){
        document.getElementById("len").innerHTML=MOCK_DATA.length;
        document.getElementById("app").style.width=((MOCK_DATA.length/MOCK_DATA.length)*100) +"%"
    }
    else{
        const peri=MOCK_DATA.filter(function (el) {
            return el.period == value})
    return (document.getElementById("len").innerHTML=peri.length,
    document.getElementById("app").style.width=((peri.length/MOCK_DATA.length)*100) +"%");
    }
}
export const colorDatalen=(value)=>{
    if(value=="allProjects"){
        document.getElementById("len").innerHTML=MOCK_DATA.length;
        document.getElementById("app").style.width=((MOCK_DATA.length/MOCK_DATA.length)*100) +"%"
    }
    else{
        const colo=MOCK_DATA.filter(function (el) {
            return el.color == value})
    return (document.getElementById("len").innerHTML=colo.length,
    document.getElementById("app").style.width=((colo.length/MOCK_DATA.length)*100) +"%");
    }
}
const menuItems=[
    {id:1,label:"Subscriptions",icon:"/home.svg",link:"/"},
    {id:2,label:"Reports",icon:"/clock.svg",link:"/duration"},
    {id:3,label:"Team",icon:"/user.svg",link:"/people"},
    {id:4,label:"Linked Accounts(Soon)",icon:"/bank.svg",link:"/bank"},
    {id:5,label:"Settings",icon:"/setting.svg",link:"/setting"},
];
const Sidebar = () => {
    const [toggleCollapse,setToggleCollapse]=useState(false);
    const [isCollapsible,setIsCollapsible]=useState(false);
    const router = useRouter()
    const activeMenu=useMemo(()=> menuItems.find(menu=>menu.link===router.pathname ),[router.pathname] )
    const wrapperClasses=classNames('h-screen px-4 pt-0 pb-4 bg-light flex justify-between flex-col',{['w-20']:!toggleCollapse,['w-64']:toggleCollapse})
    const logoClasses=classNames('items-center justify-between relative',{"block":!toggleCollapse,"flex":toggleCollapse})
    const progressClass=classNames('hover:bg-[rgba(211,184,255,.5)] py-2 rounded-3 cursor-pointer w-full',{['text-center']:!toggleCollapse,[' text-center']:toggleCollapse})
    const barClass=classNames("h-2 bg-[#edf2f7] rounded-4 hover:bg-white",{['w-19']:!toggleCollapse,['w-55 m-5']:toggleCollapse})
    const collapseIconClasses=classNames("rounded justify-between bg-light-lighter items-center") 
    const handleSidebarToggle=()=>{
        setToggleCollapse(!toggleCollapse)
    }
    const getNavItemClasses=(menu)=>{
        return classNames("flex items-center mt-1 cursor-pointer  rounded overflow-hidden whitespace-nowrap",{
            ["bg-[rgba(0,0,0,0.80)]"]: activeMenu.id === menu.id,
            ["hover:bg-hoverCol"]:activeMenu.id != menu.id,
        })
    }
    const getNavItemHoverClasses=(menu)=>{
        return classNames("text-lg text-textColor marker:font-medium ",{
            ["text-white"]: activeMenu.id === menu.id,
        })
    }
    const getNavIconHoverClasses=(menu)=>{
        return classNames("fill-white",{["fill-[rgba(0,0,0,0.80)]"]: activeMenu.id != menu.id,})
    }
    const onMouseOver=()=>{
        setIsCollapsible(!isCollapsible)
    }
    return (
    <div className={wrapperClasses} style={{transition:"width 300ms cubic-bezier(0.2,0,0,1)0s",top:"0",left:"0",}} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver}>
      <div className='flex flex-col'>
        <div className={logoClasses }>
            
                <Link href="/" className='flex items-center pl-0 pt-2'>
                
                <Image src="/logo1.svg" width={45} height={45} /> 
                {toggleCollapse && (
                                    <span style={{width:'1rem',fontSize:"22px",fontWeight:"bold",color:"rgb(0,0,0)"}} > Subly</span>
                                )}         
            </Link>
               
        <div className='items-center  mt-2 p-3 cursor-pointer hover:bg-hoverCol' onClick={handleSidebarToggle}>
            <Image src="/navigation.png" width={23} height={20}/>
        </div>
        </div>
        <div className='flex flex-col items-start mt-5'>
            {menuItems.map(({icon:Icon, ...menu})=>{
                const classes = getNavItemClasses(menu);
                const hoverClass= getNavItemHoverClasses(menu);
                const iconActive=getNavIconHoverClasses(menu);
                return(
                    <div className={classes}>
                        <Link href={menu.link} className='flex py-4 px-2 items-center w-full h-full'>
                            
                                <div style={{width:'2rem'}}>
                                    <Image src={Icon} width={25} height={25} className={iconActive}  />
                                </div>
                                {toggleCollapse && (
                                    <span style={{width:'11.5rem',paddingLeft:"3px"}} className={hoverClass}> {menu.label}</span>
                                )}
                        
                        </Link>
                    </div>
                )
            })}
        </div>
        
      </div>
      <div className='flex flex-col items-start'>
        <div className={progressClass}>
        <p style={{fontWeight:"bold"}}><span id="len">{tbodyCount}</span>/{tbodyCount}{toggleCollapse && (
                                    <span style={{width:'1rem',color:"rgb(0,0,0)"}} > Subscription</span>
                                )}    </p>
        <div className={barClass} >
      <div id="app" style={{height: '100%',
        width: `100%`,
        backgroundColor: "rgb(211,184,255)",
       borderRadius:"40px",
        textAlign: 'right'}}>
      </div>
   </div>
   {toggleCollapse && (
                                    <p style={{width:'15rem',color:"#6530b2"}} ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-13otjrl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.219 3.375 8 7.399 4.781 3.375A1.002 1.002 0 0 0 3 4v15c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4a1.002 1.002 0 0 0-1.781-.625L16 7.399l-3.219-4.024c-.381-.474-1.181-.474-1.562 0zM5 19v-2h14.001v2H5zm10.219-9.375c.381.475 1.182.475 1.563 0L19 6.851 19.001 15H5V6.851l2.219 2.774c.381.475 1.182.475 1.563 0L12 5.601l3.219 4.024z"></path></svg> Upgrade your plan</p>
                                )}
   </div>
        <Link href="/" className='flex items-center w-full h-full hover:bg-hoverCol mt-4'><div><img src="/question.svg"  className='p-3 ' /></div>{toggleCollapse && (
                                    <span style={{width:'11.5rem',paddingLeft:"3px",color:"rgba(0,0,0,0.64)"}} >Help</span>
                                )}</Link>
            
        <Link href="/" className='flex items-center w-full h-full hover:bg-hoverCol mb-8 mt-2'><div><img src="/exclamation.svg"  className=' p-3' /></div>{toggleCollapse && (
                                    <span style={{width:'11.5rem',paddingLeft:"3px",color:"rgba(0,0,0,0.64)"}} >What's New</span>
                                )}</Link>
        </div>
    </div>
  )
}

export default Sidebar
