var app=getApp();
Page({
  login_page:function(){
   wx.navigateTo({
     url: '/pages/login_page/login_page',
   })
  },
  searchbook:function(e){ 
    console.log(e);
    var bookname=e.detail.value.bookname;   
    var id = e.currentTarget.dataset.inputvalue=bookname; 
    var that = this;
    wx.navigateTo({
      url: '/pages/search_result/search_result?id=' + id,

    }) 
    /*
    wx.request({ 
      url: 'http://localhost:8080/user/searchBook?book='+bookname, 
      method:'GET', 
      success:function(res){
        console.log(res.data);
        var list=res.data.list;
        var info = e.currentTarget.dataset.list=list;

        console.log(222+"\n"+info);
          wx.navigateTo({
            url: '/pages/search_result/search_result?id=' + id+"&list="+info,

           }) 
      }
    })*/
  }, 
  input_value:function(e){ 
     var value=e.detail.value
     console.log(value);
     this.setData({
       inputvalue: value,
     })
  },
  data: {
    inputvalue:'', 
    bookname: '',
    author_name: '',
    publish: '',
    num: '' ,
    list:[],
    turn:[
      '/images/photo.png',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
      '/images/slide-4.jpg'
    ],
     
        
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