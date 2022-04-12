import { instance } from "./instance";

export const createPost = async (post) => {
  return await instance.post("/blog/create-post", post);
};

export const getMostPopularPosts = async () => {
  return await instance.get("/blog/most-popular");
};

export const getPostDetail = async (value) => {
  console.log(value)
  return await instance.post("/blog/get-post", value);
};
 