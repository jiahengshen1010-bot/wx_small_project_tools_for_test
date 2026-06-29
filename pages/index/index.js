const app = getApp();

Page({
  data: {
    appName: '',
    count: 0,
  },

  onLoad() {
    this.setData({
      appName: app.globalData.appName,
    });
  },

  handleIncrement() {
    this.setData({
      count: this.data.count + 1,
    });
  },

  handleReset() {
    this.setData({
      count: 0,
    });
  },

  goToLogs() {
    wx.navigateTo({
      url: '/pages/logs/logs',
    });
  },
});
