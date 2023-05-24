import React, { useMemo, useState } from 'react';
import { useTable, useSortBy } from 'react-table';
import {COLUMNS} from './columns' ;
import MOCK_DATA from '../public/MOCK_DATA.json';
import { activeDatalen,catDatalen,payDatalen,periodDatalen } from './Sidebar';
const SortingTable = props => {
  const [mockData,setMockData]=useState(MOCK_DATA)
  const columns = useMemo(() => COLUMNS, []);
  const data = mockData;
  const [active,setActive]=useState(true);
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      disableSortRemove: true
    },
    useSortBy
  );
  
  function activeUser(){
    setActive(current => !current)
    if(active==true){
    setMockData(MOCK_DATA.filter(function (el) {
      return el.active == true 
    }))
    setTimeout(() => {activeDatalen(active)}, 100)
  }
    else{
      setMockData(MOCK_DATA)
      setTimeout(() => {activeDatalen(active)}, 100)
    };
  }
  function category(event){
    const value=event.target.value;
    if(value=="allProjects"){
    setMockData(MOCK_DATA)
    setTimeout(() => {catDatalen(value)}, 100)
  }
    else{
    setMockData(MOCK_DATA.filter(function(el){
      return el.category==value
    }))
    setTimeout(() => {catDatalen(value)}, 100)
    }
  }
  function payment(event){
    const value=event.target.value;
    if(value=="allProjects"){
    setMockData(MOCK_DATA)
    setTimeout(() => {payDatalen(value)}, 100)
  }
    else{
    setMockData(MOCK_DATA.filter(function(el){
      return el.payment_method==value
    }))
    setTimeout(() => {payDatalen(value)}, 100)
    }
  }
  function period(event){
    const value=event.target.value;
    if(value=="allProjects"){
    setMockData(MOCK_DATA)
    setTimeout(() => {periodDatalen(value)}, 100)
  }
    else{
    setMockData(MOCK_DATA.filter(function(el){
      return el.period==value
    }))
    setTimeout(() => {periodDatalen(value)}, 100)
    }
  }
  

  return (
    <>
    <div className=' flex '>
    <p className='mb-3'>Filter: </p>
    <span onClick={() => { activeUser()}} className={active==true ? 'bg-filter px-1 h-7 ml-2 text-center border-0 rounded-md cursor-pointer' : 'bg-light-lighter cursor-pointer px-1 h-7 ml-2 text-center border-2 rounded-md '}><i className="fa fa-circle" style={{fontSize:"10px",color:"green"}} />  Active  <i className="fa fa-random"></i></span>
    <select onChange={category} className='w-21 h-7 ml-2 text-center border rounded-md bg-filter'>
      <option value="allProjects">Category</option>
      <option value="API Dev">API Dev</option>
      <option value="CMS">CMS</option>
      <option value="Communication">Communication</option>
      <option value="Design">Design</option>      
      <option value="Education">Education</option>
      <option value="Entertainment">Entertainment</option>
    </select>
    <select onChange={period} className='w-20 h-7 ml-2 text-center border rounded-md bg-filter'>
      <option value="allProjects">Period</option>
      <option value="1 month">1 month</option>
      <option value="30 days">30 days</option>
      <option value="6 month">6 month</option>
      <option value="1 year">1 year</option>
      <option value="One time">One time</option>
    </select>
    <select onChange={payment} className='h-7 text-center ml-2 border rounded-md bg-filter'>
      <option value="allProjects">Payment Method</option>
      <option value="Debit">Debit</option>
      <option value="Credit">Credit</option>
      <option value="Invoice">Invoice</option>
    </select>
    <select className='w-20 h-7 text-center ml-2 border rounded-md bg-filter'>
      <option value="allProjects">Color</option>
      <option value="openProjects">Open Projects</option>
      <option value="closedProjects">Closed Projects</option>
    </select>
    <select className='w-20 h-7 ml-2 text-center border rounded-md bg-filter'>
      <option value="allProjects">Tags</option>
      <option value="openProjects">Open Projects</option>
      <option value="closedProjects">Closed Projects</option>
    </select>
</div>
    <div className="table-container" style={{height:"640px",overflow:"scroll",overflowX:"hidden"}}>
     <style jsx>{`
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
        {/* <tfoot>
          {footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map(column => (
                <td {...column.getFooterProps()}>{column.render('Footer')} </td>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>
    </div>
    </>
  );
};

export default SortingTable;