import React, { useEffect,useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import MOCK_DATA from '../public/MOCK_DATA.json';
import { blockView,listView,calanderView } from './DataTable';


const Right = () => {
  const [blockActive,setBlockActive]=useState();
  const [listActive,setListActive]=useState();
  const[calanActive,setCalanActive]=useState();
  useEffect(() => {
    setBlockActive(document.getElementById("bloc"));
    setListActive(document.getElementById("lis"));
    setCalanActive(document.getElementById("calan"));
  }, []);

  
  var activeStyle = {
    "border-radius": "5px",
    "border": "2px solid black",
    "background-color":"#C5C5C5"
};
var inactiveStyle = {
  "border-radius": "0px",
  "border": "1px solid black",
  "background-color":" #F5F5F5"
};
  const rec=MOCK_DATA.filter(function (el) {
    return el.period != "One time"})
    const sum = rec.reduce((accumulator, object) => {
      return accumulator + parseInt(object.cost);
    }, 0);
    const avg=(sum/rec.length).toFixed(2)
    const onet=MOCK_DATA.filter(function (el) {
      return el.period != "One time"})
      const sumOn = onet.reduce((accumulator, object) => {
        return accumulator + parseInt(object.cost);
      }, 0);
      function block(){
        blockView();
        Object.assign(calanActive.style, inactiveStyle);
        Object.assign(listActive.style, inactiveStyle);
        Object.assign(blockActive.style, activeStyle);
      }
      function list(){
        listView();
        Object.assign(calanActive.style, inactiveStyle);
        Object.assign(listActive.style, activeStyle);
        Object.assign(blockActive.style, inactiveStyle);
      }
      function calander(){
        calanderView();
        Object.assign(listActive.style, inactiveStyle);
        Object.assign(blockActive.style, inactiveStyle);
        Object.assign(calanActive.style, activeStyle);
      }
  return (
    <div className='container' style={{backgroundColor:"#F5F5F5",padding:"0"}}>
        <div className='row pt-1 'style={{textAlign:"right"}}>
            <div className='col-lg-7'></div>
            <div className='col-lg-5 flex flex-row'><span ><p>View</p></span> 
            <button onClick={block} id="bloc" style={{border:"1px solid black"}} className=' ml-5 p-1 cursor-pointer	'><Image src={"/square.png"} width={15} height={10}  /></button>
            <button onClick={list} id="lis" style={{border:"2px solid black",borderRadius: "5px",backgroundColor:"#C5C5C5"}} className='ml-5 p-1 cursor-pointer '><Image src={"/list.png"} width={16} height={12} /> </button>
            <button onClick={calander} id="calan" style={{border:"1px solid black"}} className=' ml-5 p-1 cursor-pointer	'><Image src={"/calander.png"} width={16} height={12} /> </button>
            </div>
            
        </div>
        <div className='row bg-white mt-4 mr-2 rounded-md'>
            <div className='row'>
            <div className='col-lg-11 py-3 flex'>
            <p className='font-bold'><i className='fas fa-redo-alt'/> Recurring expenses</p>
            </div>
            <div className='col-lg-1 pt-1  h-8 mt-1 bg-backcolor'>
            <i className='fa fa-random cursor-pointer'></i>
            {/* <Image src={"/random.png"} height={25}width={15} className='ml-2 cursor-pointer'/> */}
            </div>
            <hr style={{width:"95%",marginLeft:"12px"}} />
        </div>
        
        <div className='row'><div className='col text-center p-5'><p>$ {avg} Monthly</p></div></div>
    </div>
    <div className='row bg-white mt-4 mr-2 rounded-md'>
            <div className='row'>
            <div className='col-lg-11 py-3'>
            <p className='font-bold'><i className='fas fa-file-invoice'/> One-time expenses</p>
            </div>
            <hr style={{width:"95%",marginLeft:"12px"}} />
        </div>
        
        <div className='row'><div className='col text-center p-5'>
            <p>$ {sumOn} All time</p>
            </div></div>
    </div>
    <div className='row bg-white mt-4 mr-2 rounded-md'>
            <div className='row'>
            <div className='col-lg-11 py-3'>
            <p className='font-bold'>Previous Month Comparison</p>
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
