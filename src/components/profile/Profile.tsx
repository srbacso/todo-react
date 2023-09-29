import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { StayPrimaryLandscape } from "@mui/icons-material";
import PropTypes from "prop-types";

interface IProfile {
  name?: string;
}

const Profile = (props: IProfile) => {
  const { name = "John" } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Avatar
        sx={{
          width: "96px",
          height: "96px",
          backgroundColor: "primary.main",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h4" color="text.primary">
          {name?.charAt(0)}
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        {`Welcome, ${name}`}
      </Typography>
      <Typography variant="body1" color="text.primary">
        This is your personal task manager.
      </Typography>
    </Box>
  );
};

// Profile.prototype = {
//   name: PropTypes.string,
// };

export default Profile;
