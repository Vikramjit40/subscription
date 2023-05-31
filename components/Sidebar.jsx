import React, { useState,useMemo, useEffect } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Link from 'next/link';
import MOCK_DATA from '@/public/MOCK_DATA.json';
import { UncontrolledTooltip } from 'reactstrap';
import{Modal,ModalBody,ModalHeader,ModalFooter,Button} from 'reactstrap';
const tbodyCount=MOCK_DATA.filter(function (el) {
    return el.active == true})

export const activeDatalen=(active)=>{
    if(active){
        const asd=MOCK_DATA.filter(function (el) {
            return el.active == false})
    return (document.getElementById("len").innerHTML=asd.length,
    document.getElementById("app").style.width=((asd.length/MOCK_DATA.length)*100) +"%"
    )
}
else{
    const act=MOCK_DATA.filter(function (el) {
        return el.active == true})
    return (document.getElementById("len").innerHTML=act.length,
    document.getElementById("app").style.width=((act.length/MOCK_DATA.length)*100) +"%")
}
}
export const catDatalen=(value,active)=>{
    if(value=="allProjects"&& active){
        document.getElementById("len").innerHTML=MOCK_DATA.filter(function (el) {
            return el.active == true}).length;
        document.getElementById("app").style.width=((MOCK_DATA.filter(function (el) {
            return el.active == true}).length/MOCK_DATA.length)*100) +"%"
    }
    else if(value=="allProjects"&& !active){
        document.getElementById("len").innerHTML=MOCK_DATA.filter(function (el) {
            return el.active == false}).length;
        document.getElementById("app").style.width=((MOCK_DATA.filter(function (el) {
            return el.active == false}).length/MOCK_DATA.length)*100) +"%"
    }
    else{
        const cat=MOCK_DATA.filter(function (el) {
            return el.category == value})
    return (document.getElementById("len").innerHTML=cat.length,
    document.getElementById("app").style.width=((cat.length/MOCK_DATA.length)*100) +"%");
    }
}
export const payDatalen=(value,active)=>{
    if(value=="allProjects" && active){
        document.getElementById("len").innerHTML=MOCK_DATA.filter(function (el) {
            return el.active == true}).length;
        document.getElementById("app").style.width=((MOCK_DATA.filter(function (el) {
            return el.active == true}).length/MOCK_DATA.length)*100) +"%"
    }
    else if(value=="allProjects"&& !active){
        document.getElementById("len").innerHTML=MOCK_DATA.filter(function (el) {
            return el.active == false}).length;
        document.getElementById("app").style.width=((MOCK_DATA.filter(function (el) {
            return el.active == false}).length/MOCK_DATA.length)*100) +"%"
    }
    else{
        const pay=MOCK_DATA.filter(function (el) {
            return el.payment_method == value})
    return (document.getElementById("len").innerHTML=pay.length,
    document.getElementById("app").style.width=((pay.length/MOCK_DATA.length)*100) +"%");
    }
}
export const periodDatalen=(value,active)=>{
    if(value=="allProjects"&& active){
        document.getElementById("len").innerHTML=MOCK_DATA.filter(function (el) {
            return el.active == true}).length;
        document.getElementById("app").style.width=((MOCK_DATA.filter(function (el) {
            return el.active == true}).length/MOCK_DATA.length)*100) +"%"
    }
    else if(value=="allProjects"&& !active){
        document.getElementById("len").innerHTML=MOCK_DATA.filter(function (el) {
            return el.active == false}).length;
        document.getElementById("app").style.width=((MOCK_DATA.filter(function (el) {
            return el.active == false}).length/MOCK_DATA.length)*100) +"%"
    }
    else{
        const peri=MOCK_DATA.filter(function (el) {
            return el.period == value})
    return (document.getElementById("len").innerHTML=peri.length,
    document.getElementById("app").style.width=((peri.length/MOCK_DATA.length)*100) +"%");
    }
}
export const colorDatalen=(value,active)=>{
    if(value=="allProjects" && active ){
        document.getElementById("len").innerHTML=MOCK_DATA.filter(function (el) {
            return el.active == true}).length;
        document.getElementById("app").style.width=((MOCK_DATA.filter(function (el) {
            return el.active == true}).length/MOCK_DATA.length)*100) +"%"
    }
    else if(value=="allProjects"&& !active){
        document.getElementById("len").innerHTML=MOCK_DATA.filter(function (el) {
            return el.active == false}).length;
        document.getElementById("app").style.width=((MOCK_DATA.filter(function (el) {
            return el.active == false}).length/MOCK_DATA.length)*100) +"%"
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
    const progressClass=classNames('hover:bg-[rgba(211,184,255,.5)] py-2 rounded-3  cursor-pointer w-full',{['text-center']:!toggleCollapse,[' text-center']:toggleCollapse})
    const barClass=classNames("h-2 bg-[#edf2f7] rounded-4 hover:bg-white",{['w-19']:!toggleCollapse,['w-55 m-5']:toggleCollapse})
    const collapseIconClasses=classNames("rounded justify-between bg-light-lighter items-center") 
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
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
        return classNames({["filter invert "]: activeMenu.id === menu.id,})
    }
    const onMouseOver=()=>{
        setIsCollapsible(!isCollapsible)
    }
    const touch=()=>{
        document.getElementById("touch").style.display="block"
        document.getElementById("antitouch").style.display="none"
    }
    return (
    <div className={`${wrapperClasses} sideBar`} style={{transition:"width 300ms cubic-bezier(0.2,0,0,1)0s",top:"0",left:"0",}} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver}>
      <div className='flex flex-col'>
        <div className={logoClasses }>
            
                <Link href="/" className='flex items-center pl-0 pt-2'>
                
                <Image src="/logo1.svg" width={45} height={45} /> 
                {toggleCollapse && (
                                    <span style={{width:'1rem',fontSize:"22px",fontWeight:"bold",color:"rgb(0,0,0)"}} > Subly</span>
                                )}         
            </Link>
               
        <div className='items-center  mt-2 p-3 rounded-md cursor-pointer hover:bg-hoverCol' onClick={handleSidebarToggle}>
            <Image src="/navigation.png" width={23} height={20}/>
        </div>
        </div>
        <div className='flex flex-col items-start mt-5'>
            {menuItems.map(({icon:Icon, ...menu},index)=>{
                const classes = getNavItemClasses(menu);
                const hoverClass= getNavItemHoverClasses(menu);
                const iconActive=getNavIconHoverClasses(menu);
            
                return(
                    <div className={classes}>
                        <Link href={menu.link} className='flex py-4 px-2 items-center w-full h-full' data-placement="right" id={"index"+index}>
                        
                                <div style={{width:'2rem'}}>
                                    <Image src={Icon} width={25} height={25} className={iconActive}  />
                                </div>
                                {toggleCollapse && (
                                    <span style={{width:'11.5rem',paddingLeft:"3px"}} className={hoverClass}> {menu.label}</span>
                                )}
                                               </Link>
                                               {!toggleCollapse && <UncontrolledTooltip 
        placement="right"
        target={"index"+index}
      >{menu.label}</UncontrolledTooltip>}
                    </div>
                )
            })}
        </div>
        
      </div>
      <div className='flex flex-col items-start'>
        <div className={progressClass}>
        <p style={{fontWeight:"bold"}}><span id="len">{tbodyCount.length}</span>/{MOCK_DATA.length}{toggleCollapse && (
                                    <span style={{width:'1rem',color:"rgb(0,0,0)"}} > Subscription</span>
                                )}    </p>
        <div className={barClass} >
      <div id="app" style={{height: '100%',
        width: `${(tbodyCount.length/MOCK_DATA.length)*100}%`,
        backgroundColor: "#8a56df",
       borderRadius:"40px",
        textAlign: 'right'}}>
      </div>
   </div>
   {toggleCollapse && (
                                    <p style={{width:'15rem',color:"#6530b2"}} ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-13otjrl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.219 3.375 8 7.399 4.781 3.375A1.002 1.002 0 0 0 3 4v15c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4a1.002 1.002 0 0 0-1.781-.625L16 7.399l-3.219-4.024c-.381-.474-1.181-.474-1.562 0zM5 19v-2h14.001v2H5zm10.219-9.375c.381.475 1.182.475 1.563 0L19 6.851 19.001 15H5V6.851l2.219 2.774c.381.475 1.182.475 1.563 0L12 5.601l3.219 4.024z"></path></svg> Upgrade your plan</p>
                                )}
   </div>
        <Link onClick={toggle} href="/" id="help" data-placement="right" className='flex items-center w-full h-full hover:bg-hoverCol mt-4'><div><img src="/question.svg"  className='p-3 ' /></div>{toggleCollapse && (
                                    <span style={{width:'11.5rem',paddingLeft:"3px",color:"rgba(0,0,0,0.64)"}} >Help</span>
                                )}</Link>{!toggleCollapse && <UncontrolledTooltip 
                                    placement="right"
                                    target={"help"}
                                  >Help</UncontrolledTooltip>}
            <Modal isOpen={modal} toggle={toggle} centered>
                <ModalHeader style={{backgroundColor:"#f7fafc"}} toggle={toggle}><h3>Help</h3></ModalHeader>
                <ModalBody style={{backgroundColor:"#f7fafc"}}>
                    <a id="antitouch" href="https://help.subly.app/" target="_blank" className='p-5 mt-3 w-5/6 mx-auto rounded-lg cursor-pointer' style={{display:"flex", boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06"}}>
                    <div style={{height:"45px",marginTop:"10px",backgroundColor:"#add8fc",padding:"8px",borderRadius:"6px"}}><svg stroke="currentColor" fill="#0d4a7d" stroke-width="0" viewBox="0 0 24 24" focusable="false"  height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z"></path><path d="M8 6h9v2H8z"></path></svg></div>
                    <div className='ml-4'><h4 style={{color:"black"}}>Knowledge based</h4>
                    <p style={{marginTop:"-10px",fontSize:"15px",color:"rgba(0,0,0,0.64)"}}>Find answers to your questions in our help center</p></div>
                    </a>
                    <a id="antitouch" href="https://roadmap.subly.app" target="_blank" className='p-5 mt-3 w-5/6 mx-auto rounded-lg cursor-pointer' style={{display:"flex", boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06"}}>
                    <div style={{height:"45px",marginTop:"10px",backgroundColor:"#fefcbf",padding:"8px",borderRadius:"6px"}}><svg stroke="currentColor" fill="#744210" stroke-width="0" viewBox="0 0 24 24" focusable="false"  height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M9 20h6v2H9zm7.906-6.288C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7S5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73.358.418.729.851 1.084 1.349.144.206.38.996.591 1.921H8v2h8v-2h-.774c.213-.927.45-1.719.593-1.925.352-.503.726-.94 1.087-1.363zm-2.724.213c-.434.617-.796 2.075-1.006 3.075h-2.351c-.209-1.002-.572-2.463-1.011-3.08a20.502 20.502 0 0 0-1.196-1.492C7.644 11.294 7 10.544 7 9c0-2.757 2.243-5 5-5s5 2.243 5 5c0 1.521-.643 2.274-1.615 3.413-.373.438-.796.933-1.203 1.512z"></path></svg></div>
                    <div className='ml-4'><h4 style={{color:"black"}}>Knowledge based</h4>
                    <p style={{marginTop:"-10px",fontSize:"15px",color:"rgba(0,0,0,0.64)"}}>Find answers to your questions in our help center</p></div>
                    </a>
                    <div onClick={touch} id="antitouch" className='p-5 mt-3 w-5/6 mx-auto mb-5 rounded-lg cursor-pointer' style={{display:"flex", boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06"}}>
                    <div style={{height:"45px",marginTop:"10px",backgroundColor:"#e7dbfd",padding:"8px",borderRadius:"6px"}}><svg stroke="currentColor" fill="#532394" stroke-width="0" viewBox="0 0 24 24" focusable="false"  height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg></div>
                    <div className='ml-4'><h4 style={{color:"black"}}>Knowledge based</h4>
                    <p style={{marginTop:"-10px",fontSize:"15px",color:"rgba(0,0,0,0.64)"}}>Find answers to your questions in our help center</p></div>
                    </div>
                    <div id='touch' style={{display:"none", paddingLeft:"25px"}}>
                        <h4>Get in touch</h4>
                        <p>Message<span style={{color:"red"}}> *</span></p>
                        <form action="">
                            <textarea name="" id="" cols="45" rows="5" placeholder='Your feedback' style={{padding:"15px"}}></textarea>
                            <br/>
                            <br/>

                            <input type="radio" id="html" name="fav_language" value="HTML" ></input>
                            <label for="html">HTML</label>
                            <input type="radio" id="css" name="fav_language" value="CSS" ></input>
                            <label for="css">CSS</label>
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" ></input>
                            <label for="javascript">JavaScript</label>
                                    <button type='submit' className='btn btn-primary' style={{float:"right",marginRight:"30px",color:"white"}}>Send</button>
                        </form>
                    </div>
                </ModalBody>
            </Modal>
        <Link  href="/" id="what" data-placement="right" className='flex items-center w-full h-full hover:bg-hoverCol mb-8 mt-2'><div><img src="/exclamation.svg"  className=' p-3' /></div>{toggleCollapse && (
                                    <span style={{width:'11.5rem',paddingLeft:"3px",color:"rgba(0,0,0,0.64)"}} >What's New</span>
                                )}</Link>{!toggleCollapse && <UncontrolledTooltip 
                                    placement="right"
                                    target={"what"}
                                  >What's New</UncontrolledTooltip>}
        </div>
    </div>
  )
}

export default Sidebar
