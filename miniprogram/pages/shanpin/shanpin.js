// pages/shanpin/shanpin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        title: "新品超值推荐",
        anchor: "a",
        id: "a1"
      },
      {
        title: "饭卷卷",
        anchor: "b",
        id: "b1"
      },
      {
        title: "八大金刚必点寿司",
        anchor: "c",
        id: "c1"
      },
      {
        title: "十年经典",
        anchor: "d",
        id: "d1"
      }
    ],
    indexId: "0",
    toTitle:"title-a",
    top:[],
  },
  //事件处理函数  
  switchRightTab: function (e) {
    let idx = e.currentTarget.dataset.menuindex;
    let anchor = e.currentTarget.dataset.anchor;
    let that = this
    that.setData({
      indexId: idx,
      toTitle: "title-" + anchor
    });
  },
  scrollToLeft(res){
    console.log(this.data.top)
    let top=res.detail.scrollTop;
    console.log(top)
    var length = this.data.top.length;
    for(var i=0;i<this.data.top.length;i++){
      if (this.data.top[i] - this.data.top[0] <= top && (i < length - 1 && this.data.top[i + 1] - this.data.top[0] > top)){
       if(this.data.indexId!=i){
          this.setData({
            indexId: i
          }); 
        }
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '点餐'
    })
    this.initRects()
  },

  initRects(){
    var that = this
    setTimeout(() => {
      var top2=new Array();
      for(var i=0;i<that.data.tabs.length;i++){
        wx.createSelectorQuery().select('#view-' + that.data.tabs[i].anchor).boundingClientRect(function (rect) {
          console.log("rect-:" + JSON.stringify(rect));
          var isTop=Number(rect.top);
          top2.push(isTop);
        }).exec();
      }  
      that.setData({
        top: top2
      });
    }, 300);
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
    this.setData({
      classificationArray: {
          a:[
            {
              id: "a0",
              anchor: "a",
              nameGood: '香辣鸡肉寿司',
              imgGood: "https://img0.baidu.com/it/u=1470742724,3484381991&fm=26&fmt=auto&gp=0.jpg",
              npriceGood: "14.90",
              index: 0
            },
            {
              id: "a1",
              anchor: "a",
              nameGood: '咸蛋超人脆寿司',
              imgGood: "https://img2.baidu.com/it/u=3427944578,3347317711&fm=15&fmt=auto&gp=0.jpg",
              npriceGood: "12.90",
              index: 1
            },
            {
              id: "a3",
              nameGood: '香辣鸡肉寿司4',
              imgGood: "https://img2.baidu.com/it/u=3971197964,2467916023&fm=26&fmt=auto&gp=0.jpg",
              npriceGood: "14.90",
              index: 2
            },
          ],
          b:[
            {
              id: "b0",
              anchor: "b",
              nameGood: '香辣鸡肉套餐',
              imgGood: "https://img2.baidu.com/it/u=3329405585,483789648&fm=26&fmt=auto&gp=0.jpg",
              npriceGood: "14.90起",
              index: 0
            },
            {
              id: "b1",
              anchor: "b",
              nameGood: '咸蛋超人套餐',
              imgGood: "https://img2.baidu.com/it/u=3207286365,62096546&fm=224&fmt=auto&gp=0.jpg",
              npriceGood: "12.90起",
              index: 1
            },
          ],
          c:[
            {
              id: "c0",
              anchor: "c",
              nameGood: '香辣鸡肉寿司9',
              imgGood: "https://img1.baidu.com/it/u=1482222463,3286060900&fm=26&fmt=auto&gp=0.jpg",
              npriceGood: "14.90",
              index: 0
            },
            {
              id: "c1",
              nameGood: '咸蛋超人脆寿司1',
              imgGood: "https://img2.baidu.com/it/u=344643559,2419029856&fm=15&fmt=auto&gp=0.jpg",
              npriceGood: "12.90",
              index: 1
            }
          ],
          d: [
            {
              id: "d1",
              nameGood: '咸蛋超人脆寿司5',
              imgGood: "https://img0.baidu.com/it/u=1226986750,304402817&fm=26&fmt=auto&gp=0.jpg",
              npriceGood: "12.90",
              index: 0
            },
            {
              id: "d2",
              nameGood: '香辣鸡肉寿司2',
              imgGood: "https://img2.baidu.com/it/u=2859060783,3178009389&fm=15&fmt=auto&gp=0.jpg",
              npriceGood: "14.90",
              index: 1
            },
            {
              id: "d3",
              nameGood: '咸蛋超人脆寿司3',
              imgGood: "https://img2.baidu.com/it/u=1443731022,885812795&fm=15&fmt=auto&gp=0.jpg",
              npriceGood: "12.90",
              index: 2
            }
          ]
        }
    })
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