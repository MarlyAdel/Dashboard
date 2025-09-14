import React from "react";
import { Stack, useTheme } from "@mui/material";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./data";

export default function Row1() {

  const theme = useTheme()

  return (
    <>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={1}
        marginTop={"10px"}
        justifyContent={{ xs: "center", sm: "space-between" }}
      >
        <Card
          icon={
            <EmailIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          title={"12,386"}
          subTitle={"Emails Sent"}
          data={data1}
          increase={"+14%"}
          scheme={"accent"}
        />
        <Card
          icon={
            <PointOfSaleIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          title={"44,870"}
          subTitle={"Sales Obtained"}
          data={data2}
          increase={"+7%"}
          scheme={"category10"}
        />
        <Card
          icon={
            <PersonAddIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          title={"5,630"}
          subTitle={"New Clients"}
          data={data3}
          increase={"+55%"}
          scheme={"paired"}
        />
        <Card
          icon={
            <TrafficIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          title={"57,056"}
          subTitle={"Traffic Received"}
          data={data4}
          increase={"+22%"}
          scheme={"nivo"}
        />
      </Stack>
    </>
  );
}
