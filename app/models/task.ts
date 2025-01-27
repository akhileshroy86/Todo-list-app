export interface Task {
  _id: string;
  title: string;
  color: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TaskStats {
  totalTasks: number;
  completedTasks: number;
}
