import React, { FC, ReactElement } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { format } from 'date-fns';
import TaskCounter from '../taskCounter/TaskCounter';
import Task from '../task/Task';

export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box px={4} mb={8}>
        <Typography variant="h6">
          Status of your task as at
          {` ${format(new Date(), 'PPPP')}`}
        </Typography>
      </Box>
      <Grid
        container
        display="flex"
        justifyContent="center"
        spacing={4}
      >
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
          md={8}
          xs={10}
        >
          <Task />
          <Task />
          <Task />
        </Grid>
      </Grid>
    </Grid>
  );
};
