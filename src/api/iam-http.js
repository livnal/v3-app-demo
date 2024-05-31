import axios from "axios";
import { isAndroid, isIOS, isLink } from "../utils/util.js";
import { serviceConfig } from "../config/config.js";

axios.interceptors.request.use((config) => {
  if (config.url.indexOf("/server/configs") != -1) {
    config.headers["Authorization"] =
      "Basic " +
      Base64.encode(
        window.config.configName + ":" + window.config.configPassword
      );
  } else {
    config.headers["Authorization"] = "Bearer " + (localStorage["AccessToken"] || serviceConfig.getLocalConfig("AccessToken"));
    config.headers["Content-Type"] = "application/json";
  }
  return config;
});

axios.interceptors.response.use(
  (res) => {
    if (res.headers["x-total-count"]) {
      res.total = res.headers["x-total-count"];
    }
    return res;
  },
  (error) => {
    if (error.response.status === 401) {
      if (isAndroid() || (isIOS() && window.Cordova)) {
        //        工作台渲染引擎发现接口401 会刷新token和页面
        //        Cordova.exec(
        //          (res) => {
        //            localStorage.setItem("AccessToken",res.accessToken)
        //            error.response.config.headers.Authorization = `Bearer ${res.accessToken}`;
        //            return axios(error.config);
        //          },
        //          (err) => {
        //            console.log("initEnv fail err ", err);
        //          },
        //          "LinkPlugin",
        //          "refreshToken",
        //          []
        //        );
      }
    } else {
      console.log("response error ", error);
    }
  }
);

export default axios;
