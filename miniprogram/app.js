//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {}
    this.regexp = {
      phone: /^1[3|4|5|6|7|8|9][0-9]{9}$/,
      idCard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, 
      address: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,  //中文下划线数字英文
      weightReg: /^[0-9]+([.]{1}[0-9]+){0,1}$/ //数字和小数点
    }
  }
})
