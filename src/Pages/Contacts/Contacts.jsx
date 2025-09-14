import React from 'react'
import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from './data';
import Header from '../../Components/Header';

export default function Contacts() {
  return (
    // DataGrid - Toolbar
    <>
      <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
        <Header title={"Contacts"} subTitle={"List of Contacts for Future Refrence"}/>
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </>
  );
}
