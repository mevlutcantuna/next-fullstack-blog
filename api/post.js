import { instance } from "./instance";

export const createPost = async (post) => {
  return await instance.post("/post/create-post", post);
};

export const getMostPopularPosts = async () => {
  return await instance.get("/post/most-popular");
};

export const getPostDetail = async (value) => {
  return await instance.post("/post/get-post", value);
};

export const updatePostLikeCount = async ({ post_id, user_id, likeValue }) => {
  return await instance.put("/post/like-post", { post_id, user_id, likeValue });
};

export const getComments = async ({ post_id }) => {
  return await instance.post("post/comment/get-comments", { post_id });
};

export const addComment = async ({ post_id, user_id, text }) => {
  return await instance.post("post/comment/add-comment", {
    post_id,
    user_id,
    text,
  });
};

export const deleteComment = async ({ comment_id }) => {
  return await instance.delete(`/post/comment/${comment_id}`);
};

export const getPostsByFilter = async (search, tag) => {
  return await instance.get(`post/get-posts?search=${search}&tag=${tag}`);
};

export const deletePostByID = async (post_id) => {
  return await instance.delete(`/post/${post_id}`);
};

export const updatePost = async (updatedPost, post_id) => {
  return await instance.put("/post/update-post", { updatedPost, post_id });
};

export const getMyPosts = async (user_id) => {
  return await instance.post("/post/get-my-posts", { user_id });
};

export const getLikedPosts = async (user_id) => {
  return await instance.post("/post/get-liked-posts", { user_id });
};
