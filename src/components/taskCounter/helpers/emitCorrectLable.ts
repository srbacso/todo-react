import { TaskCounterStatusType } from '../Interfaces/ITaskCounter';
import { Status } from '../../createTaskForm/enums/status';

export const emitCorrectLabel = (
  status: TaskCounterStatusType,
): string => {
  switch (status) {
    case Status.todo:
      return "Todo's";
    case Status.inProgress:
      return 'In progress';
    case Status.completed:
      return 'Completed';
    default:
      return 'To do';
  }
};
