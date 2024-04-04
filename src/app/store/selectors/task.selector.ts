import { createSelector } from '@ngrx/store';
import { TasksState } from '../reducers/task.reducer';
import { AppState } from 'src/app/app.state';

export const selectTasks = (state: AppState) => state.tasks;
export const selectAllTasks = createSelector(
  selectTasks,
  (state: TasksState) => state.tasks
);
