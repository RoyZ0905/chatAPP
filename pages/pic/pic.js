Page({
  data: {
    msglist: [],
    scrollTop: 0
  },
  onLoad: function (options) {
    this.setData({
      title: options.title
    })
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  send: function (e) {
    console.log(e.detail.value.msg);
    var msg = { 'type': 0, 'msg': e.detail.value.msg };
    var msglist = this.data.msglist;
    msglist.push(msg);
    this.setData({
      msglist: msglist
    });
    this.getReply(e.detail.value.msg);
  },
  getReply: function (sendMessage) {
    var that = this;
    // var url = "http://image.baidu.com/i?tn=baiduimagejson";
    var url = "http://apis.baidu.com/image_search/search/search";
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      data: {
        'word': sendMessage,
        'pn': 0,
        'rn': 1,
        'ie': 'utf-8'
      },
      header: {
        'content-type': 'application/json',
        'apikey': 'f47d91ead6700025d67e8fd6128894ca',
      },
      success: function (res) {
        console.log(res.data.data.ResultArray[0].ObjUrl);
        var msg = { 'type': 1, 'msg': res.data.data.ResultArray[0].ObjUrl};
        var msglist = that.data.msglist;
        msglist.push(msg);
        that.setData({
          msglist: msglist
        });
        that.setData({
          scrollTop: that.data.scrollTop + 400
        })
      }
    })
  }
})