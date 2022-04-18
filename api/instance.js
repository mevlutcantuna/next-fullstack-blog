import axios from "axios";

export const instance = axios.create({
    baseURL:"http://next-fullstack-blog.vercel.app/api/"
})