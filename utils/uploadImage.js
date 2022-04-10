import axios from "axios";

export const uploadImage = (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "next-blog");  
  return axios.post("https://api.cloudinary.com/v1_1/dn1jrxng8/image/upload", data);
};