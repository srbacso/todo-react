import React, { FC, ReactElement } from 'react';
import { ITaskFooter } from './interfaces/ITaskFooter';
import PropTypes from 'prop-types';

import {
  Box,
  Button,
  Switch,
  FormControlLabel,
} from '@mui/material';

const TaskFooter: FC<ITaskFooter> = (
  props,
): ReactElement => {
  const {
    onStatusChange = (e) => {
      console.log(e);
    },
    onClick = (e) => {
      console.log(e);
    },
  } = props;

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={2}
    >
      <FormControlLabel
        label="In Progress"
        control={
          <Switch
            onChange={(e) => onStatusChange(e)}
            color="warning"
          />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: 'white' }}
        onClick={(e) => onClick(e)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default TaskFooter;
