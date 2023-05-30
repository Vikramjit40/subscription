import React, { useEffect,useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import MOCK_DATA from '../public/MOCK_DATA.json';

const Right = () => {
  const [blockActive,setBlockActive]=useState();
  const [listActive,setListActive]=useState();
  const[calanActive,setCalanActive]=useState();
  const rec=MOCK_DATA.filter(function (el) {
    return el.period != "One time"})
    const sum = rec.reduce((accumulator, object) => {
      return accumulator + parseInt(object.cost);
    }, 0);
    const avg=(sum/rec.length).toFixed(2)
    // const onet=MOCK_DATA.filter(function (el) {
    //   return el.period != "One time"})
    //   const sumOn = onet.reduce((accumulator, object) => {
    //     return accumulator + parseInt(object.cost);
    //   }, 0);
      
  return (
    <div className='container' style={{backgroundColor:"#f7fafc",padding:"0"}}>
        
        <div className='row bg-white mt-4 mr-2 rounded-md'>
            <div className='row'>
            <div className='col-lg-11 col-sm-11 col-11 py-3 flex'>
            <p className='font-bold'><i className='fas fa-redo-alt'/> Recurring expenses</p>
            </div>
            <div className='col-lg-1 col-sm-1 pt-1 col-1 h-8 mt-1 bg-backcolor'>
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
