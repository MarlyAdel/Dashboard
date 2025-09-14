import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

export default function NotFound() {

  const theme = useTheme()

  return (
    <>
      <Box>
        <Typography fontWeight={"bold"} align='center' mt={5} color={theme.palette.error.main} variant="h5">
          There is no Design yet !
          <br />
          <br />
          Please try again later...
        </Typography>
      </Box>
    </>
  );
}
