import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { rows } from './data';
import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Header from '../../Components/Header';



export default function Team() {

  const theme = useTheme()


  const columns = [
  { field: "id", headerName: "ID" , width:50 , align: "center" , headerAlign:"center"},
  { field: "name", headerName: "Name" , align: "center" , headerAlign:"center"},
  { field: "email", headerName: "Email" , flex:1 , align: "center" , headerAlign:"center"},
  { field: "age", headerName: "Age" , align: "center" , headerAlign:"center"},
  { field: "phone", headerName: "Phone" , flex:1 , align: "center" , headerAlign:"center"},
  { field: "access", headerName: "Access" , flex:1 , align: "center" , headerAlign:"center", renderCell: ({row: {access} }) => {
    return (
      <>
       

        <Box
          sx={{
            p: "5px",
            width: "99px",
            borderRadius: "3px",
            textAlign: "center",
            mx: "auto",
            mt: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor:
              access === "Admin"
                ? theme.palette.primary.dark
                : access === "User"
                ? theme.palette.secondary.dark
                : access === "Editor"
                ? theme.palette.success.dark
                : "#7a2222ff",
          }}
        >
          {access === "Admin" && (
            <AdminPanelSettingsOutlinedIcon
              fontSize="small"
              sx={{ color: "white" }}
            />
          )}
          {access === "Manager" && (
            <LockOpenOutlinedIcon fontSize="small" sx={{ color: "white" }} />
          )}
          {access === "User" && (
            <SecurityOutlinedIcon fontSize="small" sx={{ color: "white" }} />
          )}
          {access === "Editor" && (
            <BorderColorOutlinedIcon fontSize="small" sx={{ color: "white" }} />
          )}
          <Typography sx={{ fontSize: "13px", color: "white" }}>
            {" "}
            {access}{" "}
          </Typography>
        </Box>
      </>
    );
  }},
];
 


  return (
    <>
      <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
        <Header title={"Team"} subTitle={"Managing the Team Members"} />
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </>
  );
}
