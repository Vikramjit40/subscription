import React, { useMemo, useState,useEffect } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useTable, useSortBy,useGlobalFilter, useFilters } from 'react-table';
import {COLUMNS} from './columns' ;
import MOCK_DATA from '../public/MOCK_DATA.json';
import { activeDatalen,catDatalen,payDatalen,periodDatalen,colorDatalen } from './Sidebar';
import Image from 'next/image';
import Right from './Right';
import{Modal,ModalBody,ModalHeader,Dropdown,DropdownItem,DropdownToggle,DropdownMenu} from 'reactstrap';
import { Card, Grid} from "semantic-ui-react";
import { UncontrolledTooltip } from 'reactstrap';
import { format } from 'date-fns';

moment.locale("en");
  const localizer= momentLocalizer(moment)
  
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
  const [isOpen,setIsOpen]=useState(false);
  const toggle1=()=>setModal1(!modal1);
  const toggle2=()=>setModal2(!modal2);
  

  useEffect(() => {
    document.onkeyup = function(e) {
    if (e.ctrlKey && e.which == 66) {
      setModal1(!modal1)}
};
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
        if (dir == "asc" && n!=0 && n!=2) {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc" && n!=0 && n!=2) {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
        else if (dir == "asc" && n==0) {
          console.log(x.innerHTML.split(">"))
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

  return (
    <>
    <div className='row mt-2'>
    <div className='col-xl-7 col-lg-3 col-sm-4 '>
     <h1 style={{fontWeight:"bold",fontSize:"25px",marginBottom:"28px"}}>Subscriptions</h1>
      </div>
      <div className='col-xl-5 col-lg-9 col-sm-8 pt-1 ' >
        <div className=' flex gap-x-3 ml-12 newSub'>
            <div className='fontsi' style={{textAlign:"left"}}>
            <button id="fillters" onClick={toggle1} className='focus' style={{fontSize:"15px",padding:"4px 10px",display:"flex",backgroundColor:"#edf2f7"}}><div style={{display:"flex"}}><svg  stroke="currentColor" fill="#718096" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-lgbjuw" height="2em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg><p className='ml-1 mt-1 ' style={{color:"rgba(0,0,0,0.64)"}}>Search</p></div><div className='ml-3 mt-2'style={{fontSize:"11px"}}><kbd>Ctrl</kbd><kbd className=" ml-1 ">b</kbd></div></button>
            </div>
            <Modal style={{overflow:"hidden",borderRadius:"10px",zIndex:"1",borderColor: "rgb(19,128,228)",boxShadow: "rgb(19,128,228) 0px 0px 0px 1px",outline: "0"}} isOpen={modal1} fade={true} toggle={toggle1} className='mod ' >
              <ModalBody ><div style={{display:"flex"}}><div className='mt-2'><svg  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-lgbjuw" height="2em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg></div><input className='focus' style={{width:"100%",padding:"8px 10px",fontSize:"20px"}} type='text' placeholder='Search by name, category or tags'></input></div></ModalBody>
            </Modal>
            
            



            <div className='fontsi' style={{textAlign:"left"}}>
                <button onClick={toggle2} className=" hover:bg-[black] focus" style={{fontSize:"15px",color:"white",backgroundColor:"rgba(0,0,0,0.8)",borderRadius:"5px",padding:"10px 12px",width:"12rem"}}>+ New Subscription</button>
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
                <select  id="fillters" style={{cursor:"pointer", backgroundColor:"#ffffff",padding:"8px 4px",borderRadius:"5px",border:"1px solid black",fontSize:"15px",color:"#1a202c" }}>
                    <option value="allProjects">All Projects</option>
                    <option value="openProjects">Personal</option>
                    <option value="closedProjects">Create Project</option>
                </select>
            </div>
            
            <div className=' mt-1 cursor-pointer'style={{textAlign:"left"}}>
                <Image src={"/avatar.webp"} height={35} width={40} style={{borderRadius:"20px",marginLeft:"15px"}} />
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
              <img src={item.image} alt="" height={30} style={{borderRadius:"15px"}} /> {item.first_name}
            </td>
            <td>{item.category}</td>
            <td>{item.cost}</td>
            <td>{item.period}</td>
            <td><img src={item.credit} alt="" height={18}/> {item.payment_method}</td>
            <td>{format(new Date(item.next_payment), 'dd/MM/yyyy')} <button onClick={() => { toggling(index)}}  className='ml-4 w-8 h-8 focus:outline-none border-0 rounded-lg bg-[#e2e8f0]'>
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
