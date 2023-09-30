import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { ITaskCounter } from './Interfaces/ITaskCounter';
import { Status } from '../createTaskForm/enums/status';
import { emitCorrectBorderColor } from './helpers/emitCorrectBorderColor';
import { emitCorrectLabel } from './helpers/emitCorrectLable';
import PropTypes from 'prop-types';

const TaskCounter: FC<ITaskCounter> = (
  props,
): ReactElement => {
  const { status = Status.completed, count = 0 } = props;

  const currentBorderColor = 'warning.light';
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            bgcolor: 'primary.main',
            border: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: `${emitCorrectBorderColor(
              status,
            )}`,
          }}
        >
          <Typography color="white" variant="h4">
            {count}
          </Typography>
        </Avatar>
        <Typography
          color="white"
          fontSize="20px"
          fontWeight="bold"
          variant="h5"
        >
          {emitCorrectLabel(status)}
        </Typography>
      </Box>
    </>
  );
};

TaskCounter.propTypes = {
  status: PropTypes.oneOf([
    Status.todo,
    Status.inProgress,
    Status.completed,
  ]),
  count: PropTypes.number.isRequired,
};

export default TaskCounter;
