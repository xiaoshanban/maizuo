import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:3000"
});

request.interceptors.response.use(response => {
  return response.data;
});

export default request;
