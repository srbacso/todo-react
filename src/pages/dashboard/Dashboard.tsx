import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SideBar from "../../components/SideBar";
import TaskArea from "../../components/TaskArea";

function Dashboard() {
  return (
    <Grid2 container minHeight="100vh" p={0} m={0}>
      <TaskArea />
      <SideBar />
    </Grid2>
  );
}

export default Dashboard;
