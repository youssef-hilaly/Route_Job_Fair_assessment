import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { columns, Customers, Transactions } from '../Data/Data';

function Invoices() {
  return (
    <Box sx={{ height: 800, width: '100%' }}>
    <DataGrid slots={{toolbar: GridToolbar}} checkboxSelection rows={JoinTransactionsWithCustomers()} columns={columns} />
    </Box>
  )
}
// id customer_id customer_Name date amount

const JoinTransactionsWithCustomers = () => {
  const tableData = Transactions.map((transaction) => {
    const customer = Customers.find((customer) => customer.id === transaction.customer_id);
    return { ...transaction, customer_Name: customer.name };
  });
  return tableData;
}

export default Invoices