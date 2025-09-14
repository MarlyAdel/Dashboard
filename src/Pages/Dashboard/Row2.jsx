import { Box, IconButton, Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import Line from '../LineChart/Line';
import { DownloadOutlined } from '@mui/icons-material'
import { Transactions } from './data';


export default function Row2() {

 const theme = useTheme()

  return (
    <>
      <Stack direction={"row"} flexWrap={"wrap"} mt={3} gap={1.5}>
        <Paper
          sx={{
            maxWidth: 900,
            flex: "1 1 60%",
            height: "360px",
          }}
        >
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography
                color={theme.palette.success.main}
                mb={1}
                mt={2}
                ml={4}
                variant="h6"
              >
                Revenue Generated
              </Typography>
              <Typography ml={4}>$59.687.33</Typography>
            </Box>
            <Box sx={{ mr: 4 }}>
              <IconButton>
                <DownloadOutlined />
              </IconButton>
            </Box>
          </Stack>

          <Line isDashboard={true} />
        </Paper>

        <Box
          sx={{
            overflow: "auto",
            maxHeight: "360px",
            flex: "1 1 35%",
            minWidth: "250px",
          }}
        >
          <Paper>
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={"bold"}
              p={1.2}
              variant="h6"
            >
              Recent Transactions
            </Typography>
          </Paper>

          {Transactions.map((transaction) => {
              return (
                <Paper
                  sx={{
                    
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mr:"5px"
                  }}
                >
                  <Box p={1.2}>
                    <Typography fontWeight="600">{transaction.txId}</Typography>
                    <Typography>{transaction.user}</Typography>
                  </Box>
                  <Typography>{transaction.date}</Typography>
                  <Typography
                    borderRadius={1.4}
                    p={1}
                    bgcolor={theme.palette.error.main}
                    color={theme.palette.getContrastText(
                      theme.palette.error.main
                    )}
                  >
                    ${transaction.cost}
                  </Typography>
                </Paper>
              );
          })}

          
        </Box>
      </Stack>
    </>
  );
}
