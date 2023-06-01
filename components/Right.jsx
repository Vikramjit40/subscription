import React, { useEffect,useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import MOCK_DATA from '../public/MOCK_DATA.json';

const Right = () => {
  const [blockActive,setBlockActive]=useState();
  const [listActive,setListActive]=useState();
  const[calanActive,setCalanActive]=useState();
  
  const recone=MOCK_DATA.filter(function (el) {
    return el.active == true && el.period=="One time"})

    const sumonetime = recone.reduce((accumulator, object) => {
      return accumulator + Number(object.cost);
    }, 0);

  const rec1Mon=MOCK_DATA.filter(function (el) {
    return el.active == true && el.period=="1 month"})

    const sum1Mon = rec1Mon.reduce((accumulator, object) => {
      return accumulator + Number(object.cost*12);
    }, 0);

    const rec2Mon=MOCK_DATA.filter(function (el) {
      return el.active == true && el.period=="2 month"})
  
      const sum2Mon = rec2Mon.reduce((accumulator, object) => {
        return accumulator + Number(object.cost*6);
      }, 0);

      const rec6Mon=MOCK_DATA.filter(function (el) {
        return el.active == true && el.period=="6 month"})
    
        const sum6Mon = rec6Mon.reduce((accumulator, object) => {
          return accumulator + Number(object.cost*2);
        }, 0);
        const rec1Yea=MOCK_DATA.filter(function (el) {
          return el.active == true && el.period=="1 year"})
      
          const sum1Yea = rec1Yea.reduce((accumulator, object) => {
            return accumulator + Number(object.cost);
          }, 0);
    const avgMon=((sum1Mon+sum2Mon+sum6Mon+sum1Yea)/12).toFixed(2)
const yearly=(sum1Mon+sum2Mon+sum6Mon+sum1Yea).toFixed(2)
    // const onet=MOCK_DATA.filter(function (el) {
    //   return el.period != "One time"})
    //   const sumOn = onet.reduce((accumulator, object) => {
    //     return accumulator + parseInt(object.cost);
    //   }, 0);
    var nextWord = (function() {
      var wordArray = ['Quarterly','Half-yearly','Yearly','Weekly','Monthly'];
      var count = -1;
      return function() {
        return wordArray[++count % wordArray.length];
      }
    }());
    const recur=()=>{
      const next= nextWord()
      if(next==="Quarterly"){
        document.getElementById("recurringtype").innerHTML=" "+next
        document.getElementById("recurringcost").innerHTML=((yearly/4).toFixed(2)).split('.')[0]
        document.getElementById("recurringcostdot").innerHTML="."+((yearly/4).toFixed(2)).split('.')[1]
      }
      else if(next=="Half-yearly"){
        document.getElementById("recurringtype").innerHTML=" "+next
        document.getElementById("recurringcost").innerHTML=((yearly/2).toFixed(2)).split('.')[0]
        document.getElementById("recurringcostdot").innerHTML="."+((yearly/2).toFixed(2)).split('.')[1]
      }
      else if(next=="Yearly"){
        document.getElementById("recurringtype").innerHTML=" "+next
        document.getElementById("recurringcost").innerHTML=(yearly).split('.')[0]
        document.getElementById("recurringcostdot").innerHTML="."+((yearly)).split('.')[1]
      }
      else if(next=="Weekly"){
        document.getElementById("recurringtype").innerHTML=" "+next
        document.getElementById("recurringcost").innerHTML=((yearly/52.1429).toFixed(2)).split('.')[0]
        document.getElementById("recurringcostdot").innerHTML="."+((yearly/52.1429).toFixed(2)).split('.')[1]
      }
      else if(next=="Monthly"){
        document.getElementById("recurringtype").innerHTML=" "+next
        document.getElementById("recurringcost").innerHTML=(avgMon).split('.')[0]
        document.getElementById("recurringcostdot").innerHTML="."+(avgMon).split('.')[1]
      }
      else{return}
    }
  return (
    <div className='container' style={{backgroundColor:"#f7fafc",padding:"0"}}>
        
        <div className='row bg-white mt-4 mr-2 rounded-lg h-48' style={{boxShadow:"rgba(0, 0, 0, 0.05) 0px 4px 6px -1px" }}>
            <div className='row'>
            <div className='col-lg-11 col-sm-11 col-11 py-3 mt-4 flex'>
            <p style={{fontSize:"18px"}} className='font-bold'><i className='fas fa-redo-alt'/> Recurring expenses</p>
            </div>
            <button onClick={recur} style={{fontSize:"16px",textAlign:"center",alignItems:"center"}} id="fillters" className='focus:outline-none cursor-pointer col-lg-1 border rounded-lg col-sm-1  col-1 h-11 mt-4 bg-backcolor'>
            <i className='fa fa-random text-[#1a202c]'></i>
            {/* <Image src={"/random.png"} height={25}width={15} className='ml-2 cursor-pointer'/> */}
            </button>
            <hr style={{width:"95%",marginLeft:"12px"}} />
        </div>
        
        <div className='row'><div className='col text-center p-2'><p style={{fontSize:"18px"}}>$ <span id="recurringcost" style={{fontWeight:"bold",fontSize:"23px"}}>{(avgMon).split('.')[0]}</span><span style={{fontWeight:"bold"}} id="recurringcostdot">{"."+(avgMon).split('.')[1]}</span><span style={{color:"rgba(0,0,0,0.64)",fontSize:"16px"}}> USD</span><span id="recurringtype" style={{color:"rgba(0,0,0,0.64)",fontSize:"16px"}}> Monthly</span></p></div></div>
    </div>
    <div className='row bg-white mt-4 mr-2 rounded-lg h-48' style={{boxShadow:"rgba(0, 0, 0, 0.05) 0px 4px 6px -1px" }}>
            <div className='row'>
            <div className='col-lg-11 col-sm-11 col-11 py-3 mt-4 flex'>
            <p style={{fontSize:"18px"}} className='font-bold'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-133a2hk" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M21 11h-3V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-6a1 1 0 0 0-1-1zM5 19a1 1 0 0 1-1-1V5h12v13c0 .351.061.688.171 1H5zm15-1a1 1 0 0 1-2 0v-5h2v5z"></path><path d="M6 7h8v2H6zm0 4h8v2H6zm5 4h3v2h-3z"></path></svg> One-time expenses</p>
            </div>
            <div style={{fontSize:"16px"}} className=' col-lg-1 col-sm-1 py-1 col-1 h-8 mt-7'>
            <p>LTS</p>
            </div>
            <hr style={{width:"95%",marginLeft:"12px"}} />
        </div>
        
        <div className='row'><div className='col text-center p-3'><p style={{fontSize:"18px"}}>$ <span style={{fontWeight:"bold",fontSize:"23px"}} >{String(sumonetime.toFixed(2)).split('.')[0]}</span><span style={{fontWeight:"bold"}}>{"."+String(sumonetime.toFixed(2)).split('.')[1]}</span><span style={{color:"rgba(0,0,0,0.64)",fontSize:"16px"}}> USD</span><span style={{color:"rgba(0,0,0,0.64)",fontSize:"16px"}}> All Time</span></p></div></div>
    </div>
    <div className='row bg-white mt-4 mr-2 rounded-lg h-52'style={{boxShadow:"rgba(0, 0, 0, 0.05) 0px 4px 6px -1px" }}>
            <div className='row'>
            <div className='col-lg-11 py-2 mt-4'>
            <p style={{fontSize:"18px"}} className='font-bold'>Previous Month Comparison</p>
            </div>
            <hr style={{width:"95%",marginLeft:"12px"}} />
        </div>
        
        <div className='row'><div className='col text-center p-5'>
            
            </div></div>
    </div>
    </div>
  )
}

export default Right
