var app=getApp();
Page({
  change_State: function(){
     this.setData({
       showView: true,
       change_info: false,
       change_pwd: false,
       borrow_now: false,
       borrowrecord: false
    })
  },  
  mine:function(e){ 
     wx.switchTab({
       url: '/pages/mine_beforelogin/mine_beforelogin',
     })
  },
  show: function (e) {
    console.log(e); 
    
    var that = this;
    wx.request({
      url: "http://localhost:8080/user/fundamental?userid="+this.data.u, 
      method:'GET', 
      success:function(res){
        console.log(e); 
        // var id = e.detail.value.borrowid; 
          console.log(res.data.id); 
           that.setData({
             id:res.data.id,
             depart: res.data.depart,
             prof: res.data.prof,
             tel:res.data.tel,
             emaile:res.data.emaile,
             max:res.data.max,
             date:res.data.date,
             num:res.data.num, 
           })
      } 
    })
  },
  change_info: function () {
    var that = this;
    that.setData({
      showView: false,
      change_info: true,
      change_pwd: false,
      borrow_now: false,
      borrowrecord: false
    })
  },
  change_pwd: function () {
    var that = this;
    that.setData({
      showView: false,
      change_info: false,
      change_pwd: true,
      borrow_now: false,
      borrowrecord: false
    })
  },
  borrow_now: function () {
    var that = this;
    that.setData({
      showinfo:false,
      showView: false,
      change_info: false,
      change_pwd: false,
      borrow_now: true,
      borrowrecord: false
    })
  },
  borrow_record:function(){
    this.setData({
      showView: false,
      change_info: false,
      change_pwd: false,
      borrow_now: false,
      borrowrecord: true,
      showinfo:false,
    })
  },
  //借阅记录
  Borrowrecord: function (e) {
    console.log(e);
    var that = this; 
    var userid=e.detail.value.userid;
    wx.request({
      url: "http://localhost:8080/user/borrowrecord",
      data: {
        'userid': userid,
      },
      method: 'GET',
      success: function (res) {
        console.log(res);
        that.setData({ 
          rrecord:true,
          showinfo:true,
          brrr: res.data.list
        })
      }
    })
  },


  first_page: function () {
    wx.switchTab({
      url: '/pages/first_page/first_page',
    })
  },
  own_page: function () {
    wx.switchTab({
      url: '/pages/mine/mine',
    })
  },
  jump_first: function () {
    wx.switchTab({
      url: '/pages/first_page/first_page',
    })
  },
  //修改资料
  changeinfo:function(e){
    console.log(e); 
    var that = this;
    var userid = e.detail.value.userid;
    var tel = e.detail.value.phone;
    var emaile = e.detail.value.email;
    wx.request({
      url: "http://localhost:8080/user/changeinfo?tel=" + tel + "&emaile=" + emaile + "&userid=" + userid,
      method: 'GET', 
      success:function(res){
        if(res.data.success){
          wx.showLoading({
            title: '修改成功',
            icon: 'loading',
            duration: 2000
          })
        }else{
            wx.showLoading({
            title: '修改失败',
            icon: 'loading',
            duration: 2000
          })

        }
       
      }
    }) 
  },

  //修改密码
  changepass: function (e) {
    console.log(e);
    var that = this;
    var userid = e.detail.value.userid;
    var id = e.detail.value.id;
    var newpass = e.detail.value.newpass;
    var againpass = e.detail.value.againpass;
    wx.request({
      url: "http://localhost:8080/user/changepass",
      data:{
        'userid': userid,
        'id': id,
        'newpass': newpass,
        'againpass': againpass, 
      },
      method: 'GET',
      success: function (res) {
        if (res.data.success) {
          wx.showLoading({
            title: '修改成功',
            icon: 'loading',
            duration: 2000
          })
        } else {
          wx.showLoading({
            title: '用户名或密码有误',
            icon: 'loading',
            duration: 2000
          })

        } 
      }
    })

  }, 
   borrowbookinfo: function(e) {
    console.log(e);
    var that = this;
    var userid = e.detail.value.userid; 
    wx.request({
      url: "http://localhost:8080/user/bookinfonow",
      data: {
        'userid': userid,
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data.list);
        that.setData({
          showinfo: true,
          col: res.data.list
        })
      }
    })
   }, 

   Borrowrecord: function(e) {
     console.log(e);
     var that = this; 
     var userid = e.detail.value.userid;
     wx.request({
       url: "http://localhost:8080/user/borrowrecord",
       data: {
         'userid': userid,
       },
       method: 'GET',
       success: function (res) {
         console.log(res.data.list);
         that.setData({
           showinfo:false,
           borrowrecord: true,
           brrr: res.data.list
         })
       }
     })
   },
  /**
   * 页面的初始数据
   */
  data:{ 
    showView: true,
    rrecord:false,
    change_info: false,
    change_pwd: false,
    borrow_now: false,
    borrowrecord: false,
    u:'11503090134',  
    showinfo:false,
    userId:'',  
        id:'',
        name:'',
        depart:'',
        prof:'',
        tel:'',
        emaile:'',
        max:'',
        date:'',
        num:'' , 
        brrr:[],
    col: [
      {
        "code": "1",
        "id": "11503090134",
        "book_id": "小王子",
        "rdate": "2018-6-13"
      },
      {
        "code": "2",
        "id": "11503090124",
        "book_id": "魔女传",
        "rdate": "2018-6-3"
      },
      {
        "code": "3",
        "id": "",
        "book_id": "",
        "rdate": ""
      },
      {
        "code": "4",
        "id": "",
        "book_id": "",
        "rdate": ""
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userId = options.id; 
    this.setData({
      userId: userId, 
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

  },
    }) 