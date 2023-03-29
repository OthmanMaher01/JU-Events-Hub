import RefreshRequest from "./RefreshRequest"
import axios from "axios";
export const axiosPrivate = axios.create({
    baseURL : 'http://127.0.0.1:8080/api/',
    headers:{
      "Content-Type":"application/json",
      "Access-Control-Allow-Origin": "*",
      timeout : 1000,
    }
  });
axiosPrivate.interceptors.request.use(
config => {
    if (!config.headers['Authorization']) {
        config.headers['Authorization'] = `Bearer ${localStorage.getItem("accessToken")}`;
    }
    return config;
}, (error) => Promise.reject(error)
);
axiosPrivate.interceptors.response.use(
    response => response,
    async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
            prevRequest.sent = true;
            const newAccessToken = await RefreshRequest();
            localStorage.setItem("accessToken",newAccessToken)
            prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
            return axiosPrivate(prevRequest);
        }
    }
);

export default axiosPrivate;