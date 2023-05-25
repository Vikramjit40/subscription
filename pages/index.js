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
    <SortingTable />
     </div>
     </div>
     </Layout>
  )
}
