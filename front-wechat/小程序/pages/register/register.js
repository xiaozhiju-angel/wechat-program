// pages/register/register.js
Page({
  inputuser:function(){ 
  },
  register:function(e){
       console.log(e);
       var user=e.detail.value.user;
       var name = e.detail.value.name;
       var identi = e.detail.value.identi;
       var tel = e.detail.value.tel;
       var pass = e.detail.value.pass;
       var pass_again = e.detail.value.pass_again;
       var emaile = e.detail.value.emaile;
       var that=this;
       wx.request({
         url: "http://localhost:8080/user/register?user=" + user + "&name=" + name + "&identi=" + identi + "&tel=" + tel + "&pass=" + pass + "&pass_again=" + pass_again + "&emaile=" + emaile,
         method:'GET', 
         success:function(res){
           console.log(res);
            console.log("11111");
            console.log(res.data.success);
            if (res.data.success){
              console.log("22222");
              wx.navigateTo({
                url: '/pages/login_page/login_page',
              }) 
            }else{
              wx.showLoading({
                title: '该用户已注册或输入不完整', 
                icon: 'loading',
                duration: 2000
              })
            }


/*
            if (res.data =='该用户已注册'){
              
            } 
            console.log("11111");
            if (res.data=="注册成功"){
              
            }
            */
         }
       })
  },
  /**
   * 页面的初始数据
   */
  data: {
  
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