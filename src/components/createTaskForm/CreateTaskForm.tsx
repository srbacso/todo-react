import React from "react";
import { Box, Typography } from "@mui/material";

const CreateTaskForm = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} variant="h6" component="h2">
        Create Task Form
      </Typography>
    </Box>
  );
};

export default CreateTaskForm;
