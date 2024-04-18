import { createReducer, on } from '@ngrx/store';
import { Task } from 'src/app/models/task.model';
import {
  loadtasksuccess,
  loadtaskfail
} from '../actions/task.actions';
import { TaskState } from '../state/task.state';

// export interface TasksState {
//   tasks: Task[];
// }

// export const initialSate: TasksState = {
//   tasks: [
//     {
//       id: 1,
//       title: 'Laundry',
//       completed: false,
//       userId: 1,
//     },
//   ],
// };

export const TasksReducer = createReducer(
  TaskState,
  on(loadtasksuccess,(state,action)=> {
    return {
      ...state,
      list:[...action.list],
      errormessage:''
    }
  }),
  on(loadtaskfail,(state,action)=> {
    return {
      ...state,
      list:[],
      errormessage:action.errormessage
    }
  })
  // initialSate,
  // on(addTask, (state, { task }) => ({
  //   tasks: [...state.tasks, task],
  // })),
  // on(toggleTask, (state, { id }) => ({
  //   ...state,
  //   tasks: state.tasks.map((task) =>
  //     task.id === id ? { ...task, completed: !task.completed } : task
  //   ),
  // })),
  // on(removeTask, (state, { id }) => ({
  //   ...state,
  //   tasks: state.tasks.filter((task) => task.id !== id),
  // })),
  // on(loadAllTask, (state, { tasks: tasks }) => ({ ...state, tasks: tasks }))
);

export function TaskReducer( state:any, action:any){}
