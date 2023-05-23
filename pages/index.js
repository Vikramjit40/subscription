import styles from '@/styles/Home.module.css'
import Right from '@/components/Right';
import Layout from '@/components/Layout';
import SortingTable from '@/components/DataTable';
// import Filter from '@/components/Filter';
export default function Home() {
    // $(document).ready(function () {
    //     $('#example').DataTable();
    // });
    
  return (
     <Layout >
     <div className='container-fluid ' >
      <div className='row'>
        <div className='col-lg-8  '>
    <h1 style={{fontWeight:"bold",fontSize:"25px",marginBottom:"30px"}}>Subscriptions</h1>     
   {/* <Filter/> */}
    <SortingTable />
     </div>
     <div className='col-lg-4'><Right /></div>
     </div>
     </div>
     
     </Layout>
  )
}
