import { Priority } from '../../createTaskForm/enums/priority';

export const renderPriorityBorderColor = (
  priority: string,
): string => {
  switch (priority) {
    case Priority.low:
      return 'grey.900';
    case Priority.medium:
      return 'info.light';
    case Priority.high:
      return 'error.light';
    default:
      return 'grey.900';
  }
};
