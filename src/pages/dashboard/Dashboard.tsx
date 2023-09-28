import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function Dashboard() {
  return (
    <Grid2 container minHeight="100vh" p={0} m={0}>
      <Grid2 md={8} px={4}>
        <h1>Content Area</h1>
      </Grid2>
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
        <h1>Sidebar Area</h1>
      </Grid2>
    </Grid2>
  );
}

export default Dashboard;
