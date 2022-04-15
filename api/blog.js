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

export const getComments = async ({ post_id }) => {
  return await instance.post("blog/comment/get-comments", { post_id });
};

export const addComment = async ({ post_id, user_id, text }) => {
  return await instance.post("blog/comment/add-comment", {
    post_id,
    user_id,
    text,
  });
};

export const deleteComment = async ({ comment_id }) => {
  return await instance.delete(`/blog/comment/${comment_id}`);
};

export const getPostsByFilter = async (search, tag) => {
  return await instance.get(`blog/get-posts?search=${search}&tag=${tag}`);
};
