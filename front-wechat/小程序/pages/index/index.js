//index.js
//获取应用实例
const app = getApp()

Page({ 
  data: { 
  },
   
  jumptest: function(e) {
   wx.request({
     url: 'http://localhost:8080/addBook',
     data:{
       'x':'1',
       'y':'2' 
     },
     header: {
         'content-type': 'application/json'  
        },
     method:'GET',
     success: function(res){
       console.log("request success");
       console.log("return data="+JSON.stringify(res.data.code)); 
     },
     fail:function(){
       console.log("request fail");
       console.log("return data=" + JSON.stringify(res.data)); 
     },
     complete:function(){
       console.log("request complete");
     }
  }) 
  },

});