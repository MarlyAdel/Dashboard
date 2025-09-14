import {  Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import Pie from "../PieChart/Pie";
import Bar from "../BarChart/Bar";
import Geo from "../GeographyChart/Geo";

export default function Row3() {
  const theme = useTheme();

  return (
    <>
      <Stack direction={"row"} flexWrap={"wrap"} mt={"20px"} gap={1.5}>
        <Paper sx={{ flex: "1 1 30%", minWidth: { xs: "100%", md: "300px" } }}>
          <Typography
            color={theme.palette.secondary.main}
            sx={{ padding: "30px 30px 0 30px" }}
            variant="h6"
            fontWeight="600"
          >
            Compaign
          </Typography>
          <Pie isDashboard={true} />

          <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
            {" "}
            $48,690 revenue genrated
          </Typography>
          <Typography variant="body2" px={0.7} pb={3} align="center">
            Includes extra misc expenditures and costs
          </Typography>
        </Paper>

        <Paper sx={{ flex: "1 1 30%", minWidth: { xs: "100%", md: "300px" } }}>
          <Typography
            color={theme.palette.secondary.main}
            sx={{ padding: "30px 30px 40px 30px" }}
            variant="h6"
            fontWeight="600"
          >
            Sales Quantity
          </Typography>
          <Bar isDashboard={true} />
        </Paper>

        <Paper sx={{ flex: "1 1 30%", minWidth: { xs: "100%", md: "300px" } }}>
          
          <Geo isDashboard={true} />
        </Paper>
      </Stack>
    </>
  );
}
