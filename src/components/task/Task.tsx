import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import TaskHeader from './_taskHeader';
import TaskDescription from './_taskDescription';
import TaskFooter from './_taskFooter';
import { ITask } from './interfaces/ITask';
import { Status } from '../createTaskForm/enums/status';
import { Priority } from '../createTaskForm/enums/priority';
import ProtoTypes from 'prop-types';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';

const Task = (props: ITask) => {
  const {
    title = 'Task Title',
    date = new Date(),
    description = 'Task Description',
    priority = Priority.medium,
    status = Status.todo,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        borderRadius: '8px',
        backgroundColor: 'background.paper',
        border: '3px solid',
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter
        onClick={onClick}
        onStatusChange={onStatusChange}
      />
    </Box>
  );
};

Task.propTypes = {
  title: ProtoTypes.string,
  date: ProtoTypes.instanceOf(Date),
  description: ProtoTypes.string,
  priority: ProtoTypes.string,
  status: ProtoTypes.string,
  onStatusChange: ProtoTypes.func,
  onClick: ProtoTypes.func,
};

export default Task;
