import React, { useMemo, useState,useEffect } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useRouter } from 'next/router';
import classNames from 'classnames'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useTable, useSortBy,useGlobalFilter, useFilters } from 'react-table';
import {COLUMNS} from './columns' ;
import MOCK_DATA from '../public/MOCK_DATA.json';
import { activeDatalen,catDatalen,payDatalen,periodDatalen,colorDatalen } from './Sidebar';
import Image from 'next/image';
import Right from './Right';
import{Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap';
import { Card, Grid} from "semantic-ui-react";
import { UncontrolledTooltip } from 'reactstrap';
import { format } from 'date-fns';
import Link from 'next/link';

moment.locale("en");
  const localizer= momentLocalizer(moment)
  
  const menuItems=[
    {id:1,label:"Subscriptions",icon:"/home.svg",link:"/"},
    {id:2,label:"Reports",icon:"/clock.svg",link:"/duration"},
    {id:3,label:"Settings",icon:"/setting.svg",link:"/setting"},
];
const SortingTable = props => {
  const [mockData,setMockData]=useState(MOCK_DATA.filter(function (el) {
    return el.active == true 
  }))
  const columns = useMemo(() => COLUMNS, []);
  const data = mockData;
  const [active,setActive]=useState(true);
  const [eventsData, setEventsData] = useState(MOCK_DATA);
  const [modal1,setModal1]=useState(false);
  const [modal2,setModal2]=useState(false);
  const [modal3,setModal3]=useState(false);
  const [isOpen,setIsOpen]=useState(false);
  const toggle1=()=>setModal1(!modal1);
  const toggle2=()=>setModal2(!modal2);
  const [media,setMedia]=useState(false);
  const router = useRouter()
  const activeMenu=useMemo(()=> menuItems.find(menu=>menu.link===router.pathname ),[router.pathname] )
  

  useEffect(() => {
    document.onkeyup = function(e) {
    if (e.ctrlKey && e.which == 66) {
      setModal1(!modal1)}
};
var body = document.getElementsByTagName("BODY")[0];
  body.addEventListener("click", function () {
    setIsUserOpen(false);
    document.getElementById("user").style.display="none"
  }, false);
  body.addEventListener("click", function () {
    setIsProjectOpen(false);
    document.getElementById("projct").style.display="none"
  }, false);
  
  let myMediaQuery = window.matchMedia('(max-width: 890px)');
  function widthChangeCallback(myMediaQuery) {
    if(myMediaQuery.matches) {
      setMedia(true);  
      // document.querySelector("p").textContent = "I am wider than 599px now.";
     } else {
      setMedia(false);  
      //  document.querySelector("p").textContent = "I am narrower than 599px now.";
     }
  }
  myMediaQuery.addEventListener('change', widthChangeCallback);
});

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   prepareRow,
  //   state: { globalFilter },
  //   setGlobalFilter
  // } = useTable(
  //   {
  //     columns,
  //     data,
  //     disableSortRemove: true
  //   },
  //   useFilters,
  //   useGlobalFilter,
  //   useSortBy
  // );
  function toggling(index){
    setIsOpen(!isOpen);
    if(isOpen===false){document.getElementById(index).style.display="block"} 
    else{document.getElementById(index).style.display="none"} 
  }
  function activeUser(){
    setActive(current => !current)
    if(active==true){
    setMockData(MOCK_DATA.filter(function (el) {
      return el.active == false 
    }))
    setTimeout(() => {activeDatalen(active)}, 100)
  }
    else{
      setMockData(MOCK_DATA.filter(function(el)
      {return el.active==true}))
      setTimeout(() => {activeDatalen(active)}, 100)
    };
  }
  function category(event){
    const value=event.target.value;
    if(value=="allProjects"  && active==true){
    setMockData(MOCK_DATA.filter(function(el){return (el.active==true)}))
    setTimeout(() => {catDatalen(value,active)}, 100)
  }
  else if(value=="allProjects"  && active==false){
    setMockData(MOCK_DATA.filter(function(el){return (el.active==false)}))
    setTimeout(() => {catDatalen(value,active)}, 100)
  }
    else{
    setMockData(MOCK_DATA.filter(function(el){
      return el.category==value
    }))
    setTimeout(() => {catDatalen(value,active)}, 100)
    }
  }
  function payment(event){
    const value=event.target.value;
    if(value=="allProjects"&& active==true){
    setMockData(MOCK_DATA.filter(function(el){return (el.active==true)}))
    setTimeout(() => {payDatalen(value,active)}, 100)
  }
  else if(value=="allProjects" && active==false){
    setMockData(MOCK_DATA.filter(function(el){return (el.active==false)}))
    setTimeout(() => {payDatalen(value,active)}, 100)
  }
    else{
    setMockData(MOCK_DATA.filter(function(el){
      return el.payment_method==value
    }))
    setTimeout(() => {payDatalen(value,active)}, 100)
    }
  }
  function period(event){
    const value=event.target.value;
    if(value=="allProjects"&& active==true){
    setMockData(MOCK_DATA.filter(function(el){return (el.active==true)}))
    setTimeout(() => {periodDatalen(value,active)}, 100)
  }
  else if(value=="allProjects"&& active==false){
    setMockData(MOCK_DATA.filter(function(el){return (el.active==false)}))
    setTimeout(() => {periodDatalen(value,active)}, 100)
  }
    else{
    setMockData(MOCK_DATA.filter(function(el){
      return el.period==value
    }))
    setTimeout(() => {periodDatalen(value,active)}, 100)
    }
  }
  function colorChange(event){
    const value=event.target.value;
    if(value=="allProjects" && active==true){
    setMockData(MOCK_DATA.filter(function(el){return (el.active==true)}))
    setTimeout(() => {colorDatalen(value,active)}, 100)
  }
  else if(value=="allProjects" && active==false){
    setMockData(MOCK_DATA.filter(function(el){return (el.active==false)}))
    setTimeout(() => {colorDatalen(value,active)}, 100)
  }
    else{
    setMockData(MOCK_DATA.filter(function(el){
      return el.color==value
    }))
    setTimeout(() => {colorDatalen(value,active)}, 100)
    }
  }
  var activeStyle = {
    "background-color":"#cbd5e0"
};
var inactiveStyle = {
  "background-color":" #edf2f7"
};
function blockView(){
  document.getElementById("listv").style.display="none"
  document.getElementById("blockv").style.display="block"
  document.getElementById("calenderView").style.display="none"
}
function listView(){
  document.getElementById("blockv").style.display="none"
  document.getElementById("listv").style.display="block"
  document.getElementById("calenderView").style.display="none"
}
function calanderView(){
  document.getElementById("calenderView").style.display="block"
  document.getElementById("blockv").style.display="none"
  document.getElementById("listv").style.display="none"
  }
  function block(){
    blockView();
    Object.assign(document.getElementById("calan").style, inactiveStyle);
    Object.assign(document.getElementById("lis").style, inactiveStyle);
    Object.assign(document.getElementById("bloc").style, activeStyle);
  }
  function list(){
    listView();
    Object.assign(document.getElementById("calan").style, inactiveStyle);
    Object.assign(document.getElementById("lis").style, activeStyle);
    Object.assign(document.getElementById("bloc").style, inactiveStyle);
  }
  function calander(){
    calanderView();
    Object.assign(document.getElementById("lis").style, inactiveStyle);
    Object.assign(document.getElementById("bloc").style, inactiveStyle);
    Object.assign(document.getElementById("calan").style, activeStyle);
  }
  
  function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc"; 
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir == "asc" && n!=0 && n!=2 && n!=5) {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc" && n!=0 && n!=2 && n!=5) {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
        else if (dir == "asc" && n==0) {
  
          if (x.innerHTML.split(">")[1].toLowerCase() > y.innerHTML.split(">")[1].toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc" && n==0) {
          if (x.innerHTML.split(">")[1].toLowerCase() < y.innerHTML.split(">")[1].toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
        else if (dir == "asc" && n==2) {
          if ((x.innerHTML - y.innerHTML)>0) {
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc" && n==2) {
          if ((x.innerHTML - y.innerHTML)<0) {
            shouldSwitch = true;
            break;
          }
        }
        else if (dir == "asc" && n==5) {
        
          if ((new Date(x.innerHTML.split("<")[0]) -new Date(y.innerHTML.split("<")[0]))>0) {
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc" && n==5) {
          if ((new Date(x.innerHTML.split("<")[0]) - new Date(y.innerHTML.split("<")[0]))<0) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
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
 const rightNavToggling=()=>setModal3(!modal3);
 const getNavItemClasses=(menu)=>{
  return classNames("flex items-center mt-1 mb-3 cursor-pointer  rounded overflow-hidden whitespace-nowrap",{
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
  return (
    <>
    <div className='row mt-2'>
    <div className='col-xl-7 col-lg-3 col-sm-2 '>
     <h1 style={{fontWeight:"bold",fontSize:"25px",marginBottom:"28px"}}>Subscriptions</h1>
      </div>
      <div className='col-xl-5 col-lg-9 col-sm-10 pt-1 ' >
        <div className=' flex gap-x-3 ml-12 newSub'>
            <div className='fontsi' style={{textAlign:"left"}}>
            <button id="fillters" onClick={toggle1} className='focus' style={{borderRadius:"5px",fontSize:"15px",padding:"4px 10px",display:"flex",backgroundColor:"#edf2f7"}}><div style={{display:"flex"}}><svg  stroke="currentColor" fill="#718096" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-lgbjuw" height="2em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg><p className='ml-1 mt-1 ' style={{color:"rgba(0,0,0,0.64)",fontWeight:"bold"}}>Search</p></div><div className='ml-3'style={{fontSize:"13px",marginTop:"8px"}}><kbd style={{color:"black",backgroundColor:"white",fontWeight:"bold"}}>Ctrl</kbd><kbd className=" ml-1 "style={{color:"black",backgroundColor:"white",fontWeight:"bold"}}>b</kbd></div></button>
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
                <div id="projct" style={{border:"1px solid #e2e8f0",borderRadius:"8px",fontSize:"17px",zIndex:"9999",boxShadow:"0 1px 2px 0 rgba(0,0,0,0.05)" ,position:"absolute",right:"2%",top:"9%",width:"15rem",display:"none",backgroundColor:"white",padding:"10px 0px"}}>
                <button onClick={hideSVG} className='hover:bg-[#e2e8f0] focus:outline-none pl-3' style={{color: "inherit",width:"100%",border:"none",backgroundColor:"white",textAlign:"left",padding:"5px"}} value="allProjects"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" font-size="1.2rem" focusable="false" aria-hidden="true" class="chakra-menu__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 7.999a1 1 0 0 0-.516-.874l-9.022-5a1.003 1.003 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a.995.995 0 0 0 .973.001l8.978-5A1 1 0 0 0 22 7.999zm-9.977 3.855L5.06 7.965l6.917-3.822 6.964 3.859-6.918 3.852z"></path><path d="M20.515 11.126 12 15.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z"></path><path d="M20.515 15.126 12 19.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z"></path></svg> All Projects</button>
                    <button onClick={showSVG} className='hover:bg-[#e2e8f0] focus:outline-none pl-3' style={{color: "inherit",width:"100%",border:"none",backgroundColor:"white",textAlign:"left",padding:"5px"}} value="openProjects"><svg id="svgTick" style={{display:"none"}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" font-size="1.2rem" focusable="false" aria-hidden="true" class="chakra-menu__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg><span id='personal' style={{paddingLeft:"19px"}}> Personal</span></button>
                    <hr></hr>
                    <button className='hover:bg-[#e2e8f0] focus:outline-none pl-3' style={{color: "inherit",width:"100%",border:"none",backgroundColor:"white",textAlign:"left",padding:"5px"}} value="closedProjects"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" font-size="1.2rem" focusable="false" aria-hidden="true" class="chakra-menu__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13 9h-2v3H8v2h3v3h2v-3h3v-2h-3z"></path><path d="M20 5h-8.586L9.707 3.293A.996.996 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"></path></svg> Create Project <span style={{fontSize:"12px",fontWeight:"bold",padding:"3px 3px",color:"#7b341e",backgroundColor:"#feebc8"}}>PRO</span></button>
                </div>
            </div>
            
            <div className=' mt-1 'style={{textAlign:"left"}}>
                <Image src={"/avatar.webp"} height={35} width={40} style={{borderRadius:"20px",marginLeft:"15px",cursor:"pointer"}} onClick={media ? rightNavToggling : usertoggling}  />
                <div id="user" style={{border:"1px solid #e2e8f0",borderRadius:"8px",fontSize:"17px",zIndex:"9999",boxShadow:"0 1px 2px 0 rgba(0,0,0,0.05)" ,position:"absolute",right:"3%",top:"9%",width:"19rem",display:"none",backgroundColor:"white",padding:"10px 0px"}} >
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



        <div className='container med mt-4'>
          <div className='row'>
            <div className="col-xl-8 col-lg-8 filt">
            <div className='row'>
    <div className=' flex '>
    <p className='mt-2 fil'>Filter: </p>
    <button id="fillters" onClick={() => { activeUser()}} className={active==true ? 'font-bold px-2 h-9 ml-2 text-center border border-slate-400 rounded-md cursor-pointer focus:outline-0' : 'font-bold focus:outline-0  cursor-pointer px-2 h-9 ml-2 text-center border border-slate-400 rounded-md '}style={{backgroundColor:active==true ? "#edf2f7" : "#F3F4F6",color:"#1a202c"}}><i className="fa fa-circle" style={{fontSize:"10px",color:active==true ?"green":"grey"}} /> {active==true ?"Active":"Inactive"}   <i className="fa fa-random"></i></button>
    <select onChange={category} id="fillters" className='font-bold cursor-pointer fil w-21 h-9 ml-2 text-center border border-slate-400 rounded-md focus:outline-0'style={{color:"rgba(0,0,0,0.64)",backgroundColor:"#edf2f7"}}>
      <option style={{backgroundColor:"white",color:"black"}} value="allProjects">Category</option>
      <option style={{backgroundColor:"white",color:"black"}} value="Recruiting">Recruiting</option>
      <option style={{backgroundColor:"white",color:"black"}} value="Hosting">Hosting</option>
      <option style={{backgroundColor:"white",color:"black"}} value="Accounting">Accounting</option>
      <option style={{backgroundColor:"white",color:"black"}} value="Design">Design</option>      
      <option style={{backgroundColor:"white",color:"black"}} value="Marketing">Marketing</option>
      <option style={{backgroundColor:"white",color:"black"}} value="Video Streaming">Video Streaming</option>
    </select>
    <select onChange={period} id="fillters" className='font-bold cursor-pointer fil w-20 h-9 ml-2 text-center border border-slate-400 rounded-md focus:outline-0' style={{color:"rgba(0,0,0,0.64)",backgroundColor:"#edf2f7"}}>
      <option style={{backgroundColor:"white",color:"black"}} value="allProjects">Period</option>
      <option style={{backgroundColor:"white",color:"black"}} value="1 month">1 month</option>
      <option style={{backgroundColor:"white",color:"black"}} value="2 month">2 month</option>
      <option style={{backgroundColor:"white",color:"black"}} value="6 month">6 month</option>
      <option style={{backgroundColor:"white",color:"black"}} value="1 year">1 year</option>
      <option style={{backgroundColor:"white",color:"black"}} value="One time">One time</option>
    </select>
    <select onChange={payment} id="fillters" className='font-bold cursor-pointer fil h-9 text-center ml-2 border border-slate-400 rounded-md focus:outline-0'style={{color:"rgba(0,0,0,0.64)",backgroundColor:"#edf2f7"}}>
      <option style={{backgroundColor:"white",color:"black"}} value="allProjects">Payment Method</option>
      <option style={{backgroundColor:"white",color:"black"}} value="Paypal">Paypal</option>
      <option style={{backgroundColor:"white",color:"black"}} value="Credit card">Credit card</option>
    </select>
    <select onChange={colorChange} id="fillters" className='font-bold cursor-pointer fil w-20 h-9 text-center ml-2 border border-slate-400 rounded-md focus:outline-0'style={{color:"rgba(0,0,0,0.64)",backgroundColor:"#edf2f7"}}>
      <option style={{backgroundColor:"white",color:"black"}} value="allProjects">Color</option>
      <option style={{backgroundColor:"white",color:"black"}} value="rgba(255, 0, 0, 0.4)">Red</option>
      <option style={{backgroundColor:"white",color:"black"}} value="rgba(60, 179, 113,0.8)">Green</option>
      <option style={{backgroundColor:"white",color:"black"}} value="rgba(109, 143, 172, 0.6)">Grey</option>
      <option style={{backgroundColor:"white",color:"black"}} value="rgba(240, 240, 240,0.4)">White</option>
      <option style={{backgroundColor:"white",color:"black"}} value="rgba(0, 0, 255, 0.4)">Blue</option>
    </select>
    <select id="fillters" className='font-bold cursor-pointer fil w-20 h-9 ml-2 text-center border border-slate-400 rounded-md focus:outline-0'style={{color:"rgba(0,0,0,0.64)",backgroundColor:"#edf2f7"}}>
      <option style={{backgroundColor:"white",color:"black"}} value="allProjects">Tags</option>
      <option style={{backgroundColor:"white",color:"black"}} value="openProjects">Open Projects</option>
      <option style={{backgroundColor:"white",color:"black"}} value="closedProjects">Closed Projects</option>
    </select>
</div>
</div>
            </div>
            <div className="proj col-xl-4 col-lg-4">
              <div className='row '>
              <div className='col-xl-7 col-lg-5 delete'></div>
              <div className='col-xl-5 col-lg-7 flex flex-row'><span ><p className='view ml-6 mt-1'>View</p></span> 
              <button onClick={block} id="bloc" data-placement="bottom" style={{border:"1px solid rgba(0,0,0,0.08)",borderRadius:"3px",backgroundColor:"#edf2f7"}} className=' ml-2 p-1 w-8 h-8 cursor-pointer	focus:outline-0'><Image src={"/square.png"} width={15} height={14}  /></button>
              <UncontrolledTooltip 
                                    placement="bottom"
                                    target="bloc"
                                  >Grid</UncontrolledTooltip>
              <button onClick={list} id="lis" style={{border:"1px solid rgba(0,0,0,0.08)",borderRadius:"3px",backgroundColor:"#cbd5e0"}} className='ml-2 p-1 w-8 h-8 cursor-pointer focus:outline-0'><Image src={"/list.png"} width={16} height={16} /> </button>
              <UncontrolledTooltip 
                                    placement="bottom"
                                    target="lis"
                                  >Table</UncontrolledTooltip>
              <button onClick={calander} id="calan" style={{border:"1px solid rgba(0,0,0,0.08)",borderRadius:"3px",backgroundColor:"#edf2f7"}} className=' ml-2 p-1 w-8 h-8 cursor-pointer	focus:outline-0'><Image src={"/calander.png"} width={16} height={15} /> </button>
              <UncontrolledTooltip 
                                    placement="bottom"
                                    target="calan"
                                  >Calander (Beta)</UncontrolledTooltip>
              </div>
              </div>
            </div>
          </div>
        </div>





  <div className='row flex-row-reverse mt-3'>
  <div className='col-lg-4'><Right />
      </div>
  <div className='col-lg-8 mt-1 tableDiv'>
    

    <div className="table-container "id="listv" style={{height:data.length!=0 ? "540px" : "40px",overflow:"scroll",overflowX:"hidden"}}>
     <style jsx global>{`
        .table-container::-webkit-scrollbar {
          display: none;
      }
      `}</style>
      {/*<table {...getTableProps()} id="tableData">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? '↓' : '↑') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table> */}
      <table id="myTable">
    <tbody>
        <tr>
          <th onClick={() => { sortTable(0)}} style={{color:"#4A5568",cursor:"pointer"}} id="fillters">Name</th>
          <th onClick={() => { sortTable(1)}} style={{color:"#4A5568",cursor:"pointer"}} id="fillters">Category</th>
          <th onClick={() => { sortTable(2)}} style={{color:"#4A5568",cursor:"pointer"}} id="fillters">Cost</th>
          <th onClick={() => { sortTable(3)}} style={{color:"#4A5568",cursor:"pointer"}} id="fillters">Billing Period</th>
          <th onClick={() => { sortTable(4)}} style={{color:"#4A5568",cursor:"pointer"}} id="fillters">Payment Method</th>
          <th onClick={() => { sortTable(5)}} style={{color:"#4A5568",cursor:"pointer"}} id="fillters">Next Payment</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index} style={{borderTop:"2px solid #f7fafc",cursor:"pointer"}} id="fillters">
            <td>
              <img src={item.image} alt="" height={30} style={{borderRadius:"15px",marginRight:"5px"}}/>{ item.first_name}</td>
            <td>{item.category}</td>
            <td>{item.cost}</td>
            <td>{item.period}</td>
            <td><img src={item.credit} alt="" height={18}/> {item.payment_method}</td>
            <td>{format(new Date(item.next_payment), 'MMM/dd/yyyy')} <button onClick={() => { toggling(index)}}  className='ml-4 w-8 h-8 focus:outline-none border-0 rounded-lg bg-[#e2e8f0]'>
            <svg stroke="currentColor" fill="black" stroke-width="0" viewBox="0 0 24 24" font-size="1.1rem" class="menu-icon" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
              </button>
              
              <div id={index} style={{border:"1px solid #e2e8f0",borderRadius:"10px",boxShadow:"0 1px 2px 0 rgba(0,0,0,0.05)" ,position:"absolute",left:"60%",width:"16rem",display:"none",backgroundColor:"white",padding:"10px 2px"}} >
              <button className='hover:bg-[#e2e8f0] focus:outline-none' style={{color: "inherit",width:"100%",border:"none",backgroundColor:"white",textAlign:"left",padding:"5px"}}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" font-size="18" focusable="false" aria-hidden="true" class="chakra-menu__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path></svg> Edit</button>
              <button className='hover:bg-[#e2e8f0] focus:outline-none' style={{color: "inherit", width:"100%",border:"none",backgroundColor:"white",textAlign:"left",padding:"5px"}}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" font-size="18" focusable="false" aria-hidden="true" class="chakra-menu__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path></svg> Duplicate</button>
              <button className='hover:bg-[#e2e8f0] focus:outline-none' style={{color: "inherit", width:"100%",border:"none",backgroundColor:"white",textAlign:"left",padding:"5px"}}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" font-size="18" focusable="false" aria-hidden="true" class="chakra-menu__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg> Visit Website</button>
              <button className='hover:bg-[#e2e8f0] focus:outline-none' style={{color: "inherit", width:"100%",border:"none",backgroundColor:"white",textAlign:"left",padding:"5px"}}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" font-size="18" focusable="false" aria-hidden="true" class="chakra-menu__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 11h10v2H7z"></path><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path></svg> Move to Inactive</button>
              <button className='hover:bg-[#e2e8f0] focus:outline-none' style={{color:"red", width:"100%",border:"none",backgroundColor:"white",textAlign:"left",padding:"5px"}}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" font-size="18" focusable="false" aria-hidden="true" class="chakra-menu__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z"></path></svg> Delete</button>
              </div>
              </td>
          </tr>
        ))}
      </tbody>
      </table>
      </div>
      {data.length===0 && (
                                    <div id='noData' style={{textAlign:"center",alignItems:"center"}}>
                                        <img src="https://web.subly.app/empty-states/light/32.svg"></img>
                                        <h2>There are no active subscriptions in this project</h2>
                                        <p>Start adding subscriptions to this project by clicking the "New Subscription" button</p>
                                    </div>
                                )}
      <Card.Group className='table-container mt-2 ml-1'id="blockv" style={{display:"none",height:data.length!=0 ? "560px" : "40px",overflow:"scroll",overflowX:"hidden"}} >
        <Grid columns = { 3 }
        stackable > {
          mockData && mockData.map((item) => ( < Grid.Column key = { item.id } style={{paddingBottom:"0"}}>
                <Card style={{backgroundColor:item.color,borderRadius:"8px"}} >
                <Card.Content > 
                  <img src={`https://picsum.photos/200/300?random=${item.id}`} className='left floated mt-2 mr-1 w-11 h-11'style={{borderRadius:"50px"}}/> 
                <Card.Header className='left floated' style = {
                    { marginTop: "10px",color:item.color=="rgba(240, 240, 240,0.4)"?"black":"white" }
                } > {item.first_name }</Card.Header>    
                <Card.Header className='right floated' style = {
                    { marginTop: "13px" ,fontSize:"15px", color:item.color=="rgba(240, 240, 240,0.4)"?"black":"white"}
                } > $ {item.cost}</Card.Header>
                <Card.Description style={{color:item.color=="rgba(240, 240, 240,0.4)"?"black":"white"}} ><p className='left floated ml-12'> { item.category } </p><p className='right floated'>{ item.period }</p></Card.Description> 
               
                </Card.Content>    
                 </Card>    
                </Grid.Column>
            ))
        } </Grid>    
        </Card.Group> 
        <div id="calenderView" style={{display:"none"}}>   
        <Calendar className='table-container' 
        views={["month"]}
        // selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height:"640px",overflow:"scroll",overflowX:"hidden" }}
        
      />
      
      </div>
    </div>
    </div>
    </>
  );
};

export default SortingTable;
