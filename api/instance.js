import axios from "axios";

export const instance = axios.create({
  baseURL: "https://next-fullstack-blog.vercel.app/api/",
});
