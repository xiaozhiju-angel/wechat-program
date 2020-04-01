// pages/bookadmin/bookadmin.js
Page({ 
   
  pickerchange:function(e){
   console.log(e.detail.value);
  //  e.detailvalue.value保存的是选择了第几个
  //  picker是用来保存选择的最终结果
   this.setData({
     picker:this.data.arrpicker[e.detail.value],
   })
  },
  searchbooks:function(e){
   console(e);
   var key=this.data.picker.key;
   var value=e.detail.value.value;
   //向服务器
   wx.request({
     url:'http://localhost:8080/book/newservice',
     data:{'key':key,'value':value},
     success:function(res){
       console.log(res);
     }
   })
  },

  /**
   * 页面的初始数据
   */
  data: { 
    
    picker:{key:'',value:'请选择'},
    arrpicker:[
      {
        key:'id',
        value:'图书编号'
      },

      {
        key: 'id',
        value: '图书名'
      },
      { 
        key: 'id',
        value: '借阅号'
      },  
      ],
    // 借阅记录

    col: [
      {
        name: '图书编号',
        info: '2018110'
      },
      {
        name: '作者',
        info: '2018110'
      },
      {
        name: '译者',
        info: '2018110'
      },
      {
        name: '价格',
        info: '2018110'
      },
      {
        name: '出版社',
        info: '2018110'
      },
      {
        name: '出版日期',
        info: '2018110'
      },
      {
        name: 'ISBN编码',
        info: '2018110'
      },
      {
        name: '入库者',
        info: '2018110'
      },
      {
        name: '借阅号',
        info: '2018110'
      },
      {
        name: '应还日期',
        info: '2018110'
      },
      {
        name: '实还日期',
        info: '2018110'
      },

    ],
    // 显示借阅信息
    show_info: [
      {
        name: '借阅号',
        info: '2018110'
      },
      {
        name: '图书名',
        info: '2018110'
      },
      {
        name: '应还日期',
        info: '2018110'
      },
      {
        name: '实还日期',
        info: '2018110'
      }
    ],
    info: [
      {
        id: '110110101',
        name: 'c#',
        date: '2018-6-10'
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
    book: [
      {
        name: '图书编号',
        info: '2018110'
      },
      {
        name: '作者',
        info: '2018110'
      },
      {
        name: '译者',
        info: '2018110'
      },
      {
        name: '价格',
        info: '2018110'
      },
      {
        name: '出版社',
        info: '2018110'
      },
      {
        name: '出版日期',
        info: '2018110'
      },
      {
        name: 'ISBN编码',
        info: '2018110'
      },
      {
        name: '入库者',
        info: '2018110'
      },
      {
        name: '入库时间',
        info: '2018110'
      },
      {
        name: '是否借出',
        info: '2018110'
      }
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