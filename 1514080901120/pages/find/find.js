var temp = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [
      {
        bName: "红楼梦",
        writer: "曹雪芹"
      },
      {
        bName: "三国演义",
        writer: "罗贯中"
      },
      {
        bName: "水浒传",
        writer: "施耐庵"
      },
      {
        bName: "西游记",
        writer: "吴承恩"
      }
    ],
    
    result:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 设置窗口大小
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          windowHeight: res.windowHeight - 5,
          windowWidth: res.windowWidth
        })
        //console.dir(that.data.windowHeight)
      }
    })

    // 从服务器取回来 JSON
    wx.request({
      url: 'https://infoaas.com/data/1514080901128/ComicNew.json',
      //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //console.log(res.data.list)
        that.setData({
          hasError: true,
          result:res.data.list
        })
      }
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

  onUpper: function () { },
  onLower: function () {
    var that = this
    that.setData({
      isLower: true
    });
    // load more data
    console.log("onLower")
  },
  onScroll: function () {
    console.log("onScroll");
    /*
    temp = this.data.books.length;
    var ob = {
      "CNtitle": "一本新书",
      "CNdesc": "新人",
      "CNpicture":"picture"
    }
    if (temp < 100) {
      this.data.result.push(ob);
      this.setData({
        result: this.data.result,
      })
    }
    */
  },
  gotableinfo:function(e){
    var that = this;
   // var post = that.data.result
    var j =e.currentTarget.dataset.index
    wx.navigateTo({
      url: '../table/table?index=' + j
    })
  }

})
