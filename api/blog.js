import { instance } from "./instance";

export const createPost = async (post) => {
  return await instance.post("/blog/create-post", post);
};

export const getMostPopularPosts = async () => {
  return await instance.get("/blog/most-popular");
};

export const getPostDetail = async (value) => {
  return await instance.post("/blog/get-post", value);
};

export const updatePostLikeCount = async ({ post_id, user_id, likeValue }) => {
  return await instance.put("/blog/like-post", { post_id, user_id, likeValue });
};
