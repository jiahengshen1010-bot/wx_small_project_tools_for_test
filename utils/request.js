const request = (options) => {
  return new Promise((resolve, reject) => {
    wx.request({
      ...options,
      success: resolve,
      fail: reject,
    });
  });
};

module.exports = {
  request,
};
