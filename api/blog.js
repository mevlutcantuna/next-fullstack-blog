import { instance } from "./instance";

export const createPost = async (post) => {
  return await instance.post("/blog/create-post", post);
};

export const getMostPopularPosts = async (user_id) => {
  return await instance.get("/blog/most-popular", user_id);
};
