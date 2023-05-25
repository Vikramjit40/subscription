import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import MOCK_DATA from '../public/MOCK_DATA.json';

const Right = () => {
  const asd=MOCK_DATA.filter(function (el) {
    return el.period != "One time"})
    const sum = asd.reduce((accumulator, object) => {
      return accumulator + parseInt(object.cost);
    }, 0);
    
  return (
    <div className='container' style={{backgroundColor:"#F5F5F5",padding:"0"}}>
        <div className='row pt-1 'style={{textAlign:"right"}}>
            <div className='col-lg-7'></div>
            <div className='col-lg-5 flex flex-row'><span className='cursor-pointer'><p>View</p></span> 
            <span className='border-neutral-100 border-1 ml-5 p-1 cursor-pointer	'><Image src={"/square.png"} width={15} height={10}  /></span>
            <span className='border-solid border-1 ml-5 p-1 cursor-pointer	'><Image src={"/list.png"} width={16} height={12} /> </span>
            <span className='border-solid border-1 ml-5 p-1 cursor-pointer	'><Image src={"/calander.png"} width={16} height={12} /> </span>

            </div>
            
        </div>
        <div className='row bg-white mt-4 mr-2 rounded-md'>
            <div className='row'>
            <div className='col-lg-11 py-3 flex'>
            <Image src={"/reload.png"} height={15}width={15} className='cursor-pointer'/>
            <h2 className='font-bold ml-2'>Recurring expenses</h2>
            </div>
            <div className='col-lg-1 pt-1  h-8 mt-1 bg-backcolor'>
            <i className='fa fa-random cursor-pointer'></i>
            {/* <Image src={"/random.png"} height={25}width={15} className='ml-2 cursor-pointer'/> */}
            </div>
            <hr style={{width:"100%",marginLeft:"12px"}} />
        </div>
        
        <div className='row'><div className='col text-center p-5'><p>{sum}</p></div></div>
    </div>
    <div className='row bg-white mt-4 mr-2 rounded-md'>
            <div className='row'>
            <div className='col-lg-11 py-3'>
            <h2 className='font-bold'>Previous Month Comparison</h2>
            </div>
            <hr style={{width:"100%",marginLeft:"12px"}} />
        </div>
        
        <div className='row'><div className='col text-center p-5'>
            
            </div></div>
    </div>
    </div>
  )
}

export default Right
