import React from 'react'
import { Box, Paper, Stack, Typography, useTheme } from '@mui/material'
import { ResponsivePie } from "@nivo/pie";


export default function Card({ icon, title, subTitle, increase, data, scheme }) {

  const theme = useTheme()

  return (
    <>
      <Paper
        sx={{
          flexGrow: 1,
          minWidth: "333px",
          p: 1.5,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Stack direction={"column"} gap={2}>
          {icon}
          <Typography>{title}</Typography>
          <Typography>{subTitle}</Typography>
        </Stack>

        <Stack direction={"column"} alignItems={"center"}>
          <Box height={"80px"} width={"80px"}>
            <ResponsivePie
              data={data}
              margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
              innerRadius={0.7}
              padAngle={0.6}
              colors={{ scheme: scheme }}
              cornerRadius={2}
              activeOuterRadiusOffset={8}
              enableArcLabels={false}
              enableArcLinkLabels={false}
              theme={{
                text: {
                  fontSize: 11,
                  fill: "#333333",
                  outlineWidth: 0,
                  outlineColor: "#ffffff",
                },
                axis: {
                  domain: {
                    line: {
                      stroke: "#777777",
                      strokeWidth: 1,
                    },
                  },
                  legend: {
                    text: {
                      fontSize: 15,
                      fill: "#353d93ff",
                      outlineWidth: 0,
                      outlineColor: "#ffffff",
                    },
                  },
                  ticks: {
                    line: {
                      stroke: "#777777",
                      strokeWidth: 1,
                    },
                    text: {
                      fontSize: 11,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "#ffffff",
                    },
                  },
                },
                grid: {
                  line: {
                    stroke: "#dddddd",
                    strokeWidth: 1,
                  },
                },
                legends: {
                  title: {
                    text: {
                      fontSize: 11,
                      fill: "#333333",
                      outlineWidth: 0,
                      outlineColor: "#ffffff",
                    },
                  },
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "#ffffff",
                  },
                  ticks: {
                    line: {},
                    text: {
                      fontSize: 10,
                      fill: "#333333",
                      outlineWidth: 0,
                      outlineColor: "#ffffff",
                    },
                  },
                },
                annotations: {
                  text: {
                    fontSize: 13,
                    fill: "#333333",
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  link: {
                    stroke: "#000000",
                    strokeWidth: 1,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  outline: {
                    stroke: "#000000",
                    strokeWidth: 2,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  symbol: {
                    fill: "#000000",
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                },
                tooltip: {
                  wrapper: {},
                  container: {
                    background: "#ffffff",
                    color: "#333333",
                    fontSize: 12,
                  },
                  basic: {},
                  chip: {},
                  table: {},
                  tableCell: {},
                  tableCellValue: {},
                },
              }}
            />
          </Box>
          <Typography>{increase}</Typography>
        </Stack>
      </Paper>
    </>
  );
}
