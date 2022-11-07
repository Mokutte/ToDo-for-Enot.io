import React, { useContext, useEffect } from "react";
import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Task from "./Task";
import { MainContext } from "../context";

export default function DayTasks({ props }) {
  const { todayChecked } = useContext(MainContext);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => {
    setExpanded(!expanded) 
  }

  useEffect(() => {
    props.id === 1 && setExpanded(!expanded)
  },[todayChecked])

  return (
    <>
      <Box
        sx={{
          borderRadius: "25px",
          marginBottom: "32px",
        }}
      >
        <Accordion
        expanded={expanded}
        onChange={handleChange}
          sx={{
            color: "white",
            margin: "auto",
            borderRadius: "25px !important",
            boxShadow:
              "16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)",
            marginBottom: "10px",
            backgroundColor: "#282828",
          }}
        >
          <AccordionSummary
            
            expandIcon={
              <ExpandMoreIcon
                sx={{ borderRadius: "50%", backgroundColor: "#fff" }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              height: "79px",
              borderRadius: "25px",
            }}
          >
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                backgroundColor: "#A9A9A9",
                width: "5px",
                height: "40px",
                borderRadius: "3px",
              }}
            />
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "28px",
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "10px",
              }}
            >
              {props.day} Tasks
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {props.tasks &&
              props.tasks.map((tasksEl) => (
                <Task dayId={props.id} tasksEl={tasksEl} key={tasksEl.title} />
              ))}
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}
