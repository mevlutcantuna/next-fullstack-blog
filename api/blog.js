import { instance } from "./instance";

export const createPost = async (post) => {
  return await instance.post("/blog/create-post", post);
};
