Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    bookinfo:[
      {
        BookName:'',
        Author:'', 
        PublishCompany:'', 
      }
    ]
  },
  search: function (e) {
    var c = e.detail.value.nu;
    console.log("search:" + c);
    var that=this;
    wx.request({
      url: 'http://localhost:8080/user/searchBook?book=' + c,
      method: 'GET',
      success: function (res) { 
        var bookinfo = res.data.list;
        var bookname = res.data.bookname;
        console.log(2222+bookname);
        var book=res.data.book;
        console.log(333 + bookinfo);
        that.setData({
             bookinfo:bookinfo,
             bookname: bookname == null ? "" : bookname, 
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id=options.id; 
    this.setData({
      id:id,
    })
  },
  
   jump_first:function(){
     wx.switchTab({
       url: '/pages/first_page/first_page',
     })
   },
   jump_login: function () {
      // wx.navigateBack({
      //   delta:-1,
      // })
     wx.navigateTo({
        url: '/pages/login_page/login_page',
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