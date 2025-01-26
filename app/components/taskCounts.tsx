import React from "react";
import { TaskStats } from "../models/task";

const TaskCounts: React.FC<TaskStats> = ({ totalTasks, completedTasks }) => {
  return (
    <div className="flex justify-between">
      <h5 className="text-allTasks font-bold">
        Tasks
        <span className="w-6 h-6 rounded-full bg-counterText px-3 pb-0.5 text-center text-taskText ml-2">
          {totalTasks}
        </span>
      </h5>
      <h5 className="text-completedTasks font-bold">
        Completed
        <span className="w-6 h-6 rounded-full bg-counterText px-3 pb-0.5 text-center text-taskText ml-2">
          {totalTasks ? `${completedTasks} of ${totalTasks}` : 0}
        </span>
      </h5>
    </div>
  )
}

export default TaskCounts