// pages/bookadmin/bookadmin.js
var app=getApp();
Page({
  reader_borrow: function () {
    var that = this; 
    var readerborrow = this.data.color_readerborrow == 'blueviolet' ? 'white' : 'blueviolet';
    that.setData({
      Color:'blue',
      show_user:false,
      show_b:false,
      reader_borrow: true,
      show_user:false,
      show_borrowinfo:false, 
      reader_return: false,
      finger: false,
      in_book: false,
      out_book: false,
      book_info: false,
      query_borrow: false,
      query_book: false, 
      admin_center: false,
      display_record: false,
      show_record: false,
      color_readerborrow: readerborrow,
      color_readerreturn: 'blueviolet',
      color_inbook: 'blueviolet',
      color_outbook: 'blueviolet',
      color_bookinfo: 'blueviolet',
      color_queryborrow: 'blueviolet',
      color_querybook: 'blueviolet',
      color_admincenter: 'blueviolet', 
    })
  },
  reader_return: function () {
    var that = this;
    var colorreaderreturn = this.data.color_readerreturn == 'blueviolet' ? 'white' : 'blueviolet';
    that.setData({
      show_user: false,
      show_b: false,
      show_user: false,
      show_b: false,
      reader_borrow: false,
      reader_return: true,
      finger: false,
      show_book: false,
      in_book: false,
      out_book: false,
      book_info: false,
      query_borrow: false,
      query_book: false,
      admin_center: false,
      display_record: false,
      show_record: false,
      color_readerborrow: 'blueviolet',
      color_readerreturn: colorreaderreturn,
      color_inbook: 'blueviolet',
      color_outbook: 'blueviolet',
      color_bookinfo: 'blueviolet',
      color_queryborrow: 'blueviolet',
      color_querybook: 'blueviolet',
      color_admincenter: 'blueviolet', 
    })
  },
  in_book: function () {
    var that = this;
    var colorinbook = this.data.color_inbook == 'blueviolet' ? 'white' : 'blueviolet';
    that.setData({
      show_user: false,
      show_b: false,
      reader_borrow: false,
      reader_return: false,
      finger: false,
      in_book: true,
      show_book: false,
      out_book: false,
      book_info: false,
      query_borrow: false,
      query_book: false,
      admin_center: false,
      display_record: false,
      show_record: false,
      color_readerborrow: 'blueviolet',
      color_readerreturn: 'blueviolet',
      color_inbook: colorinbook,
      color_outbook: 'blueviolet',
      color_bookinfo: 'blueviolet',
      color_queryborrow: 'blueviolet',
      color_querybook: 'blueviolet',
      color_admincenter: 'blueviolet', 
    })
  },
  out_book: function () {
    var that = this;
    var coloroutbook = this.data.color_outbook == 'blueviolet' ? 'white' : 'blueviolet';
    that.setData({
      bid: '输入图书编号',
      show_user: false,
      show_b: false,
      reader_borrow: false,
      reader_return: false,
      finger: false,
      show_book: false,
      in_book: false,
      out_book: true,
      book_info: false,
      query_borrow: false,
      query_book: false,
      admin_center: false,
      display_record: false,
      show_record: false,
      color_readerborrow: 'blueviolet',
      color_readerreturn: 'blueviolet',
      color_inbook: 'blueviolet',
      color_outbook: coloroutbook,
      color_bookinfo: 'blueviolet',
      color_queryborrow: 'blueviolet',
      color_querybook: 'blueviolet',
      color_admincenter: 'blueviolet', 
    })
  },
  book_info: function () {
    var that = this;
    var colorbookinfo = this.data.color_bookinfo == 'blueviolet' ? 'white' : 'blueviolet';
    that.setData({
      show_user: false,
      show_b: false,
      bid: '输入图书编号',
      input: '输入图书编号',
      inputvalue: '图书编号/用户编号/借阅号',
      reader_borrow: false,
      reader_return: false,
      in_book: false,
      show_book: false,
      out_book: false,
      book_info: true,
      query_borrow: false,
      query_book: false,
      admin_center: false,
      display_record: false,
      show_record: false,
      color_readerborrow: 'blueviolet',
      color_readerreturn: 'blueviolet',
      color_inbook: 'blueviolet',
      color_outbook: 'blueviolet',
      color_bookinfo: colorbookinfo,
      color_queryborrow: 'blueviolet',
      color_querybook: 'blueviolet',
      color_admincenter: 'blueviolet', 
    })
  },
  query_borrow: function () {
    var that = this;
    var colorqueryborrow = this.data.color_queryborrow == 'blueviolet' ? 'white' : 'blueviolet';
    that.setData({
      show_user: false,
      show_b: false,
      input: '输入搜索信息',
      inputvalue: '图书编号/用户编号/借阅号',
      reader_borrow: false,
      reader_return: false,
      in_book: false,
      show_book: false,
      out_book: false,
      book_info: false,
      query_borrow: true,
      query_book: false,
      admin_center: false,
      display_record: true,
      show_record: false,
      color_readerborrow: 'blueviolet',
      color_readerreturn: 'blueviolet',
      color_inbook: 'blueviolet',
      color_outbook: 'blueviolet',
      color_bookinfo: 'blueviolet',
      color_queryborrow: colorqueryborrow,
      color_querybook: 'blueviolet',
      color_admincenter: 'blueviolet', 
    })
  }, 
  query_book: function () {
    var that = this;
    var colorquerybook = this.data.color_querybook == 'blueviolet' ? 'white' : 'blueviolet';
    that.setData({
      show_user: false,
      show_b: false,
      input: '输入搜索信息',
      inputvalue: '图书编号/用户编号/借阅号',
      reader_borrow: false,
      reader_return: false,
      in_book: false,
      show_book: false,
      out_book: false,
      book_info: false,
      query_borrow: false,
      query_book: true,
      admin_center: false,
      display_record: false,
      show_record: false,
      color_readerborrow: 'blueviolet',
      color_readerreturn: 'blueviolet',
      color_inbook: 'blueviolet',
      color_outbook: 'blueviolet',
      color_bookinfo: 'blueviolet',
      color_queryborrow: 'blueviolet',
      color_querybook: colorquerybook,
      color_admincenter: 'blueviolet', 
    })
  }, 
  admin_center: function () {
    var that = this;
    var coloradmincenter = this.data.color_admincenter == 'blueviolet' ? 'white' : 'blueviolet';
    that.setData({
      show_user: false,
      show_b: false,
      reader_borrow: false,
      reader_return: false,
      in_book: false,
      show_book: false,
      out_book: false,
      book_info: false,
      query_borrow: false,
      query_book: false,
      admin_center: true,
      color_readerborrow: 'blueviolet',
      color_readerreturn: 'blueviolet',
      color_inbook: 'blueviolet',
      color_outbook: 'blueviolet',
      color_bookinfo: 'blueviolet',
      color_queryborrow: 'blueviolet',
      color_querybook: 'blueviolet', 
      color_admincenter: coloradmincenter,
    })
  },
  finger: function () {
    var that = this;
    var bgColor = this.data.Color == 'blue' ? 'red' : 'blue';
    that.setData({
      show_user: false,
      show_b: false,
      new_reader: true,
      finger: true,
      Color: bgColor,
      color: 'blue',
    })
  },
  batch_import: function () {
    var that = this;
    var bicolor = this.data.color == 'blue' ? 'red' : 'blue';
    that.setData({
      new_reader: true,
      finger: false,
      Color: 'blue',
      color: bicolor,
    })
  }, 
  back_first: function () {
    wx.switchTab({
      url: '/pages/first_page/first_page',
    })
  },
  readerborrow:function(e){
       console.log(e+222);
       var that=this;
       var name = e.detail.value.name;
       var brid = e.detail.value.borrowid;
       var bookid = e.detail.value.bookid;
       show_borrowinfo: true,
       wx.request({
         url: "http://localhost:8080/user/readerborrow?borrowid=" + brid + "&name=" + name+ "&bookid=" + bookid ,
         method:'GET',
         success:function(res){ 
             console.log(res.data.list);
             console.log("----------"); 
                 that.setData({
                 show_borrowinfo: true,
                info: res.data.list
               })  
         }
       })
  },
  //新书入库
  newbookin:function(e) {
    console.log(e);
    var bookid = e.detail.value.bookid;
    var bookname = e.detail.value.bookname;
    var bookauthor = e.detail.value.bookauthor;
    var booktranslator = e.detail.value.booktranslator;
    var price = e.detail.value.price;
    var code = e.detail.value.code;
    var publishplace = e.detail.value.publishplace;
    var publishtime = e.detail.value.publishtime;
    var inmysqler = e.detail.value.inmysqler;  
    var inmysqlertime = e.detail.value.inmysqlertime;
    var state = e.detail.value.state;
      wx.request({
        url: "http://localhost:8080/user/newbookIn",
        data:{
          'bookid': bookid,
          'bookname': bookname,
          'bookauthor': bookauthor,
          'booktranslator': booktranslator,
          'price': price,
          'code': code,
          'publishplace': publishplace,
          'publishtime': publishtime,
          'inmysqler': inmysqler ,
          'inmysqlertime': inmysqlertime,
          'state': state 
        },
        method: 'GET',
        success: function (res) {
          console.log(res.data.success); 
          if (res.data.success){
            console.log('添加成功'); 
            wx.showLoading({
              title: '添加成功',
              icon: 'loading',
              duration: 2000
            })
          }else{ 
            console.log('该图书已入库');
            wx.showLoading({
              title: '该图书已入库',
              icon: 'loading',
              duration: 2000
            })
          } 
        }
      })
  },
  //图书出库
  newbookout: function (e) {
    console.log(e+23);
    var bookid = e.detail.value.bookid;
    var bookname = e.detail.value.bookname;
    var bookauthor = e.detail.value.bookauthor;
    var booktranslator = e.detail.value.booktranslator;
    var price = e.detail.value.price;
    var code = e.detail.value.code;
    var publishplace = e.detail.value.publishplace;
    var publishtime = e.detail.value.publishtime;
    var inmysqler = e.detail.value.inmysqler;
    wx.request({
      url: "http://localhost:8080/user/bookout",
      data: {
        'bookid': bookid,
        'bookname': bookname,
        'bookauthor': bookauthor,
        'booktranslator': booktranslator,
        'price': price,
        'code': code,
        'publishplace': publishplace,
        'publishtime': publishtime,
        'inmysqler': inmysqler
      },
      method: 'GET',
      success: function (res) { 
        if (res.data.succes) {
          console.log('删除成功');
          wx.showLoading({
            title: '删除成功',
            icon: 'loading',
            duration: 2000
          })
        } if (!res.data.success) { 
            wx.showLoading({
                 title: '该图书不在库存中',
                  icon: 'loading',
                  duration: 2000
           })
        }
      }
    })
  },
//查阅借阅记录
  searchrecords: function (e) {
    console.log("-----");
    var that = this;
    var inputinfo = e.detail.value.inputinfo;
    console.log("+++++." + inputinfo);
    wx.request({
      url: "http://localhost:8080/user/searchrecords",
      data: {
        'inputinfo': inputinfo,
      },
      method: 'GET',
      success: function (res) {
        console.log(res); 
        if(res.data.showlist){
          console.log(res); 
          that.setData({ 
            display_record: false,
            show_b: false,
            show_record: true,
            show_user:false,
            show_info: res.data.borrowid
          })
        } else if (res.data.showbook){
          console.log(res); 
          that.setData({
            
            display_record: false,
            show_b: true,
            show_record: false,
            show_user: false,
            showbook: res.data.bookid
          })


        } else if (res.data.showuser){
          console.log(res); 
          that.setData({
            display_record: false,
            show_b: false,
            show_record: false, 
            show_user: true,
            showuser: res.data.userid
          })

        }
        
      } 
    }) 
    },  


//查阅图书信息
  
  search_book: function(e) {
    console.log("-----");
    var that = this;
    var inputinfo = e.detail.value.inputinfo;
    console.log("+++++." + inputinfo);
    wx.request({
      url: "http://localhost:8080/user/searchbooks",
      data: {
        'inputinfo': inputinfo,
      },
      method: 'GET',
      success: function (res) {
        console.log(res);
        console.log(res.data.list + 2222);
        that.setData({
          query_book: false,
          show_book: true,
          show_bookinfo: res.data.list
        })
      }
    })
  }, 
//管理员中心
  
  managercenter: function(e) {
    console.log(e);
    var that=this;
    var adid = e.detail.value.adid;
    var adpass = e.detail.value.adpass;
    var adnewpass = e.detail.value.adnewpass;
    var againpass = e.detail.value.againpass;
    var admintel = e.detail.value.admintel; 
    var adminemaile = e.detail.value.adminemaile; 
    wx.request({
      url: "http://localhost:8080/user/managercenter",
      data: {
        'adid': adid,
        'adpass': adpass,
        'adnewpass': adnewpass,
        'againpass': againpass,
        'admintel': admintel, 
        'adminemaile': adminemaile
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data.success);
        if (res.data.success) {
          console.log(res.data.success + 修改成功);
          wx.showLoading({
            title: '修改成功',
            icon: 'loading',
            duration: 2000
          })
        } else {
          console.log(res.data.success + 2222);
          wx.showLoading({
            title: '密码有误',
            icon: 'loading',
            duration: 2000
          })
        }
      }
    })
  },
 //读者还书
  bookback: function (e) { 
    var that = this;
    var borrowid = e.detail.value.borrowid;  
      wx.request({
      url: "http://localhost:8080/user/bookback?borrow=" + borrowid ,
        method: 'GET',
        success: function (res) {
          console.log(res);
          console.log("----------");
          if(res.data.success){ 
            console.log('归还成功');
             wx.showLoading({
              title: '归还成功',
              icon: 'loading',
              duration: 2000
            }) 
          } if (!res.data.success){
            console.log('归还失败');
            wx.showLoading({
              title: '归还失败',
              icon: 'loading',
              duration: 2000
            }) 
          }
        }
      })
  },
  //修改图书信息
  changebookinfo: function (e) {
    console.log(e);
    var that=this;
    var bookid = e.detail.value.bookid;
    var bookname = e.detail.value.bookname;
    var bookauthor = e.detail.value.bookauthor;
    var booktranslator = e.detail.value.booktranslator;
    var price = e.detail.value.price;
    var code = e.detail.value.code;
    var publishplace = e.detail.value.publishplace;
    var publishtime = e.detail.value.publishtime;
    var inmysqler = e.detail.value.inmysqler;
    var inmysqlertime = e.detail.value.inmysqlertime;
    var state = e.detail.value.state;
    wx.request({
      url: "http://localhost:8080/user/changebookinfo",
      data: {
        'bookid': bookid,
        'bookname': bookname,
        'bookauthor': bookauthor,
        'booktranslator': booktranslator,
        'price': price,
        'code': code,
        'publishplace': publishplace,
        'publishtime': publishtime,
        'inmysqler': inmysqler,
        'inmysqlertime': inmysqlertime,
        'state': state
      },
      method: 'GET',
      success: function (res) {
        console.log(res);
        if (res.data.success) {
          console.log('修改成功');
          wx.showLoading({
            title: '修改成功',
            icon: 'loading',
            duration: 2000
          })
        } else {
          console.log('该图书不存在');
          wx.showLoading({
            title: '该图书不存在',
            icon: 'loading',
            duration: 2000
          })
        }
      }
    })
  },
  cleardata:function(e){  
    this.setData({
      inputvalue:'' ,
    }) 
  },
  clearinfo: function (e) {
    this.setData({
      input: '', 
    })
  },
  bid_click: function (e) {
    this.setData({
      bid: '',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    inputvalue:'图书编号/用户编号/借阅号',
    input: '输入图书编号',
    bid:'输入图书编号',
    u:'110101',
    Color: 'blue',
    color: 'blue',
    show_book:false,
    show_user:false,
    color_readerborrow: 'blueviolet',
    color_readerreturn: 'blueviolet',
    color_inbook: 'blueviolet',
    color_outbook: 'blueviolet',
    color_bookinfo: 'blueviolet',
    color_queryborrow: 'blueviolet',
    color_querybook: 'blueviolet',
    color_admincenter: 'blueviolet', 
    finger: false,
    display_record:false,
    show_record:false,
    show_book:false,
    reader_borrow: false,
    show_borrowinfo:false,
    reader_return: false,
    in_book: false,
    out_book: false,
    book_info: false,
    query_borrow: false,
    query_book: false, 
    admin_center: false,
    id:'',
    // 借阅记录
    col:[
      {
        name: '图书编号',
        info: '2018110'
      },
      {
        name: '作者',
        info: '李晓晓'
      },
      {
        name: '译者',
        info: '凡心'
      },
      {
        name: '价格',
        info: '45.9'
      },
      {
        name: '出版社',
        info: '人民教育'
      },
      {
        name: '出版日期',
        info: '2018.1.2'
      },
      {
        name: 'ISBN编码',
        info: '0-415-15577-0'
      },
      {
        name: '入库者',
        info: '小尔'
      },
      {
        name: '借阅号',
        info: '251323'
      },
      {
        name: '应还日期',
        info: '2018.6.10'
      },
      {
        name: '实还日期',
        info: ''
      },
        
    ],
    // 显示借阅信息
    show_info:[
      {
        name: '借阅号',
        info: '2018110'
      },
      {
        name: '图书名',
        info: 'c#'
      },
      {
        name: '应还日期',
        info: '2018.6.10'
      },
      {
        name: '实还日期',
        info: ''
      }
    ],
     info:[
       {
         id:'110110101',
         name:'c#',
         date:'2018-6-10'
       },
       {
         id: '110110101',
         name: 'java应用开发',
         date: '2018-6-30'
       },
       {
         id: '110110101',
         name: 'C语言',
         date: '2018-6-22'
       }
     ],
    //  图书信息
    book:[
      { 
        name: '图书编号',
        info: '2018110'
      },
      {
        name: '作者',
        info: '李萌'
      },
      {
        name: '译者',
        info: '泪莎'
      },
      {
        name: '价格',
        info: '36.8'
      },
      {
        name: '出版社',
        info: '上海'
      },
      {
        name: '出版日期',
        info: '2018.1.5'
      },
      {
        name: 'ISBN编码',
        info: '0-415-15577-0'
      },
      {
        name: '入库者',
        info: '任佳'
      },
      {
        name: '入库时间',
        info: '2018.5.6'
      },
      {
        name: '是否借出',
        info: '是'
      } 
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var id = options.id;
      this.setData({
      id: id
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