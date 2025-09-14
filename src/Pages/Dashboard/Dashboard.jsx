import React from 'react'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import { Box, Button, Stack } from '@mui/material'
import { DownloadOutlined } from '@mui/icons-material'
import Header from '../../Components/Header'

export default function Dashboard() {


  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Header
          title={"Dashboard"}
          subTitle={"Welcome to your dashboard"}
          isDashboard={true}
        />

        <Box sx={{ textAlign: "right" }}>
          <Button
            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
            variant="contained"
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>

      <Row1 />

      <Row2 />

      <Row3 />
    </>
  );
}
