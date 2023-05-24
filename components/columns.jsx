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
    accessor: 'category'
    // Filter: ColumnFilter
  },
  {
    Header: 'Cost',
    accessor: 'cost'
    // Filter: ColumnFilter
  },
  {
    Header: 'Billing Period',
    accessor: 'period'
    // Filter: ColumnFilter
  },
  {
    Header: 'Payment Method',
    accessor: 'payment_method'
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

