import { instance } from "./instance";

export const signup = async (form) => {
  return await instance.post("auth/signup", form);
};

export const login = async (form) => {
  return await instance.post("auth/login", form);
};

export const getUser = async (token) => {
  return await instance.post("auth/get-user", { token });
};

export const updateUser = async (user_id, updatedUser) => {
  return await instance.put("auth/update-user", { user_id, updatedUser });
};
