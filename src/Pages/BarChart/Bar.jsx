import React from 'react'
import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from '@mui/material';
import { data } from './data';

export default function Bar({ isDashboard = false }) {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ height: isDashboard ? "250px" : "80vh" }}>
        <ResponsiveBar
          data={data}
          indexBy="year"
          labelSkipWidth={12}
          labelSkipHeight={12}
          keys={["Egypt", "Spain", "France", "Germany"]}
          colors={{ scheme: "paired" }}
          legends={
            isDashboard ? [] :
            [
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 4,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
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
          axisBottom={{ legend: isDashboard ? null :   "Year", legendOffset: 42, tickSize: 10 }}
          axisLeft={{ legend: isDashboard ? null : "Minmum Wage / Month", legendOffset: -50 }}
          margin={isDashboard ? { top: 10, right: 40, bottom: 40, left: 50 } : { top: 50, right: 130, bottom: 50, left: 60 }}
        />
      </Box>
    </>
  );
}
