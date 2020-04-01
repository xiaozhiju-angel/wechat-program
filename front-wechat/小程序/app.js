App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    
  },
  globalData:{ 
     flag_login:'', 
     //头像那里要传来的值 
     username:'',
     loginid:'',
     //读者input变量
     readerid:'',
     userid: '',
     depart:'',
     professional: '',
     tel:'',
     emaile:'',
     max:'',
     date:'',
     //图书管理员input变量
     adminid:'',
     adminname: '',
     adminpassword: '',
     admintel: '',
     adminemaile: '',


  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
