import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TaskService } from 'src/app/services/task.service';
import * as TaskActions from '../actions/task.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private taskService: TaskService) {}
 
  _loadalltasks= createEffect(()=>
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
  // loadAlltasks$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(TaskActions.),
  //     exhaustMap(() =>
  //       this.taskService
  //         .getTasks()
  //         .pipe(map((tasks: Task[]) => TaskActions.loadAllTask({ tasks })))
  //     )
  //   )
  // );
  // addTask$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(TaskActions.addTask),
  //     exhaustMap((tasks) =>
  //       this.taskService
  //         .saveUpdateTask(tasks.task)
  //         .pipe(map((task: Task) => TaskActions.addTask({ task })))
  //     )
  //   ));
    
  //   removeTask$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(TaskActions.removeTask),
  //     exhaustMap((task) =>
  //       this.taskService
  //         .removeTasks(task.id)
  //         .pipe(map((task: Task) => TaskActions.removeTask({id:task.id!})))
  //     )
  //   ));
}
