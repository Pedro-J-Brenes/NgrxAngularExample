export interface Task extends TaskDTO {
  id: number;
  
}

export interface TaskDTO {
  title: string;
  completed: boolean;
  userId: number;
}

export interface TaskModel {
  list: Task[],
  taskObject: Task,
  errormessage: string;
}
