// pages/swiper/swiper.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:1,
        name:'语文'
      },
      {
        id: 2,
        name: '数学'
      },
      {
        id: 3,
        name: '英语'
      },
      {
        id: 4,
        name: '物理'
      }
    ],
    arrSwiper: [
      {
        src: '/images/1.jpg ',
        url: 'pages/index/index'
      },
      {
        src: '/images/2.jpg ',
        url: 'pages/index/index'
      },
      {
        src: '/images/3.jpg ',
        url: 'pages/index/index'
      }, 
    ]   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  gopage: function (e) {
    console.log(e);
    var id = e.currentTarget.dataset.id 
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,//绝对路径
    })
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