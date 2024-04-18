import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TaskModel } from "src/app/models/task.model";

const gettaskstate = createFeatureSelector<TaskModel>('tasks');
export const gettasklist= createSelector(gettaskstate,(state)=>{
    return state.list;
})