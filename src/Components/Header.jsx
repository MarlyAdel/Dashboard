import { Box, Typography, useTheme } from '@mui/material';
import React from 'react'

export default function Header({ title, subTitle, isDashboard = false}) {
  const theme = useTheme();

  return (
    <>
      <Box mb={isDashboard ? 2 : 4}>
        <Typography
          variant="h5"
          textTransform={"uppercase"}
          color={theme.palette.primary.dark}
          fontWeight={800}
        >
          {title}
        </Typography>
        <Typography variant="body1">{subTitle}</Typography>
      </Box>
    </>
  );
}
