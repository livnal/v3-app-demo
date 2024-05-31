export const serviceConfig = {
  serviceConfig() {
    return {
      AccessToken: "bm9kZTE6NzdtcExxakR3dXI1VllGVDlkaGRYRDpTTmZKbDNBd2dPaw",
      news: {
        baseUrl: "http://20.11.2.42/newsapi",
      },
      storageContext: "http://10.201.61.245/storage",
    };
  },
  getLocalConfig(key) {
    let value = this.getObjValue(this.serviceConfig(), key);
    console.log(" getLocalConfig " + key + " 返回" + value);
    return value;
  },
  getObjValue(obj, props) {
    if (typeof props === "string") {
      props = props.split(".");
    }
    if (props.length === 0) {
      return obj;
    }
    let prop = props.shift();

    if (prop && obj.hasOwnProperty(prop)) {
      return this.getObjValue(obj[prop], props);
    }
    return undefined;
  },
};
