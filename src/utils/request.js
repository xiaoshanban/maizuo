import axios from "axios";
import { Toast } from "vant";
const request = axios.create({
  baseURL: "https://m.maizuo.com"
});

request.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    Toast("网络异常，请稍后重试");
    return Promise.reject(error);
  }
);

export default request;
