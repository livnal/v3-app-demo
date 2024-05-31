import request from "./iam-http";
import { isAndroid, isIOS, isLink } from '../util/util.js';

var allServerInfo = null;

// 从配置服务获取服务地址配置
export function initServerInfo() {
    return new Promise((resolve, reject) => {
        if (isAndroid() || isIOS() && window.Cordova) {
            Cordova.exec((serverInfo) => {
                allServerInfo = serverInfo;
                console.log("all server Info ", allServerInfo)
                resolve(serverInfo);
            }, (err) => {
                console.log("initEnv fail err ", err);
                reject(err);
            }, "LinkPlugin", "getServerConfigs", []);
        } else {
            try {
                allServerInfo = JSON.parse(localStorage.getItem("AllServerPaths"));
                resolve();
            } catch(err) {
                reject(err);
            }
        }
    })
}

// 获取企业动态(接口配置从远程配置服务获取)
export function getServiceList(params) {
    let url = "";
    if (allServerInfo) {
        if (allServerInfo?.comwidgetsUri) {
            url = allServerInfo?.comwidgetsUri;
        } else {
            url = allServerInfo["server.comwidgets"];
        }
    }
    console.log("getServiceList url", url);
    return new Promise((resolve, reject) => {
        request.get(url + '/news/list', { params: params }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

// 获取通知(接口配置从本地配置文件获取，打包之前配置好，打包之后不可修改)
export function getNewsImageList() {
  return new Promise((resolve, reject) => {
    request
      .get(
        serviceConfig.getLocalConfig("news.baseUrl") +
          `/v1/news/image/list?size=5`
      )
      .then((res) => {
        resolve(res?.data);
      })
      .catch((err) => {
        console.log("getNewsImageList err: ", err);
        reject(err);
      });
  });
}