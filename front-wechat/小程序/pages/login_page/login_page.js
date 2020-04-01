var app=getApp();
var m=require('../../utils/md5.js');
Page({ 
  login_power:function(){
    var that=this;
    var showView=this.data.show=='true'?'false':true
    that.setData({
       show:showView
    })
  },
  register:function(){
    wx.navigateTo({
      url: '/pages/register/register',
    })
  }, 
  data: {
    userid:'',
    u:'',
    show:'',
    ra1:'读者',
    ra2: '图书管理员',
    ra3: '系统管理员', 
    type: '',  
    r1:'1',
    r2:'2',
    r3:'3' , 
  },  
  
  login: function (e) {  
    console.log(e);
    var select = e.detail.value.selectway;  
    var that=this;
    console.log(select);
    if (select==this.data.ra1) { 
      console.log(select);
      var user=e.detail.value.username;
      var password=e.detail.value.password; 
      var pass = m.hexMD5(password);  
      // var id = e.currentTarget.dataset.id =user;  
      wx.request({
        url: "http://localhost:8080/user/login?username=" + user + "&password=" + pass + "&type=" + this.data.r1, 
           method:'GET', 
           success:function(res){  
          //返回true、或false供跳转 
          //返回true、或false供跳转 
                  if (res.data.data1){
                     var id = e.currentTarget.dataset.id = res.data.name;  
                     wx.navigateTo({
                            url: '/pages/mine/mine?id='+id,
                      })
                     app.globalData.loginid = user
                    }else {
                    wx.showLoading({
                    title: '用户名或密码有误',
                    icon: 'loading',
                    duration: 2000
                    })
                  } 
           } 
         })
    } else if (select == this.data.ra2){ 
      var adid = e.detail.value.username;
      var password = e.detail.value.password;
      var pass = m.hexMD5(password); 
      var id = e.currentTarget.dataset.id=adid;
      wx.request({
        url: "http://localhost:8080/user/login?username=" + adid + "&password=" + pass + "&type=" + this.data.r2,  
        method:'GET',
        success: function (res) { 
          console.log(res);
          console.log(res.data.data2);
          //返回true、或false供跳转 
          //返回true、或false供跳转 
          if (res.data.data2) {
            wx.navigateTo({
              url: '/pages/reader/reader?id='+id,
            })
            app.globalData.loginid = adid 
          } else { 
            wx.showLoading({
              title: '用户名或密码有误',
              icon: 'loading',
              duration: 2000
            })
          }
        }
        });
    } else if (select==this.data.ra3){
      var adminid = e.detail.value.username;
      var password = e.detail.value.password;
      var pass = m.hexMD5(password); 
    var id = e.currentTarget.dataset.id=adminid;
      wx.request({
        url: "http://localhost:8080/user/login?username=" + adminid + "&password=" + pass + "&type=" + this.data.r3, 
        method: 'GET',
        success: function (res) {
          console.log(res.data.data3);
          //返回true、或false供跳转 
          //返回true、或false供跳转
          app.globalData.flag_login = res.data.data;
          if (res.data.data3) {
            wx.navigateTo({
              url: '/pages/systemadmin/systemadmin?id='+id,
            })
            app.globalData.loginid = adminid 
            } else {
            wx.showLoading({
              title: '用户名或密码有误',
              icon: 'loading',
              duration: 2000
              })
             }
          }
      });
      }else{
        wx.showLoading({
        title: '请确认身份',
        icon: 'loading',
        duration: 2000
      })
      }  
   },
  // // 登录  
  // login:function () {
  //   if(this.data.user.length==0||this.data.pass.length==0){  
  //     wx.showToast({
  //       title: '输入不能为空',
  //       duration: 2000
  //     })
  //   }
  //   else if (this.data.user == app.globalData.username && this.data.pass==app.globalData.password) {
  //     wx.navigateTo({ 
  //       url: '/pages/mine/mine',
  //     })  
  //   } 
  //   else {
  //     wx.showToast({
  //       title: '用户未注册',
  //       duration: 2000
  //     })  
  //   }
  // }  , 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that=this;
    // //本地存储有没有用户信息
    // wx.getStorage({
    //   key: 'userinfo',
    //   success: function(res) {
    //   that.setDate({
    //     islogin:true,
    //     username:res.data.user
    //   })
    //   },
    //   fail:function(){
    //     console.log("没有与用户信息");
    //   }
    // })
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

// var app = getApp()
// Page({
//   data: {
//     id:'',
//     userid: '',
//     passid: '', 
//     selectway:'', 
//     islogin: false,
//     ra1: "读者",
//     ra2: "图书管理员",
//     ra3: "系统管理员",
//     usertype1: '1',
//     usertype2: '2',
//     usertype3: '3',
//     username:'',
//     select:''
//   },

//   // 获取输入账号  
//   phoneInput: function (e) {
//     this.setData({
//      userid: e.detail.value
//     })
//   },

//   // 获取输入密码 ,判断密码强弱 
//   passwordInput: function (e) {
//     console.log(e);
//     var that = this
//     this.setData({
//       passid: e.detail.value
//     })
//     var pwd = e.detail.value.password
//     if (!isNaN(pwd)) {
//       that.setData({
//         isshow: true
//       })
//     } else {
//       that.setData({
//         isshow: false
//       })
//     }
//   },
//   }
  //提交表单
//   login: function (e) {
//     console.log(e);
//     var id=e.currentTarget.dataset.id;
//     var select = e.detail.value.selectway;
//     var that = this;
//     console.log(e)
//     console.log(select + " " + this.data.ra1 + " " )
//     if (select==that.data.ra1) {
//       var userid = e.detail.value.username;
//       var passid = e.detail.value.password;
//       console.log(userid+" " +passid)
//       wx.request({
//         url: "http://localhost:8080/user/adBook?username=" + userid + "&&password=" + passid + "&&type=" + this.data.usertype1,
//         method:'GET',
//         success: function (res) {
//           console.log(res);
//           app.globalData.flag_login = res.data
//           console.log(app.globalData.flag_login)
//           if (app.globalData.flag_login==1) {
//             wx.navigateTo({
//               url: '/pages/mine/mine?id+'+id,
//             })
//             app.globalData.username = userid
//           } else {
//             wx.showLoading({
//               title: '用户名或密码错误',
//               icon: 'loading',
//               duration: 1000
//             })
//           }
//         }
//       })

//     } else if (select==that.data.ra2) {
//       var adid = e.detail.value.username;
//       var passid = e.detail.value.password;
//       wx.request({
//         url: "http://localhost:8080/user/adBook?username=" + adid + "&&password=" + passid + "&&type=" + this.data.usertype2,
//         success: function (res) {
//           console.log(res.data);
//           app.globalData.flag_login = res.data
//           console.log(app.globalData.flag_login)
//           if (app.globalData.flag_login==2) {
//             wx.navigateTo({
//               url: '/pages/reader/reader',
//             })
//             app.globalData.username= adid
//           } else {
//             wx.showLoading({
//               title: '用户名或密码错误',
//               icon: 'loading',
//               duration: 1000
//             })
//           }
//         }
//       })
//     } else if (select==that.data.ra3) {
//       var adminid = e.detail.value.username;
//       var passid = e.detail.value.password;
//       wx.request({
//         url: "http://localhost:8080/user/wxLoginCheckServlet?username=" + adminid + "&&password=" + passid + "&&type=" + this.data.usertype3,
//         success: function (res) {
//           console.log(res.data);
//           app.globalData.flag_login = res.data;
//           console.log(app.globalData.flag_login+res.data);
//           if (app.globalData.flag_login==3) {
//             wx.navigateTo({
//               url: '/pages/systemadmin/systeadmin?id='+id,
//             })
//             app.globalData.username = adminid
//           } else {
//             wx.showLoading({
//               title: '用户名或密码错误',
//               icon: 'loading',
//               duration: 1000
//             })
//           }
//         }
//       })
//     } else {
//       wx.showLoading({
//         title: '未选中用户类型',
//         icon: 'loading',
//         duration: 2000
//       })
//     }

//   },
// }) 