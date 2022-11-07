import "./App.css";
import { ReactComponent as Gear } from "./img/gear.svg";
import { ReactComponent as CheckBox } from "./img/checkbox.svg";
import {
  Container,
  Typography,
  Box,
  IconButton,
  Checkbox,
  Popover,
  Switch,
} from "@mui/material";
import React, { useState } from "react";
import { MainContext } from "./context";
import DayTasks from "./components/DayTasks";
import News from "./components/News";
import { styled } from "@mui/material/styles";

function App() {
  const [dayTasks, setDayTasks] = useState([
    {
      id: 1,
      day: "09/10",
      tasks: [
        {
          id: 1,
          title: "Visit David",
          desk: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          color: "#FF0000",
          complete: false,
        },
        {
          id: 2,
          title: "Goceries For Dinner",
          desk: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          color: "#366EFF",
          complete: false,
        },
        {
          id: 3,
          title: "Fix Dad’s iPad",
          desk: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          color: "#FFEB33",
          complete: false,
        },
      ],
    },
    {
      id: 2,
      day: "10/10",
      tasks: [
        {
          id: 1,
          title: "Visit David",
          desk: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          color: "#FF0000",
          complete: false,
        },
        {
          id: 2,
          title: "Goceries For Dinner",
          desk: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          color: "#366EFF",
          complete: false,
        },
        {
          id: 3,
          title: "Fix Dad’s iPad",
          desk: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          color: "#FFEB33",
          complete: false,
        },
      ],
    },
    {
      id: 3,
      day: "11/10",
      tasks: [
        {
          id: 1,
          title: "Visit David",
          desk: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          color: "#FF0000",
          complete: false,
        },
        {
          id: 2,
          title: "Goceries For Dinner",
          desk: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          color: "#366EFF",
          complete: false,
        },
        {
          id: 3,
          title: "Fix Dad’s iPad",
          desk: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          color: "#FFEB33",
          complete: false,
        },
      ],
    },
    {
      id: 4,
      day: "12/10",
      tasks: [
        {
          id: 1,
          title: "Visit David",
          desk: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          color: "#FF0000",
          complete: false,
        },
        {
          id: 2,
          title: "Goceries For Dinner",
          desk: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          color: "#366EFF",
          complete: false,
        },
        {
          id: 3,
          title: "Fix Dad’s iPad",
          desk: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          color: "#FFEB33",
          complete: false,
        },
      ],
    },
    {
      id: 5,
      day: "13/10",
      tasks: [
        {
          id: 1,
          title: "Visit David",
          desk: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          color: "#FF0000",
          complete: false,
        },
        {
          id: 2,
          title: "Goceries For Dinner",
          desk: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          color: "#366EFF",
          complete: false,
        },
        {
          id: 3,
          title: "Fix Dad’s iPad",
          desk: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          color: "#FFEB33",
          complete: false,
        },
      ],
    },
  ]);
  const [todayChecked, setTodayChecked] = useState(true);
  const [settingIsOpen, setSettingIsOpen] = useState(false);
  const [viewNews, setViewNews] = useState(true);

  const MaterialUISwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
      checked={viewNews}
      onChange={() => setViewNews(!viewNews)}
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

  const handleClick = (event) => {
    setSettingIsOpen(event.currentTarget);
  };

  const handleClose = () => {
    setSettingIsOpen(null);
  };

  const open = Boolean(settingIsOpen);
  const id = open ? "simple-popover" : undefined;

  return (
    <MainContext.Provider value={{ dayTasks, setDayTasks, todayChecked, viewNews, setViewNews }}>
      <div className="App">
        <Box
          sx={{
            width: "390px",
            height: "90%",
            overflow: "scroll",
            "&::-webkit-scrollbar": { display: "none" },
            backgroundColor: "#222222",
            borderRadius: "20px",
            marginX: "auto",
          }}
        >
          <Box
            sx={{
              whiteSpace: "nowrap",
              position: "absolute",
              overflow: "hidden",
              width: "390px",
              backgroundColor: "#1aa05d",
              zIndex: "1",
              top: "90.3%",
              borderRadius: "0px 0px 30px 30px",
            }}
          >
            {viewNews && <News />}
          </Box>
          <Container
            className="container"
            sx={{
              color: "white",
              padding: "13px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "36px",
                  fontWeight: "800",
                  lineHeight: "43px",
                }}
              >
                To Do
              </Typography>
              <IconButton
                aria-describedby={id}
                aria-label="close"
                onClick={handleClick}
              >
                <Gear />
              </IconButton>
              <Popover
                id={id}
                open={open}
                anchorEl={settingIsOpen}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  <Typography sx={{ mr: "50px" }}>News</Typography>
                  <MaterialUISwitch
                    sx={{ marginLeft: "auto", marginY: "auto" }}
                  />
                </Box>
              </Popover>
            </Box>
            <Box
              sx={{
                borderRadius: "25px",
                marginBottom: "10px",
                display: "flex",
              }}
            >
              <Checkbox
                defaultChecked
                checked={todayChecked}
                onChange={() => setTodayChecked(!todayChecked)}
                checkedIcon={<CheckBox />}
                sx={{
                  minWidth: "43px",
                  minHeight: "43px",
                  color: "#fff",
                  "&.Mui-checked": {
                    color: "#fff",
                  },
                }}
              />
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "24px",
                  lineHeight: "28px",
                  marginY: "auto",
                }}
              >
                Today Tasks:
              </Typography>
            </Box>
            {dayTasks.map((el) => (
              <DayTasks props={el} key={el.id} />
            ))}
          </Container>
        </Box>
      </div>
    </MainContext.Provider>
  );
}

export default App;
