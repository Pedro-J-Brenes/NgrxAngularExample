import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TaskService } from 'src/app/services/task.service';
import * as TaskActions from '../actions/task.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Task } from 'src/app/models/task.model';

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private taskService: TaskService) {}

  loadAlltasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadAllTask),
      exhaustMap(() =>
        this.taskService.getTasks().pipe(
          map((tasks: Task[]) => TaskActions.loadAllTaskSuccess({ tasks })),
          catchError((error: any) =>
            of(TaskActions.loadAllTaskFailure({ error }))
          )
        )
      )
    )
  );
}
