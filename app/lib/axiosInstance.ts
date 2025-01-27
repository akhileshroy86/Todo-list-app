import axios from "axios";
import { url } from "@/app/utils/constants";

const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    "Content-Type": "application/json",
     'Cache-Control': 'no-cache' 
  },
});

export default axiosInstance;
