import styles from '@/styles/Home.module.css'
import Right from '@/components/Right';
import Layout from '@/components/Layout';
import SortingTable from '@/components/DataTable';
import Image from 'next/image';
export default function Home() {
    
    
  return (
     <Layout >
     <div className='container-fluid ' >
     <div className='row'>
     <div className='col-lg-8  '>
     <h1 style={{fontWeight:"bold",fontSize:"25px",marginBottom:"28px"}}>Subscriptions</h1>
      </div>
      <div className='col-lg-4 pt-1 ' >
        <div className='row'>
            <div className='col-lg' style={{textAlign:"left"}}>
                <input className={styles.search} style={{width:"110px",borderRadius:"5px",padding:"2px",fontSize:"13px"}} type="text" placeholder=" &#61442; Search"></input>
            </div>
            
            <div className='col-lg-4'style={{textAlign:"left"}}>
                <button style={{color:"white",backgroundColor:"black",borderRadius:"5px",padding:"3px 5px",fontSize:"12px"}}>+ New Subscription</button>
            </div>
            <div className='col-lg mr-4'style={{textAlign:"left",width:"100px"}}>     
                <select style={{backgroundColor:"#ffffff",padding:"5px 4px",borderRadius:"5px",border:"1px solid black",fontSize:"12px" }}>
                    <option value="allProjects">All Projects</option>
                    <option value="openProjects">Open Projects</option>
                    <option value="closedProjects">Closed Projects</option>
                </select>
            </div>
            
            <div className='col-lg ml-7 mt-1'style={{textAlign:"left"}}>
                <Image src={"/logo.jpg"} height={25} width={20} />
            </div>
        </div>
        </div>
     </div>
      <div className='row'>
        <div className='col-lg-8  '>
    <SortingTable />
     </div>
     <div className='col-lg-4'><Right /></div>
     </div>
     </div>
     
     </Layout>
  )
}
