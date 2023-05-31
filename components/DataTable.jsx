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
import{Modal,ModalBody} from 'reactstrap';
import { Card, Grid} from "semantic-ui-react";

moment.locale("en");
  const localizer= momentLocalizer(moment)
  
const SortingTable = props => {
  const [mockData,setMockData]=useState(MOCK_DATA)
  const columns = useMemo(() => COLUMNS, []);
  const data = mockData;
  const [active,setActive]=useState(true);
  const [eventsData, setEventsData] = useState(MOCK_DATA);
  const [modal,setModal]=useState(false);
  const toggle=()=>setModal(!modal);
  useEffect(() => {
    document.onkeyup = function(e) {
    if (e.ctrlKey && e.which == 66) {
      setModal(!modal)}
}});
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { globalFilter },
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      disableSortRemove: true
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );
  
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
 
  return (
    <>
    <div className='row mt-2'>
    <div className='col-xl-7 col-lg-3 col-sm-4 '>
     <h1 style={{fontWeight:"bold",fontSize:"25px",marginBottom:"28px"}}>Subscriptions</h1>
      </div>
      <div className='col-xl-5 col-lg-9 col-sm-8 pt-1 ' >
        <div className=' flex gap-x-3 ml-12 newSub'>
            <div className='fontsi' style={{textAlign:"left"}}>
            <button onClick={toggle} className='focus' style={{fontSize:"15px",padding:"8px 10px",display:"flex",backgroundColor:"#edf2f7"}}><div style={{display:"flex"}}><svg  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-lgbjuw" height="1.5em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg><p className='ml-1'>Search</p></div><div className='ml-3 mt-1'style={{fontSize:"11px"}}><kbd>Ctrl</kbd><kbd className=" ml-1 ">b</kbd></div></button>
            </div>
            <Modal style={{overflow:"hidden",borderRadius:"15px",border:"2px solid rgba(65,153,225,0.6)"}} isOpen={modal} fade={true} toggle={toggle} className='mod ' >
              <ModalBody ><div style={{display:"flex"}}><div className='mt-2'><svg  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-lgbjuw" height="2em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg></div><input className='focus' style={{width:"100%",padding:"8px 10px",fontSize:"20px"}} type='text' placeholder='Search by name, category or tags'></input></div></ModalBody>
            </Modal>
            
            



            <div className='fontsi' style={{textAlign:"left"}}>
                <button className=" hover:bg-[black] focus" style={{fontSize:"15px",color:"white",backgroundColor:"rgba(0,0,0,0.8)",borderRadius:"5px",padding:"10px 12px",width:"12rem"}}>+ New Subscription</button>
            </div>
            <div className=' cursor-pointer'style={{textAlign:"left"}}>     
                <select style={{backgroundColor:"#ffffff",padding:"8px 4px",borderRadius:"5px",border:"1px solid black",fontSize:"15px" }}>
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
    <button onClick={() => { activeUser()}} className={active==true ? 'bg-#edf2f7 px-2 h-9 ml-2 text-center border border-slate-400 rounded-md cursor-pointer focus:outline-0' : 'focus:outline-0  cursor-pointer px-2 h-9 ml-2 text-center border border-slate-400 rounded-md '}style={{backgroundColor:active==true ? "#edf2f7" : "#F3F4F6"}}><i className="fa fa-circle" style={{fontSize:"10px",color:active==true ?"green":"grey"}} /> {active==true ?"Active":"Inactive"}   <i className="fa fa-random"></i></button>
    <select onChange={category} className='fil w-21 h-9 ml-2 text-center border border-slate-400 rounded-md bg-#edf2f7 focus:outline-0'>
      <option value="allProjects">Category</option>
      <option value="API Dev">API Dev</option>
      <option value="CMS">CMS</option>
      <option value="Communication">Communication</option>
      <option value="Design">Design</option>      
      <option value="Education">Education</option>
      <option value="Entertainment">Entertainment</option>
    </select>
    <select onChange={period} className='fil w-20 h-9 ml-2 text-center border border-slate-400 rounded-md bg-#edf2f7 focus:outline-0'>
      <option value="allProjects">Period</option>
      <option value="1 month">1 month</option>
      <option value="30 days">30 days</option>
      <option value="6 month">6 month</option>
      <option value="1 year">1 year</option>
      <option value="One time">One time</option>
    </select>
    <select onChange={payment} className='fil h-9 text-center ml-2 border border-slate-400 rounded-md bg-#edf2f7 focus:outline-0'>
      <option value="allProjects">Payment Method</option>
      <option value="Debit">Debit</option>
      <option value="Credit">Credit</option>
      <option value="Invoice">Invoice</option>
    </select>
    <select onChange={colorChange} className='fil w-20 h-9 text-center ml-2 border border-slate-400 rounded-md bg-#edf2f7 focus:outline-0'>
      <option value="allProjects">Color</option>
      <option value="rgba(255, 0, 0, 0.4)">Red</option>
      <option value="rgba(60, 179, 113,0.8)">Green</option>
      <option value="rgba(109, 143, 172, 0.6)">Grey</option>
      <option value="rgba(240, 240, 240,0.4)">White</option>
      <option value="rgba(0, 0, 255, 0.4)">Blue</option>
    </select>
    <select className='fil w-20 h-9 ml-2 text-center border border-slate-400 rounded-md bg-#edf2f7 focus:outline-0'>
      <option value="allProjects">Tags</option>
      <option value="openProjects">Open Projects</option>
      <option value="closedProjects">Closed Projects</option>
    </select>
</div>
</div>
            </div>
            <div className="proj col-xl-4 col-lg-4">
              <div className='row '>
              <div className='col-xl-7 col-lg-5 delete'></div>
              <div className='col-xl-5 col-lg-7 flex flex-row'><span ><p className='view ml-6 mt-1'>View</p></span> 
              <button onClick={block} id="bloc" style={{border:"1px solid rgba(0,0,0,0.08)",borderRadius:"3px",backgroundColor:"#edf2f7"}} className=' ml-2 p-1 w-8 h-8 cursor-pointer	focus:outline-0'><Image src={"/square.png"} width={15} height={14}  /></button>
              <button onClick={list} id="lis" style={{border:"1px solid rgba(0,0,0,0.08)",borderRadius:"3px",backgroundColor:"#cbd5e0"}} className='ml-2 p-1 w-8 h-8 cursor-pointer focus:outline-0'><Image src={"/list.png"} width={16} height={16} /> </button>
              <button onClick={calander} id="calan" style={{border:"1px solid rgba(0,0,0,0.08)",borderRadius:"3px",backgroundColor:"#edf2f7"}} className=' ml-2 p-1 w-8 h-8 cursor-pointer	focus:outline-0'><Image src={"/calander.png"} width={16} height={15} /> </button>
              </div>
              </div>
            </div>
          </div>
        </div>





  <div className='row flex-row-reverse mt-3'>
  <div className='col-lg-4'><Right />
      </div>
  <div className='col-lg-8 mt-1'>
    

    <div className="table-container "id="listv" style={{height:"540px",overflow:"scroll",overflowX:"hidden"}}>
     <style jsx global>{`
        .table-container::-webkit-scrollbar {
          display: none;
      }
      `}</style>
      <table {...getTableProps()} id="tableData">
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
      </table>
      </div>
 
      <Card.Group className='table-container mt-2 ml-1'id="blockv" style={{display:"none",height:"560px",overflow:"scroll",overflowX:"hidden"}} >
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
