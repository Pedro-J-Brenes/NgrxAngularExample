import { createReducer, on } from '@ngrx/store';
import {
  loadtasksuccess,
  loadtaskfail,
  addtasksuccess,
  addtaskfail,
  toggleTask,
  deletetasksuccess,
  deletetaskfail
} from '../actions/task.actions';
import { TaskState } from '../state/task.state';


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
  }),
  on(addtasksuccess,(state,action)=>{
    return{
      ...state,
      list:[...state.list,action.inputdata],
      errormessage:''
    }
  }),
  on(addtaskfail,(state,action)=>{
    return{
      ...state,
      list:[...state.list],
      errormessage:action.errormessage
    }
  }),
  on(deletetasksuccess,(state, action)=>{
    return {
      ...state,
      list:[...state.list.filter(t=> t.id !== action.id),],
      errormessage:''
    }
  }),
  on(deletetaskfail,(state, action)=>{
    return {
      ...state,
      list:[...state.list],
      errormessage:action.errormessage
    }
  }),
  // initialSate,
  // on(addTask, (state, { task }) => ({
  //   tasks: [...state.tasks, task],
  // })),
  on(toggleTask, (state, { id }) => ({
    ...state,
    tasks: state.list.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ),
  })),
  // on(removeTask, (state, { id }) => ({
  //   ...state,
  //   tasks: state.tasks.filter((task) => task.id !== id),
  // })),
  // on(loadAllTask, (state, { tasks: tasks }) => ({ ...state, tasks: tasks }))
);

export function TaskReducer( state:any, action:any){}
