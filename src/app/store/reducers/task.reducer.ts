import { createReducer, on } from '@ngrx/store';
import { Task } from 'src/app/models/task.model';
import {
  addTask,
  loadAllTask,
  loadAllTaskFailure,
  loadAllTaskSuccess,
  removeTask,
  toggleTask,
} from '../actions/task.actions';

export interface TasksState {
  tasks: Task[];
  error?: string;
}

export const initialSate: TasksState = {
  tasks: [
    {
      id: '1',
      title: 'Laundry',
      completed: false,
      userId: 1,
    },
  ],
};

export const TasksReducer = createReducer(
  initialSate,
  on(addTask, (state, { task }) => ({
    tasks: [task, ...state.tasks],
  })),
  on(toggleTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ),
  })),
  on(removeTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== id),
  })),
  on(loadAllTask, (state) => state),
  on(loadAllTaskSuccess, (state, { tasks: tasks }) => ({
    ...state,
    tasks,
  })),
  on(loadAllTaskFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
