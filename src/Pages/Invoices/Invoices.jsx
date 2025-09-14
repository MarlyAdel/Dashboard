import React from 'react'
import { Box } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from './data';
import Header from '../../Components/Header';



export default function Invoices() {
  return (
    <>
      <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
        <Header title={"Invoices"} subTitle={"List of Invoices Balances"}/>
        <DataGrid
        checkboxSelection
          rows={rows}
          columns={columns}
        />
      </Box>
    </>
  );
}
