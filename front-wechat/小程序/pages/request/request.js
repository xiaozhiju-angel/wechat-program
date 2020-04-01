Page({

  /**
   * 页面的初始数据
   */
  data: {
    stories: '' 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

  },
  requestData:function(){
    var that=this;
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/latest',
      data:{
        'class':'小说'
      },
      success:function(res){
        concole.log(res); 
        that.setData({
         arr:res.data.stories
        })

      },
      fail:function(e){
        concole.log(e); 
      }
    }) 
    concole.log('请求成功')//先有请求成功，外边是同步的，里面是异步的
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