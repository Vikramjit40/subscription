import React, { useState } from 'react';
import 'regenerator-runtime/runtime';
import { useAsyncDebounce } from 'react-table';
import styles from '@/styles/Home.module.css'


const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce(value1 => {
    setFilter(value1 || undefined);
  }, 1000);

  return (
    <span>
      <input className={`${styles.search} cursor-pointer `} style={{width:"110px",borderRadius:"5px",padding:"8px 0px",fontSize:"13px"}} 
        type="text"
        value={value || ''} placeholder=" &#61442; Search"
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
};

export default GlobalFilter;

/**
 * global filter component
 */
// const GlobalFilter = ({ filter, setFilter }) => {
//   return (
//     <span>
//       Search:{' '}
//       <input
//         type="text"
//         value={filter || ''}
//         onChange={e => {
//           setFilter(e.target.value);
//         }}
//       />
//     </span>
//   );
// };
