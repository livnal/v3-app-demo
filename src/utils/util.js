/*
 * @Descripttion: 
 * @version: 
 * @FilePath: /src/utils/util.js
 */
module.exports = {
    isAndroid() {
        return /Android/.test(navigator.userAgent);
    },
    isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    },
    isLink() {
        var userAgent = navigator.userAgent.toLowerCase();
        return userAgent.indexOf(' electron/') > -1;
    },
    getDownloadUrl(fileId) {
        if (fileId.startsWith('lowcode://')) {
            fileId = fileId.substr(10);
            return localStorage['storeUri'] + "/lw/download" + '/' + fileId + '?access_token=' + localStorage["AccessToken"];
        } else if (fileId.startsWith('assets/')) {
            return fileId;
        }
    },
}