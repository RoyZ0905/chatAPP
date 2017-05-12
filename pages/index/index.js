//index.js
//获取应用实例
var app = getApp()
Page({
  

  onLoad: function () {
      wx.showModal({
        content: "Roy希望获取你的头像和用户名信息，可以嘛？",
        success: function (res) {
          if (res.confirm) {
            data: {
              userInfo: { }
            };
            var that = this
            app.getUserInfo(
              function (userInfo) {
                //更新数据
                that.setData({
                  userInfo: userInfo
                })
              })
            }
          else if (res.cancel) {
            console.log('用户点击取消')
          }
        },
        // confirmText: "可以哦",
        // cancelText: "不行！"
      })
      console.log('onLoad')
      
  }
})