import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TaskService } from 'src/app/services/task.service';
import * as TaskActions from '../actions/task.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private taskService: TaskService) {}
 
  _loadtasks= createEffect(()=>
  this.actions$.pipe(
    ofType(TaskActions.loadtask),
    exhaustMap((action)=>{
      return this.taskService.getTasks().pipe(
        map((data)=>{
          return TaskActions.loadtasksuccess({list:data})
        }),
        catchError((_error)=> of(TaskActions.loadtaskfail({errormessage: _error.message})))
      )
    })
  ))

  _addtask= createEffect(()=>
    this.actions$.pipe(
      ofType(TaskActions.addtask),
      exhaustMap((action)=>{
        return this.taskService.saveUpdateTask(action.inputdata).pipe(
          map((data)=>{
            return TaskActions.addtasksuccess({inputdata:data})
          }),
          catchError((_error)=> of(TaskActions.addtaskfail({errormessage: _error.message})))
        )
      })
    ))
 
  _deletetask= createEffect(()=>
    this.actions$.pipe(
      ofType(TaskActions.deletetask),
      exhaustMap((action)=>{
        return this.taskService.removeTasks(action.id).pipe(
          map((data)=>{
            return TaskActions.deletetasksuccess({id:data.id})
          }),
          catchError((_error)=> of(TaskActions.deletetaskfail({errormessage: _error.message})))
        )
      })
    ))
}
