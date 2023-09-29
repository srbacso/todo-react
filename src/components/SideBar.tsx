import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Profile from "./profile/Profile";
import CreateTaskForm from "./createTaskForm/CreateTaskForm";

function SideBar() {
  return (
    <Grid2
      md={4}
      sx={{
        height: "100vh",
        position: "fixed",
        right: 0,
        top: 0,
        width: "100%",
        backgroundColor: "background.paper",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Profile name="Sarah" />
      <CreateTaskForm />
    </Grid2>
  );
}

export default SideBar;
