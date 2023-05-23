import { format } from 'date-fns';
export const COLUMNS = [
  // {
  //   Header: 'Id',
  //   accessor: 'id',
  //   Footer: 'Id',
  //   // Filter: ColumnFilter,
  //   disableFilters: true
  // },
  {
    Header: 'Name',
    accessor: 'first_name',
    // Filter: ColumnFilter
  },
  {
    Header: 'Category',
    accessor: 'country'
    // Filter: ColumnFilter
  },
  {
    Header: 'Cost',
    accessor: 'phone'
    // Filter: ColumnFilter
  },
  {
    Header: 'Billing Period',
    accessor: 'age'
    // Filter: ColumnFilter
  },
  {
    Header: 'Payment Method',
    accessor: 'email'
    // Filter: ColumnFilter
  },
  {
    Header: 'Next Payment',
    accessor: 'date_of_birth',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy');
    }
    // Filter: ColumnFilter
  }
];

