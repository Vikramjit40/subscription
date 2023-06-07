import React, { useMemo, useState,useEffect } from 'react';
import Sidebar from './Sidebar'
import Bottombar from './Bottombar'
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import{Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap';
import Image from 'next/image';
const menuItem=[
  {id:1,label:"Subscriptions",icon:"/home.svg",link:"/"},
  {id:2,label:"Reports",icon:"/clock.svg",link:"/duration"},
  {id:3,label:"Settings",icon:"/setting.svg",link:"/setting"},
  {id:4,label:"Team",icon:"/user.svg",link:"/people"},
    {id:5,label:"Linked Accounts(Soon)",icon:"/bank.svg",link:"/bank"},
];
const Layout = ({children}) => {
  const [modal1,setModal1]=useState(false);
  const [modal2,setModal2]=useState(false);
  const [modal3,setModal3]=useState(false);
  const rightNavToggling=()=>setModal3(!modal3);
  const toggle1=()=>setModal1(!modal1);
  const toggle2=()=>setModal2(!modal2);
  const [media,setMedia]=useState(false);
  const router = useRouter()
  const activeMenus=useMemo(()=> menuItem.find(menu=>menu.link===router.pathname ),[router.pathname] )
  
  useEffect(() => {
    document.addEventListener("keydown",(e) => {
      
    if (e.key.toLowerCase()==="k" && e.ctrlKey	) {
      e.preventDefault();
      setModal1(!modal1)}})
var body = document.getElementsByTagName("BODY")[0];
  body.addEventListener("click", function () {
    setIsUserOpen(false);
    document.getElementById("user").style.display="none"
  }, false);
  body.addEventListener("click", function () {
    setIsProjectOpen(false);
    document.getElementById("projct").style.display="none"
  }, false);
  
  let myMediaQuery = window.matchMedia('(min-width:50px) and (max-width: 890px)');
  function widthChangeCallback(myMediaQuery) {
    if(myMediaQuery.matches) {
      setMedia(true);  
     
     } else {
      setMedia(false);  

     }
  }
  myMediaQuery.addEventListener('change', widthChangeCallback);

});
const [isProjectOpen,setIsProjectOpen]=useState(false)
  function projecttoggling(ev){
    setIsProjectOpen(!isProjectOpen);
    setIsUserOpen(false);
    document.getElementById("user").style.display="none"
    ev.stopPropagation();

    if(isProjectOpen===false){document.getElementById("projct").style.display="block"} 
    else{document.getElementById("projct").style.display="none"} 
  }
  function showSVG(){
    document.getElementById("svgTick").style.display="initial"
    document.getElementById("probut").innerHTML="Personal"
    document.getElementById("personal").style.paddingLeft = "0px"
  }
  function hideSVG(){
    document.getElementById("svgTick").style.display="none"
    document.getElementById("probut").innerHTML="All Projects"
    document.getElementById("personal").style.paddingLeft = "19px"
  }
  const [isUserOpen,setIsUserOpen]=useState(false)
  function usertoggling(ev){
    setIsUserOpen(!isUserOpen);
    setIsProjectOpen(false);
    document.getElementById("projct").style.display="none"
    ev.stopPropagation();
    if(isUserOpen===false){document.getElementById("user").style.display="block"} 
    else{document.getElementById("user").style.display="none"} 
  }
  const getNavItemClasses=(menu)=>{
    return classNames("flex items-center mt-1 mb-3 cursor-pointer  rounded overflow-hidden whitespace-nowrap",{
        ["bg-[rgba(0,0,0,0.80)]"]: activeMenus.id === menu.id,
        ["hover:bg-hoverCol"]:activeMenus.id != menu.id,
    })
  }
  const getNavItemHoverClasses=(menu)=>{
    return classNames("text-lg text-textColor marker:font-medium ",{
        ["text-white"]: activeMenus.id === menu.id,
    })
  }
  const getNavIconHoverClasses=(menu)=>{
    return classNames({["filter invert "]: activeMenus.id === menu.id,})
  }
  return (
    <div className='h-screen flex flex-row justify-start '> 
      <Sidebar />
      <div className=' bg-backcolor flex-1 pt-4 'id="body">
      <div className='row '>
    <div className='col-xl-7 col-lg-3 col-sm-2 '>
     <h1 style={{fontWeight:"bold",fontSize:"25px",marginBottom:"28px"}}>Subscriptions</h1>
      </div>
      <div className='col-xl-5 col-lg-9 col-sm-10 pt-1 ' >
        <div className=' flex gap-x-3 ml-12 newSub'>
            <div className='fontsi' style={{textAlign:"left"}}>
            <button id="fillters" onClick={toggle1} className='focus' style={{borderRadius:"5px",fontSize:"15px",padding:"4px 10px",display:"flex",backgroundColor:"#edf2f7"}}><div style={{display:"flex"}}><svg  stroke="currentColor" fill="#718096" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-lgbjuw" height="2em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg><p className='ml-1 mt-1 ' style={{color:"rgba(0,0,0,0.64)",fontWeight:"bold"}}>Search</p></div><div className='ml-3'style={{fontSize:"13px",marginTop:"8px"}}><kbd style={{color:"black",backgroundColor:"white",fontWeight:"bold"}}>Ctrl</kbd><kbd className=" ml-1 "style={{color:"black",backgroundColor:"white",fontWeight:"bold"}}>K</kbd></div></button>
            </div>
            <Modal style={{overflow:"hidden",borderRadius:"10px",zIndex:"1",borderColor: "rgb(19,128,228)",boxShadow: "rgb(19,128,228) 0px 0px 0px 1px",outline: "0"}} isOpen={modal1} fade={true} toggle={toggle1} className='mod ' >
              <ModalBody ><div style={{display:"flex"}}><div className='mt-2'><svg  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-lgbjuw" height="2em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg></div><input className='focus' style={{width:"100%",padding:"8px 10px",fontSize:"20px"}} type='text' placeholder='Search by name, category or tags'></input></div></ModalBody>
            </Modal>
            
            



            <div className='fontsi' style={{textAlign:"left"}}>
                <button onClick={toggle2} className=" hover:bg-[black] focus" style={{fontSize:"15px",color:"white",backgroundColor:"rgba(0,0,0,0.8)",borderRadius:"5px",padding:"10px 12px",width:"12rem",fontWeight:"bold"}}>+ New Subscription</button>
            </div>
            <Modal style={{overflow:"hidden",borderRadius:"12px",border:"none",zIndex:"1"}} isOpen={modal2} fade={false} toggle={toggle2}  >
            <ModalHeader style={{backgroundColor:"#f7fafc"}} toggle={toggle2}><h3 style={{marginLeft:"165px",padding:"10px 0px"}}>Add Subscriptions</h3></ModalHeader>
                <ModalBody style={{backgroundColor:"#f7fafc"}}>
                    <input id="servicesearch" style={{fontSize:"18px",padding:"10px 5px",width:"100%",color:"black"}} type="text" placeholder='Search for a service'></input>
                    <div id="searchforservice" className='text-center mt-2 p-12 '>
                      <svg className='mb-5 mt-11' stroke="currentColor" fill="#718096" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-ag9myg" height="3.5em" width="3.5em" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path><path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"></path></svg>
                      <p style={{color:"rgba(0,0,0,0.64)",fontSize:"16px"}}>Search for a service or add one from scratch</p>
                    <p style={{fontSize:"16px"}}>Have a CSV file <a id="upload" href="/">Upload it here</a></p>
                    </div>
                    <button style={{backgroundColor:"rgba(0,0,0,0.80)",borderRadius:"8px",border:"none", color:"white", width:"100%",padding:"12px 0px",fontSize:"18px"}}>Add from scratch</button>
                </ModalBody>
            </Modal>
            <div style={{textAlign:"left"}}>     
                <button onClick={projecttoggling} className='focus:outline-none px-3' id="fillters" style={{border:"1px solid rgba(0,0,0,0.16)",cursor:"pointer", backgroundColor:"#ffffff",borderRadius:"5px",padding:"10px 0px",borderRadius:"5px",fontSize:"15px",color:"#1a202c" }}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 5h-8.586L9.707 3.293A.997.997 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"></path></svg> <span id="probut">All Projects</span> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg></button>
                <div id="projct" style={{border:"1px solid #e2e8f0",borderRadius:"8px",fontSize:"17px",zIndex:"9999",boxShadow:"0 1px 2px 0 rgba(0,0,0,0.05)" ,position:"absolute",right:"1%",top:"9%",width:"15rem",display:"none",backgroundColor:"white",padding:"10px 0px"}}>
                <button onClick={hideSVG} className='hover:bg-[#e2e8f0] focus:outline-none pl-3' style={{color: "inherit",width:"100%",border:"none",backgroundColor:"white",textAlign:"left",padding:"5px"}} value="allProjects"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" font-size="1.2rem" focusable="false" aria-hidden="true" class="chakra-menu__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 7.999a1 1 0 0 0-.516-.874l-9.022-5a1.003 1.003 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a.995.995 0 0 0 .973.001l8.978-5A1 1 0 0 0 22 7.999zm-9.977 3.855L5.06 7.965l6.917-3.822 6.964 3.859-6.918 3.852z"></path><path d="M20.515 11.126 12 15.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z"></path><path d="M20.515 15.126 12 19.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z"></path></svg> All Projects</button>
                    <button onClick={showSVG} className='hover:bg-[#e2e8f0] focus:outline-none pl-3' style={{color: "inherit",width:"100%",border:"none",backgroundColor:"white",textAlign:"left",padding:"5px"}} value="openProjects"><svg id="svgTick" style={{display:"none"}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" font-size="1.2rem" focusable="false" aria-hidden="true" class="chakra-menu__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg><span id='personal' style={{paddingLeft:"19px"}}> Personal</span></button>
                    <hr></hr>
                    <button className='hover:bg-[#e2e8f0] focus:outline-none pl-3' style={{color: "inherit",width:"100%",border:"none",backgroundColor:"white",textAlign:"left",padding:"5px"}} value="closedProjects"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" font-size="1.2rem" focusable="false" aria-hidden="true" class="chakra-menu__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13 9h-2v3H8v2h3v3h2v-3h3v-2h-3z"></path><path d="M20 5h-8.586L9.707 3.293A.996.996 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"></path></svg> Create Project <span style={{fontSize:"12px",fontWeight:"bold",padding:"3px 3px",color:"#7b341e",backgroundColor:"#feebc8"}}>PRO</span></button>
                </div>
            </div>
            
            <div className=' mt-1 'style={{textAlign:"left"}}>
                <Image src={"/avatar.webp"} height={35} width={40} style={{borderRadius:"20px",marginLeft:"15px",cursor:"pointer"}} onClick={media ? rightNavToggling : usertoggling}  />
                <div id="user" style={{border:"1px solid #e2e8f0",borderRadius:"8px",fontSize:"17px",zIndex:"9999",boxShadow:"0 1px 2px 0 rgba(0,0,0,0.05)" ,position:"absolute",right:"1%",top:"9%",width:"19rem",display:"none",backgroundColor:"white",padding:"10px 0px"}} >
              <p style={{textAlign:"center",color:"rgba(0,0,0,0.64)"}}>vikramjit@sookshum-labs.com</p>
              <hr style={{color:"rgba(0,0,0,0.64)"}}></hr>
              <button className='hover:bg-[#e2e8f0] focus:outline-none pl-3' style={{color: "inherit",width:"100%",border:"none",backgroundColor:"white",textAlign:"left",padding:"5px"}}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" font-size="1.2rem" focusable="false" aria-hidden="true" class="chakra-menu__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 7h-1.209A4.92 4.92 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 3.085C11.407 3.57 10.269 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-4.5-3c.827 0 1.5.673 1.5 1.5C17 7 16.374 7 16 7h-2.478c.511-1.576 1.253-3 1.978-3zM7 5.5C7 4.673 7.673 4 8.5 4c.888 0 1.714 1.525 2.198 3H8c-.374 0-1 0-1-1.5zM4 9h7v2H4V9zm2 11v-7h5v7H6zm12 0h-5v-7h5v7zm-5-9V9.085L13.017 9H20l.001 2H13z"></path></svg> Become our affiliate <span style={{backgroundColor:"#c8e6c9",color:"#2e7d32"}}>New</span></button>
              <hr style={{color:"rgba(0,0,0,0.64)"}}></hr>
              <button className='hover:bg-[#e2e8f0] focus:outline-none pl-3' style={{color: "inherit", width:"100%",border:"none",backgroundColor:"white",textAlign:"left",padding:"5px"}}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" font-size="1.2rem" focusable="false" aria-hidden="true" class="chakra-menu__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg> Account</button>
              <button className='hover:bg-[#e2e8f0] focus:outline-none pl-3' style={{color: "inherit", width:"100%",border:"none",backgroundColor:"white",textAlign:"left",padding:"5px"}}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" font-size="1.2rem" focusable="false" aria-hidden="true" class="chakra-menu__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 11h-3V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-6a1 1 0 0 0-1-1zM5 19a1 1 0 0 1-1-1V5h12v13c0 .351.061.688.171 1H5zm15-1a1 1 0 0 1-2 0v-5h2v5z"></path><path d="M6 7h8v2H6zm0 4h8v2H6zm5 4h3v2h-3z"></path></svg> Billing</button>
              <button className='hover:bg-[#e2e8f0] focus:outline-none pl-3' style={{color: "inherit", width:"100%",border:"none",backgroundColor:"white",textAlign:"left",padding:"5px"}}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" font-size="1.2rem" focusable="false" aria-hidden="true" class="chakra-menu__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m21.555 8.168-9-6a1 1 0 0 0-1.109 0l-9 6A1 1 0 0 0 2 9v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-.334-.167-.646-.445-.832zM12 4.202 19.197 9 12 13.798 4.803 9 12 4.202zM4 20v-9.131l7.445 4.963a1 1 0 0 0 1.11 0L20 10.869 19.997 20H4z"></path></svg> Invitaions</button>
              <hr style={{color:"rgba(0,0,0,0.64)"}}></hr>
              <button className='hover:bg-[#e2e8f0] focus:outline-none pl-3' style={{color:"#d44d56", width:"100%",border:"none",backgroundColor:"white",textAlign:"left",padding:"5px"}}><svg stroke="currentColor" fill="#d44d56" stroke-width="0" viewBox="0 0 24 24" font-size="1.2rem" focusable="false" aria-hidden="true" class="chakra-menu__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 21c4.411 0 8-3.589 8-8 0-3.35-2.072-6.221-5-7.411v2.223A6 6 0 0 1 18 13c0 3.309-2.691 6-6 6s-6-2.691-6-6a5.999 5.999 0 0 1 3-5.188V5.589C6.072 6.779 4 9.65 4 13c0 4.411 3.589 8 8 8z"></path><path d="M11 2h2v10h-2z"></path></svg> Sign out</button>
              </div>
              <Modal isOpen={modal3} toggle={rightNavToggling} fade={true} style={{padding:"0px 4px",width:"300px",height:"100%", top: "-3%", left: "51%", transform: "translateY(-3%)", transform: "translatex(-51%)"}}>
                <ModalHeader style={{backgroundColor:"#f7fafc"}} toggle={rightNavToggling}>
                <Link href="/" className='flex items-center pl-0 pt-2'><Image src="/logo1.svg" width={45} height={45} /><span style={{width:'1rem',fontSize:"22px",fontWeight:"bold",color:"rgb(0,0,0)"}} > Subly</span></Link>
                </ModalHeader>
                <ModalBody style={{backgroundColor:"#f7fafc"}}>
                    <div>
                    <div className='rnav flex flex-col items-start mt-5'>
            {menuItem.map(({icon:Icon, ...menu},index)=>{
                const classes = getNavItemClasses(menu);
                const hoverClass= getNavItemHoverClasses(menu);
                const iconActive=getNavIconHoverClasses(menu);
                return(
                    <div className={classes}>
                        <Link href={menu.link} className='flex py-4 px-2 items-center w-full h-full' data-placement="right" id={"index"+index}>
                                <div style={{width:'2rem'}}>
                                    <Image src={Icon} width={25} height={25} className={iconActive}  />
                                </div>
                                    <span style={{width:'16rem',paddingLeft:"3px"}} className={hoverClass}> {menu.label}</span>
                                               </Link>
                    </div>
                )
            })}
            <Link href="/" className='flex items-center w-full h-full hover:bg-hoverCol mt-2 mb-3'><div><img src="/exclamation.svg"  className=' pl-3 py-4' /></div>
                                    <span style={{width:'11.5rem',paddingLeft:"3px",color:"rgba(0,0,0,0.64)",fonSize: "1.125rem"}} >What's New</span>
                                </Link>
            <Link href="/" className='flex items-center w-full h-full hover:bg-hoverCol mt-2 mb-12 py-4'><div><svg className='ml-3 ' stroke="currentColor" fill="rgba(0,0,0,0.64)" stroke-width="0" viewBox="0 0 24 24" font-size="22" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 2c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5zm14 14h-4.414L12 18.586 9.414 16H5V4h14v12z"></path><path d="M7 7h10v2H7zm0 4h7v2H7z"></path></svg></div>
                                    <span style={{width:'11.5rem',paddingLeft:"3px",color:"rgba(0,0,0,0.64)",fonSize: "1.125rem"}} >Send Feedback</span>
            </Link>
           
        </div>
                    </div>
                </ModalBody>
                <ModalFooter className='mt-3'>
                  <div style={{display:"flex",marginTop:"20px"}}>
                <Image src={"/avatar.webp"} height={35} width={40} style={{borderRadius:"20px",cursor:"pointer",marginLeft:"-10px"}}   />
                <h4 style={{color:"#4a5568",marginTop:"6px"}}>vikramjit@sookshum-labs.com</h4>
                </div>
                <div style={{width:"100%",paddingBottom:"20px"}}>
                <button style={{fontSize:"18px",width:"100%",textAlign:"left",color:"rgba(0,0,0,0.64)",border:"none",backgroundColor:"white",marginTop:"28px"}}><svg className='ml-5' stroke="currentColor" fill="rgba(0,0,0,0.64)" stroke-width="0" viewBox="0 0 24 24" font-size="22" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg> Logout</button>
                </div>
                </ModalFooter>
            </Modal>
            </div>
        </div>
        </div>
        </div>
        {children}
        <Bottombar />
      </div>

    </div>
   
  )
}

export default Layout
