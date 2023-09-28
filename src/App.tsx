import React from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { customTheme } from "./theme/customTheme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
