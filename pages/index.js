import styles from '@/styles/Home.module.css'
import React, { useMemo, useState,useEffect } from 'react';

import Layout from '@/components/Layout';
import SortingTable from '@/components/DataTable';

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
