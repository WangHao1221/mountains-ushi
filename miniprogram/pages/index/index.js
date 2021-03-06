import '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannnerList: ["../../img/banner/banner1.jpeg","../../img/banner/banner2.jpeg","../../img/banner/banner3.jpeg","../../img/banner/banner4.jpeg"],
    couponList: [
      {
        des: "凡第一次扫码，即可得到一次性消费折扣券8折优惠",
        src: "../../img/qrcode.png"
      }
    ]
  },
  
  async getData(){
    let result = await request('/bannner','GET',{type: 2})
    console.log(result)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})