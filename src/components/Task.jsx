import { React, useContext } from "react";
import { Typography, Box, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { MainContext } from "../context";

export default function Task({ tasksEl, dayId }) {
  const { dayTasks, setDayTasks } = useContext(MainContext);

  const heandleChange = () => {

    const newArrayTasks = dayTasks[dayId - 1].tasks.map((el) => {
      if (el.id === tasksEl.id) {
        return { ...el, complete: !el.complete };
      } else {
        return el;
      }
    });

    const newArray = dayTasks.map((el) => {
      if (el.id === dayId) {
        return { ...el, tasks: newArrayTasks };
      } else {
        return el;
      }
    });
    setDayTasks(newArray);
  };

  const MaterialUISwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
      checked={tasksEl.complete}
      onChange={() => heandleChange()}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transform: "translateX(0px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(16px)",
        "& .MuiSwitch-thumb:before": {
          content: "''",
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url('data:image/svg+xml;utf8,<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="${encodeURIComponent(
            "#A9A9A9"
          )}" d="M14.3938 1.1937L6.47953 11.0892L0.262512 5.90778L1.43553 4.50016L6.2156 8.48293L12.9641 0.0500031L14.3938 1.1937Z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          border: 0,
          backgroundColor: "#10C200",
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: "#fff",
      width: 22,
      height: 22,
      boxSizing: "border-box",

      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path fill="${encodeURIComponent(
          "#A9A9A9"
        )}" d="M11.8976 13.1218L6.61086 7.82669L1.32411 13.1218L0.143738 11.9414L5.4388 6.65462L0.143738 1.36787L1.32411 0.1875L6.61086 5.48256L11.8976 0.195813L13.0697 1.36787L7.78293 6.65462L13.0697 11.9414L11.8976 13.1218Z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#366EFF",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "20px",
        }}
      >
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            backgroundColor: `${tasksEl.color}`,
            width: "5px",
            height: "40px",
            borderRadius: "3px",
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "28px",
              marginY: "auto",
              marginLeft: "10px",
              textDecorationLine: tasksEl.complete ? "line-through" : "none",
            }}
          >
            {tasksEl.title}
          </Typography>
          <Typography
            sx={{
              color: "rgba(255, 255, 255, 0.6)",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "17px",
              marginY: "auto",
              marginLeft: "10px",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              maxWidth: "210px",
            }}
          >
            {tasksEl.desk}
          </Typography>
        </Box>
        <MaterialUISwitch sx={{ marginLeft: "auto", marginY: "auto" }} />
      </Box>
    </>
  );
}
