import { Action, createAction, props } from '@ngrx/store';
import { Task } from 'src/app/models/task.model';
export enum TaskActionsTypes {
LOAD_TASK = "[Task] Load task",
LOAD_TASK_SUCCESS = "[Task] Load tasks Success",
LOAD_TASK_FAIL = "[Task] Load tasks Fail"
}

export const loadtask = createAction(TaskActionsTypes.LOAD_TASK);
export const loadtasksuccess = createAction(TaskActionsTypes.LOAD_TASK_SUCCESS, props<{list: Task[]}>());
export const loadtaskfail = createAction(TaskActionsTypes.LOAD_TASK_FAIL, props<{errormessage: string}>());


// export const addTask = createAction(
//   '[Tasks] Add Task',
//   props<{ task: Task }>()
// );

// export const toggleTask = createAction(
//   '[Tasks] Toggle Task',
//   props<{ id: number }>()
// );

// export const removeTask = createAction(
//   '[Tasks] Remove Task',
//   props<{id: number}>()
// );

// export const loadAllTask = createAction(
//   '[Tasks] Load All Tasks',
//   props<{ tasks: Task[] }>()
// );
