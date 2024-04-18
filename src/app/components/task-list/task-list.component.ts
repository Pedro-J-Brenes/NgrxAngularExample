import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { loadtask } from 'src/app/store/actions/task.actions';
import { gettasklist } from 'src/app/store/selector/task.selector';
// import {
//   addTask,
//   loadAllTask,
//   removeTask,
//   toggleTask,
// } from 'src/app/store/actions/task.actions';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="task-container">
      <form class="task-form" (submit)="addTask()">
        <input
          name="newTaskTitle"
          placeholder="Add new task"
          [(ngModel)]="newTaskTitle"
          type="text"
        />
        <button type="submit">Submit</button>
      </form>

      <ul class="task-list">
        @for(task of (tasks$ | async); track task.id) {
        <li>
          <input
            type="checkbox"
            [checked]="task.completed"
            (change)="toggleTask(task.id)"
          />
          <span [ngClass]="{ completed: task.completed }">{{
            task.title
          }}</span>
          <button (click)="removeTask(task.id)" class="remove-button">
            Delete
          </button>
        </li>
        }
      </ul>
    </div>
  `,
  /* templateUrl: './task-list.component.html', */
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]> | undefined;
  newTaskTitle: string = '';

  constructor(private store: Store<{ tasks: { tasks: Task[] } }>) {}

  ngOnInit(): void {
    this.store.dispatch(loadtask());
    this.tasks$ =this.store.select(gettasklist);
  //   this.store.dispatch(loadAllTask({ tasks: [] }));
  //   this.tasks$ = this.store.select('tasks');
  //  this.store.select('tasks').subscribe();
  }

  addTask(): void {
    // if (this.newTaskTitle.trim() === '') {
    //   return;
    // }
    // let id: number = 0;
    // this.tasks$?.subscribe(t=> id = t.tasks.length);
   
    // const task: Task = {
    //   id:id,
    //   title: this.newTaskTitle,
    //   completed: false,
    //   userId: 1,
    // };
    // this.store.dispatch(addTask({ task: task }));    
  }

  toggleTask(id: number): void {
    // this.store.dispatch(toggleTask({ id }));
  }

  removeTask(id: number): void {
    // this.store.dispatch(removeTask({ id }));
  }
}
