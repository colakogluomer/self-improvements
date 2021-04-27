import axios from "axios";

const apiEndPoint = "http://localhost:5000/post";

export const createPost = async (post) => await axios.post(apiEndPoint, post);
export const fetchPosts = async () => await axios.get(apiEndPoint);
