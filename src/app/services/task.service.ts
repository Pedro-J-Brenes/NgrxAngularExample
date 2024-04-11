import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

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
    return this.http.post<Task>(`${this.apiUrl}/save`,task)
  }

  deleteTask(id: number): Observable<Task> {
    console.log("Entra en delete")
    return this.http.delete<Task>(`${this.apiUrl}/delete?=${id}`);
  }
}
