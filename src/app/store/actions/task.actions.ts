import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/models/task.model';

export const addTask = createAction(
  '[Tasks] Add Task',
  props<{ task: Task }>()
);

export const toggleTask = createAction(
  '[Tasks] Toggle Task',
  props<{ id: string }>()
);

export const removeTask = createAction(
  '[Tasks] Remove Task',
  props<{ id: string }>()
);

export const loadAllTask = createAction('[Tasks] Load All Tasks');
export const loadAllTaskSuccess = createAction(
  '[Tasks] Load All Tasks Success',
  props<{ tasks: Task[] }>()
);
export const loadAllTaskFailure = createAction(
  '[Tasks] Load All Tasks Failure',
  props<{ error: string }>()
);
