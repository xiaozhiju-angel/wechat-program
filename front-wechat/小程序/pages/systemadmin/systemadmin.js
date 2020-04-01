Page({
  //查询用户权限 
  manager_center: function(e) {
    var that = this;
    var power = e.detail.value.power;
    wx.request({
      url: "http://localhost:8080/user/power",
      data: {
        'power': power,
      },
      method: 'GET',
      success: function (res) {
        console.log(res);
        console.log(res.data.list + 2222);
        if (res.data.success) {
          console.log('该用户是读者');
          wx.showLoading({
            title: '该用户是读者',
            icon: 'loading',
            duration: 2000
          })
        } if (res.data.bookadmin) {
          console.log('该用户是图书管理员');
          wx.showLoading({
            title: '该用户是图书管理员',
            icon: 'loading',
            duration: 2000
          })
        }else{
          wx.showLoading({
            title: '该用户未注册',
            icon: 'loading',
            duration: 2000
          })
        } 
      }
    })
  }, 
  //添加图书管理员
  new_admin:function(e){
    var that = this;
    var adminid = e.detail.value.adminid;
    var adminname = e.detail.value.adminname;
    var adminpassword = e.detail.value.adminpassword; 
    var againadminpassword = e.detail.value.againadminpassword;
    var admintel = e.detail.value.admintel;
    var adminemaile = e.detail.value.adminemaile;
    wx.request({ 
      url: "http://localhost:8080/user/newadmins",
      data:{
        'adminid': adminid,
        'adminname': adminname,
        'adminpassword': adminpassword,
        'againadminpassword': againadminpassword,
        'admintel': admintel,
        'adminemaile': adminemaile 
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data.list); 
        if (res.data.success) {
          console.log('添加成功');
          wx.showLoading({
            title: '添加成功',
            icon: 'loading',
            duration: 2000
          })
        } else {
          console.log('图书管理员已存在');
          wx.showLoading({
            title: '图书管理员已存在',
            icon: 'loading',
            duration: 2000
          })
        } 
      }
    })
  },
//添加读者用户
  newreader_add: function (e) {
    var that = this;
    var userid = e.detail.value.userid;
    var username = e.detail.value.username;
    var password = e.detail.value.password;
    var againpassword = e.detail.value.againpassword; 
    wx.request({
      url: "http://localhost:8080/user/newusers",
      data: {
        'userid': userid,
        'username': username,
        'password': password,
        'againpassword'     : againpassword
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data.list);
        console.log("----------");
        if (res.data.success) {
          console.log('添加成功');
          wx.showLoading({
            title: '添加成功',
            icon: 'loading',
            duration: 2000
          })
        } else {
          console.log('该读者已存在');
          wx.showLoading({
            title: '该读者已存在',
            icon: 'loading',
            duration: 2000
          })
        }
      }
    })
  },
//查询读者信息 
  seachreaderbyinput: function(e) { 
    var that = this;
    var userid = e.detail.value.readerinput; 
    wx.request({
      url: "http://localhost:8080/user/searchusers",
      data: {
        'userid': userid,
      },
      method: 'GET',
      success: function (res) {
        console.log(res);
        console.log(res.data.list + 2222);
        that.setData({ 
         users:true, 
         reader: res.data.list
        })
      }
    })
  }, 
  //查询管理员信息 
  seachadminbyinput: function (e) { 
    var that = this;
    var adminid = e.detail.value.admininput; 
    wx.request({
      url: "http://localhost:8080/user/searchadmins",
      data: {
        'adminid': adminid,
      },
      method: 'GET',
      success: function (res) {
        console.log(res);
        console.log(res.data.list + 2222);
         if(res.data.bookadmin){
           that.setData({
             showadmins: true,
             showsystemadmins:false,
             col: res.data.list
           }) 
         }
         if (res.data.systemadmin){
           that.setData({
             showadmins: false,
             showsystemadmins: true,
             system: res.data.list
           })  
         } 
      }
    })
  },

  /**
   * 页面的初始数据
   */
  new_reader:function(){
    var that=this;
    var colornewreader = this.data.color_newreader == 'blueviolet' ? 'white' : 'blueviolet';
    that.setData({
       Color:'blue',
       new_reader:true,  
       delete_reader: false,
       change_reader: false,
       new_bookadmin: false,
       delete_bookadmin: false,
       change_bookadmin: false,
       look_reader: false,
       look_bookadmin: false,
       admin_center: false,
       finger: false, 
       users: false,
       showadmins: false,
       color_newreader:colornewreader,  
       color_deletereader: 'blueviolet',
       color_changereader: 'blueviolet',
       color_newbookadmin: 'blueviolet',
       color_deletebookadmin: 'blueviolet',
       color_changebookadmin: 'blueviolet',
       color_lookreader: 'blueviolet',
       color_lookbookadmin: 'blueviolet',
       color_admincenter: 'blueviolet',
    })
  },
  delete_reader: function () {
    var that = this;
    var colordeletereader = this.data.color_deletereader == 'blueviolet' ? 'white' : 'blueviolet';
    that.setData({
      new_reader: false,
      delete_reader:true,  
      finger: false, 
      change_reader: false,
      new_bookadmin: false,
      delete_bookadmin: false,
      change_bookadmin: false,
      look_reader: false,
      look_bookadmin: false,
      admin_center: false, 
      users: false,
      showadmins: false,
      color_newreader: 'blueviolet',
      color_deletereader: colordeletereader,
      color_changereader: 'blueviolet',
      color_newbookadmin: 'blueviolet',
      color_deletebookadmin: 'blueviolet',
      color_changebookadmin: 'blueviolet',
      color_lookreader: 'blueviolet',
      color_lookbookadmin: 'blueviolet',
      color_admincenter: 'blueviolet',
    })
  },
  change_reader: function () {
    var that = this;
    var colorchangereader = this.data.color_changereader == 'blueviolet' ? 'white' : 'blueviolet';
    that.setData({
      new_reader: false,
      delete_reader: false,
      change_reader: true,
      new_bookadmin: false,
      delete_bookadmin: false,
      change_bookadmin: false,
      look_reader: false,
      users: false,
      showadmins: false,
      look_bookadmin: false,
      admin_center: false,
      finger: false, 
      color_newreader: 'blueviolet',
      color_deletereader: 'blueviolet',
      color_changereader: colorchangereader,
      color_newbookadmin: 'blueviolet',
      color_deletebookadmin: 'blueviolet',
      color_changebookadmin: 'blueviolet',
      color_lookreader: 'blueviolet',
      color_lookbookadmin: 'blueviolet',
      color_admincenter: 'blueviolet',
    })
  },
  new_bookadmin: function () {
    var that = this;
    var colornewbookadmin = this.data.color_newbookadmin == 'blueviolet' ? 'white' : 'blueviolet';
    that.setData({
      new_reader: false,
      delete_reader:false,
      change_reader: false,
      new_bookadmin: true,
      delete_bookadmin: false,
      change_bookadmin: false,
      look_reader: false,
      look_bookadmin: false,
      admin_center: false,
      finger: false, 
      users: false,
      showadmins: false,
      color_newreader: 'blueviolet',
      color_deletereader: 'blueviolet',
      color_changereader: 'blueviolet',
      color_newbookadmin: colornewbookadmin,
      color_deletebookadmin: 'blueviolet',
      color_changebookadmin: 'blueviolet',
      color_lookreader: 'blueviolet',
      color_lookbookadmin: 'blueviolet',
      color_admincenter: 'blueviolet',
    })
  },
  delete_bookadmin: function () {
    var that = this;
    var colordeletebookadmin = this.data.color_deletebookadmin == 'blueviolet' ? 'white' : 'blueviolet';
    that.setData({
      new_reader: false,
      delete_reader: false,
      change_reader: false,
      new_bookadmin: false,
      delete_bookadmin: true,
      change_bookadmin: false,
      look_reader: false,
      users: false,
      showadmins: false,
      look_bookadmin: false,
      admin_center: false,
      finger: false, 
      color_newreader: 'blueviolet',
      color_deletereader: 'blueviolet',
      color_changereader: 'blueviolet',
      color_newbookadmin: 'blueviolet',
      color_deletebookadmin: colordeletebookadmin,
      color_changebookadmin: 'blueviolet',
      color_lookreader: 'blueviolet',
      color_lookbookadmin: 'blueviolet',
      color_admincenter: 'blueviolet',
    })
  },
  change_bookadmin: function () {
    var that = this;
    var colorchangebookadmin= this.data.color_changebookadmin == 'blueviolet' ? 'white' : 'blueviolet';
    that.setData({
      new_reader: false,
      delete_reader: false,
      change_reader: false,
      new_bookadmin: false,
      delete_bookadmin: false,
      change_bookadmin: true,
      look_reader: false,
      users: false,
      showadmins: false,
      look_bookadmin: false,
      admin_center: false,
      finger: false, 
      color_newreader: 'blueviolet',
      color_deletereader: 'blueviolet',
      color_changereader: 'blueviolet',
      color_newbookadmin: 'blueviolet',
      color_deletebookadmin: 'blueviolet',
      color_changebookadmin: colorchangebookadmin,
      color_lookreader: 'blueviolet',
      color_lookbookadmin: 'blueviolet',
      color_admincenter: 'blueviolet',
    })
  },
  look_reader: function () {
    var that = this;
    var colorlookreader = this.data.color_lookreader == 'blueviolet' ? 'white' : 'blueviolet';
    that.setData({
      new_reader: false,
      delete_reader: false,
      change_reader: false,
      new_bookadmin: false,
      delete_bookadmin: false,
      change_bookadmin: false,
      look_reader: true,
      look_bookadmin: false,
      admin_center: false,
      finger: false, 
      users: false,
      showadmins: false,
      color_newreader: 'blueviolet',
      color_deletereader: 'blueviolet',
      color_changereader: 'blueviolet',
      color_newbookadmin: 'blueviolet',
      color_deletebookadmin: 'blueviolet',
      color_changebookadmin: 'blueviolet',
      color_lookreader: colorlookreader,
      color_lookbookadmin: 'blueviolet',
      color_admincenter: 'blueviolet',
    })
  },
  look_bookadmin: function () {
    var that = this;
    var colorlookbookadmin = this.data.color_lookbookadmin == 'blueviolet' ? 'white' : 'blueviolet';
    that.setData({
      new_reader: false,
      delete_reader: false,
      change_reader: false,
      new_bookadmin: false,
      delete_bookadmin: false,
      change_bookadmin: false,
      look_reader: false,
      look_bookadmin: true,
      admin_center: false,
      finger: false, 
      users: false,
      showadmins: false,
      color_newreader: 'blueviolet',
      color_deletereader: 'blueviolet',
      color_changereader: 'blueviolet',
      color_newbookadmin: 'blueviolet',
      color_deletebookadmin: 'blueviolet',
      color_changebookadmin: 'blueviolet',
      color_lookreader: 'blueviolet',
      color_lookbookadmin: colorlookbookadmin,
      color_admincenter: 'blueviolet',
    })
  },
  admin_center: function () {
    var that = this;
    var coloradmincenter = this.data.color_admincenter == 'blueviolet' ? 'white' : 'blueviolet';
    that.setData({
      new_reader: false,
      delete_reader: false,
      change_reader: false,
      new_bookadmin: false,
      delete_bookadmin: false,
      change_bookadmin: false,
      look_reader: false,
      look_bookadmin: false,
      admin_center: true,
      finger: false, 
      users: false,
      showadmins: false,
      color_newreader: 'blueviolet',
      color_deletereader: 'blueviolet',
      color_changereader: 'blueviolet',
      color_newbookadmin: 'blueviolet',
      color_deletebookadmin: 'blueviolet',
      color_changebookadmin: 'blueviolet',
      color_lookreader: 'blueviolet',
      color_lookbookadmin: 'blueviolet',
      color_admincenter: coloradmincenter,
    })
  },
  finger: function () {
    var that = this;
    var bgColor = this.data.Color == 'blue' ? 'red' : 'blue';
    that.setData({
      new_reader: true,
      finger:true,
      users: false,
      showadmins: false,
       Color:bgColor,
       color: 'blue',
    })
  },
  batch_import: function () {
    var that = this;
    var  bicolor = this.data.color == 'blue' ? 'red' : 'blue';
    that.setData({
      new_reader: true,
      finger: false,
      users: false,
      showadmins: false,
      Color: 'blue',
      color:bicolor,
    })
  },
  back_first:function(){
    wx.switchTab({
      url: '/pages/first_page/first_page',
    })
  },
  searchreaderInfo:function(e){
    var readerinfo = e.detail.value
      this.setData({
        readerinput:readerinfo
      })
  }, 
  searchadminInfo: function (e) {
    var bookadmininfo=e.detail.value
    this.setData({
      admininput: bookadmininfo
    })
  },  
  
  data: { 
    readerinfo:'',
    bookadmininfo: '',
    reader:'',
    admin:'',
    searchinfo:'',
    Color:'blue',
    color:'blue',
    color_newreader:'blueviolet',
    color_newreader: 'blueviolet',
    color_deletereader: 'blueviolet',
    color_changereader: 'blueviolet',
    color_newbookadmin: 'blueviolet',
    color_deletebookadmin: 'blueviolet',
    color_changebookadmin: 'blueviolet',
    color_lookreader: 'blueviolet',
    color_lookbookadmin: 'blueviolet',
    color_admincenter: 'blueviolet',
    finger:false, 
    new_reader: false,
    delete_reader:false,
    change_reader:false,
    new_bookadmin:false,
    delete_bookadmin: false,
    change_bookadmin: false,
    look_reader:false,
    look_bookadmin: false,
    admin_center: false, 
    showsystemadmins:false,
    systemmanagerId:'110101',
    users:false, 
    showadmins:false,
    system:[],
    reader:[
        {
          name:'用户编号',
          entity:'110110101'
        }  ,
        {
          name: '用户名',
          entity: '李思'
        },
        {
          name: '学院',
          entity: '计算机科学与技术学院'
        },
        {
          name: '专业',
          entity: '网络工程'
        }, 
        {
          name: '电话',
          entity: '18956552345'
        },
        {
          name: '邮箱',
          entity: '11232545@qq.com'
        },
        {
          name: '借阅上限',
          entity: '10'
        },
        {
          name: '借阅期限',
          entity: '30'
        },
        {
          name: '在借数量',
          entity: '2'
        },
    ],
    col: [
      { 
        name: '编号',
        info: '100110101'
      },
      { 
        name: '用户名',
        info: '王阿姨'  
      },
      { 
        name: '电话', 
        info:'18844454411'
      },
      { 
        name: '邮箱',
        info: '995577444@qq.com', 
      }, 
    ],
    newreader:[

    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var systemmanagerId=options.id;
    this.setData({
      systemmanagerId: systemmanagerId
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