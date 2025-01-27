import { dark } from "@mui/material/styles/createPalette";
import axiosInstance from "../lib/axiosInstance";
import { ApiResponse } from "../models/apiResponse";
import { Task } from "../models/task";
import axios from "axios";

const apiUrl = "/tasks";

export const createTask = async (
  task: Partial<Task>
): Promise<ApiResponse<Task>> => {
  try {
    console.log(task)
    const response = await axios.post("/api/tasks", task);
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

export const getTasks = async (): Promise<ApiResponse<Task[]>> => {
  try {
    const response = await axiosInstance.get<ApiResponse<Task[]>>(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const getTasksById = async (id: number): Promise<ApiResponse<Task>> => {
  try {
    const response = await axiosInstance.get<ApiResponse<Task>>(
      apiUrl
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const updateTask = async (
  id: string,
  updateData: Partial<Task>
): Promise<ApiResponse<Task>> => {
  try {
    const payload = {id,...updateData}
    console.log("payload", payload)
    const response = await axiosInstance.put<ApiResponse<Task>>(
      apiUrl, {id,...updateData}
    );
  
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const deleteTask = async (id: string): Promise<ApiResponse<Task>> => {
  try {
    const response = await axiosInstance.delete<ApiResponse<Task>>(apiUrl,{data:{id}})
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};
