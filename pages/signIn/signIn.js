Page({
  data: {
    signInStatus: '今天还没签到',  // 默认状态
    buttonText: '点击签到',        // 按钮文字
    lastSignInDate: '',           // 上次签到日期
  },

  onLoad() {
    this.checkSignInStatus();
  },

  // 检查签到状态
  checkSignInStatus() {
    const lastSignInDate = wx.getStorageSync('lastSignInDate'); // 获取存储的上次签到日期
    const today = new Date().toLocaleDateString(); // 获取今天的日期

    if (lastSignInDate === today) {
      this.setData({
        signInStatus: '今天已签到',
        buttonText: '今天已签到',
      });
    } else {
      this.setData({
        signInStatus: '今天还没签到',
        buttonText: '点击签到',
      });
    }

    this.setData({
      lastSignInDate: lastSignInDate || '未签到'
    });
  },

  // 签到操作
  signIn() {
    const today = new Date().toLocaleDateString();
    const lastSignInDate = wx.getStorageSync('lastSignInDate');

    if (lastSignInDate === today) {
      wx.showToast({
        title: '今天已经签到过啦!',
        icon: 'none',
      });
    } else {
      wx.setStorageSync('lastSignInDate', today); // 保存今天的签到日期
      this.setData({
        signInStatus: '今天已签到',
        buttonText: '今天已签到',
        lastSignInDate: today,
      });
      wx.showToast({
        title: '签到成功!',
        icon: 'success',
      });
    }
  }
});
