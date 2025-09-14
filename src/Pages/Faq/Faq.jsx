import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack, useTheme } from "@mui/material";
import Header from "../../Components/Header";

export default function Faq() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const theme = useTheme();

  const accordionStyle = {
    backgroundColor: theme.palette.mode === "light" ? "#f5f5f5" : "inherit", // light gray only in light mode
    boxShadow:
      theme.palette.mode === "light"
        ? "0px 2px 8px rgba(0, 0, 0, 0.1)"
        : "none", // shadow only in light mode
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: theme.palette.mode === "light" ? "#eeeeee" : "inherit", // hover effect only in light mode
    },
    
  };

  return (
    <>
     <Header title={"FAQ"} subTitle={"Frequently Asked Questions Page"}/>

      <Stack direction={"column"} gap={2} sx={{ paddingTop: "10px" }}>
        <Accordion
          sx={accordionStyle}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              How do I reset my password?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Go to the login page and click <strong>“Forgot Password”</strong>.
              Enter your registered email and follow the instructions to reset
              your password.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={accordionStyle}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              Can I change my username or email?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Usernames cannot be changed once created. However, you can update
              your email address anytime from your{" "}
              <strong>Profile Settings</strong>.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={accordionStyle}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              How do I add a new team member?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Go to <strong>Manage Team</strong> and click{" "}
              <strong>“Add Member”</strong>. Fill in the member details, assign
              a role, and click save.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={accordionStyle}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              How can I use the calendar?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The <strong>Calendar</strong> lets you schedule and manage events.
              Click on a date to add events, drag to reschedule, and click an
              event to edit or delete.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={accordionStyle}
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              How do I manage invoices?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Navigate to <strong>Invoices</strong> to view balances, add new
              invoices, or download them in PDF/Excel format for record keeping.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={accordionStyle}
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              Can I export reports?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes. Go to the <strong>Reports</strong> section, select a date
              range, and click <strong>“Export”</strong> to download reports in
              PDF or Excel.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={accordionStyle}
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              How do I switch between dark and light mode?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can switch themes from the top-right corner of the dashboard.
              The setting will be saved for your next visit.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={accordionStyle}
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              Who do I contact for support?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you need help, reach out via the <strong>Help Center</strong>{" "}
              in the sidebar or email us at <strong>support@example.com</strong>
              .
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={accordionStyle}
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              How do I manage my notifications?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Go to <strong>Notification Settings</strong> to enable or disable
              email, SMS, and in-app alerts according to your preferences.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </>
  );
}
