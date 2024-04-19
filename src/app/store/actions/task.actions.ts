import { Action, createAction, props } from '@ngrx/store';
import { Task } from 'src/app/models/task.model';
export enum TaskActionsTypes {
LOAD_TASK = "[Task] Load task",
LOAD_TASK_SUCCESS = "[Task] Load tasks Success",
LOAD_TASK_FAIL = "[Task] Load tasks Fail",
ADD_TASK = "[Task] Add task",
ADD_TASK_SUCCESS = "[Task] Add task Success",
ADD_TASK_FAIL = "[Task] Add task Fail",
DELETE_TASK = "[Task] Delete task",
DELETE_TASK_SUCCESS = "[Task] Delete task Success",
DELETE_TASK_FAIL = "[Task] Delete task Fail",
}
//Load tasks
export const loadtask = createAction(TaskActionsTypes.LOAD_TASK);
export const loadtasksuccess = createAction(TaskActionsTypes.LOAD_TASK_SUCCESS, props<{list: Task[]}>());
export const loadtaskfail = createAction(TaskActionsTypes.LOAD_TASK_FAIL, props<{errormessage: string}>());
//Add tasks
export const addtask = createAction(TaskActionsTypes.ADD_TASK, props<{inputdata: Task}>());
export const addtasksuccess = createAction(TaskActionsTypes.ADD_TASK_SUCCESS, props<{inputdata: Task}>());
export const addtaskfail = createAction(TaskActionsTypes.ADD_TASK_FAIL, props<{errormessage: string}>());
//Delete tasks
export const deletetask = createAction(TaskActionsTypes.DELETE_TASK, props<{id:number}>());
export const deletetasksuccess = createAction(TaskActionsTypes.DELETE_TASK_SUCCESS, props<{id: number}>());
export const deletetaskfail = createAction(TaskActionsTypes.DELETE_TASK_FAIL, props<{errormessage: string}>());

export const toggleTask = createAction(
      '[Tasks] Toggle Task',
      props<{ id: number }>()
);