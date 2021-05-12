// 封装请求的功能函数
import './config'
export default (url, method, data={})=> {
  wx.showLoading({
    title: '加载中'
  });
  return new Promise((resolve, reject) => {
    wx.request({
      header: wx.getStorageSync("access_token") ? { "Authorization":  wx.getStorageSync("access_token")} : undefined,
      method: method,
      url: config.host + url,
      data: data,
      success: (res) => {
        wx.hideLoading();
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data)
        } else {
          if (res.statusCode == 401) {
            wx.removeStorageSync("access_token");
            wx.showToast({
              icon: "none",
              title: res.data.message
            })
            setTimeout(function () {
              wx.switchTab({
                url: '/pages/index/index',
              })
            }, 2000)
          } else {
            reject(res)
          }
        }
      },
      fail:(err)=>{
        reject(err)
      }
    })
  })
}