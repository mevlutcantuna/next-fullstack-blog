import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://next-fullstack-blog.vercel.app/api/"
    : "http://localhost:3000/api/";

export const instance = axios.create({
  baseURL: baseUrl,
});
