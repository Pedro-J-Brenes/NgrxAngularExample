import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Task, TaskDTO } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl: string = '/api/task';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/tasks`);
  }

  saveUpdateTask(task: Task): Observable<Task> {
    const taskDto : TaskDTO = {
      title:task.title,
      completed: task.completed,
      userId: task.userId
    }
    return this.http.post<Task>(`${this.apiUrl}/save`,taskDto);
  }

  removeTasks(id: number): Observable<Task> {
    return this.http.delete<Task>(`${this.apiUrl}/delete?id=${id}`);
  }
}
