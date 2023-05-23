import React, { useMemo, useState } from 'react';
import { useTable, useSortBy } from 'react-table';
import {COLUMNS} from './columns' ;
import MOCK_DATA from '../public/MOCK_DATA.json';
// import { activeUser } from './DataTable';
import { activeUserLength } from './Sidebar';
 

export const newArray={}
const SortingTable = props => {
  const [mockData,setMockData]=useState(MOCK_DATA)
  const columns = useMemo(() => COLUMNS, []);
  const data = mockData;
  
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
  
  function activeUser(newArray){
    setMockData(MOCK_DATA.filter(function (el) {
      return el.active == true 
    }));
    newArray=mockData
  }
  return (
    <>
    <div className=' flex '>
    <p className='mb-3'>Filter: </p>
    <button onClick={() => { activeUser()}} className='px-1 h-7 ml-2 text-center border rounded-md bg-filter'><i className="fa fa-circle" style={{fontSize:"10px",color:"green"}} />  Active  <i className="fa fa-random"></i></button>
    <select className='w-21 h-7 ml-2 text-center border rounded-md bg-filter'>
      <option value="allProjects">Category</option>
      <option value="openProjects">Open Projects</option>
      <option value="closedProjects">Closed Projects</option>
    </select>
    <select className='w-20 h-7 ml-2 text-center border rounded-md bg-filter'>
      <option value="allProjects">Period</option>
      <option value="openProjects">Open Projects</option>
      <option value="closedProjects">Closed Projects</option>
    </select>
    <select className='h-7 text-center ml-2 border rounded-md bg-filter'>
      <option value="allProjects">Payment Method</option>
      <option value="openProjects">Open Projects</option>
      <option value="closedProjects">Closed Projects</option>
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
