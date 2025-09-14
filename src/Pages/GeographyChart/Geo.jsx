import React from 'react'
import { ResponsiveChoropleth } from "@nivo/geo";
import { data } from "./data";
import { Box, useTheme } from "@mui/material";
import { geo } from "./world_countries";

export default function Geo({ isDashboard = false }) {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          height: isDashboard ? "400px" : "80vh",
          border: isDashboard
            ? null
            : `1px solid ${theme.palette.text.primary}`,
          borderRadius: "6px",
        }}
      >
        <ResponsiveChoropleth
          data={data}
          features={geo.features}
          projectionScale={isDashboard ? 70 : 150}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          domain={[0, 1000000]}
          colors="RdBu"
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          enableGraticule={false}
          graticuleLineColor="#dddddd"
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
                stroke: "#958f8fff",
                strokeWidth: 0,
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
          borderWidth={1}
          borderColor="#fff"
          legends={
            isDashboard
              ? []
              : [
                  {
                    anchor: "bottom-left",
                    direction: "column",
                    justify: true,
                    translateX: 15,
                    translateY: -30,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: "left-to-right",
                    itemTextColor: theme.palette.text.primary,
                    itemOpacity: 0.85,
                    symbolSize: 18,
                  },
                ]
          }
        />
      </Box>
    </>
  );
}
