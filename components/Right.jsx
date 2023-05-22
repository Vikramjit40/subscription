import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
const Right = () => {
  return (
    <div className='container' style={{backgroundColor:"#F5F5F5",padding:"0"}}>
        <div className='row pt-1 pl-5' >
        <div className='col-lg-2' ></div>
            <div className='col-lg-2' style={{textAlign:"left"}}>
                <input className={styles.search} style={{width:"99px",borderRadius:"5px",padding:"2px",fontSize:"13px"}} type="text" placeholder=" &#61442; Search"></input>
            </div>
            <div className='col-lg-1' ></div>
            <div className='col-lg-3'style={{textAlign:"left"}}>
                <button style={{color:"white",backgroundColor:"black",borderRadius:"5px",padding:"3px 4px",fontSize:"12px"}}>+ New Subscription</button>
            </div>
           
            <div className='col-lg-2'style={{textAlign:"left",width:"90px"}}>     
                <select style={{backgroundColor:"#ffffff",padding:"5px 4px",borderRadius:"5px",border:"1px solid black",fontSize:"12px" }}>
                    <option value="allProjects">All Projects</option>
                    <option value="openProjects">Open Projects</option>
                    <option value="closedProjects">Closed Projects</option>
                </select>
            </div>
            <div className='col-lg-1' ></div>
            <div className='col-lg-1 mt-1'style={{textAlign:"left"}}>
                <Image src={"/logo.jpg"} height={25} width={20} />
            </div>
        </div>
        <div className='row pt-4 'style={{textAlign:"right"}}>
            <div className='col-lg-8'></div>
            <div className='col-lg-4 flex flex-row'><span className='cursor-pointer'><p>View</p></span> 
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
            <div className='col-lg-1 pt-2 pl-4 h-8 mt-1 bg-backcolor'>
            <Image src={"/random.png"} height={15}width={15} className='cursor-pointer'/>
            </div>
            <hr style={{width:"100%",marginLeft:"12px"}} />
        </div>
        
        <div className='row'><div className='col text-center p-5'><p>Amount</p></div></div>
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
