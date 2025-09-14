import React from 'react'
import { ResponsivePie } from "@nivo/pie";
import { data } from "./data";
import { Box, useTheme } from "@mui/material";

export default function Pie({isDashboard = false}) {

    const theme = useTheme();

  return (
    <>
      <Box sx={{ height: isDashboard ? "250px" : "80vh" }}>
        <ResponsivePie
          data={data}
          margin={
            isDashboard
              ? { top: 20, right: 0, bottom: 20, left: 0 }
              : { top: 40, right: 80, bottom: 80, left: 80 }
          }
          innerRadius={isDashboard ? 0.8 : 0.5}
          padAngle={0.6}
          cornerRadius={2}
          activeOuterRadiusOffset={8}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={theme.palette.text.primary}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={data.color}
          arcLabelsSkipAngle={10}
          enableArcLabels={isDashboard ? false : true}
          enableArcLinkLabels={isDashboard ? false : true}
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
          arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
          legends={
            isDashboard
              ? []
              : [
                  {
                    anchor: "bottom",
                    direction: "row",
                    translateY: 56,
                    itemWidth: 100,
                    itemHeight: 18,
                    symbolShape: "circle",
                  },
                ]
          }
        />
      </Box>
    </>
  );
}
