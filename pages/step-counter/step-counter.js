Page({
  data: {
    backgroundImage: '../../assets/sport/背景.jpg',
    currentDate: '',
    steps: 0,
  },

  onLoad() {
    this.setCurrentDate();
    this.checkAuthAndGetSteps(); // 页面加载时检查权限并获取步数
  },

  setCurrentDate() {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    this.setData({ currentDate: formattedDate });
  },

  // 检查权限并获取步数
  checkAuthAndGetSteps() {
    const that = this;
    wx.authorize({
      scope: 'scope.werun', // 请求微信运动权限
      success() {
        that.getWeRunData(); // 授权成功后获取步数
      },
      fail() {
        // 用户拒绝授权，弹出提示引导开启权限
        wx.showModal({
          title: '授权提示',
          content: '需要授权微信运动数据才能查看步数，是否前往设置？',
          success(res) {
            if (res.confirm) {
              wx.openSetting({
                success: (res) => {
                  if (res.authSetting['scope.werun']) {
                    that.getWeRunData(); // 权限开启后再次获取
                  } else {
                    wx.showToast({ title: '未授权，无法获取步数', icon: 'none' });
                  }
                }
              });
            }
          }
        });
      }
    });
  },

  // 获取微信步数数据
  getWeRunData() {
    wx.getWeRunData({
      success: (res) => {
        // 注意：这里返回的是加密数据 encryptedData 和 iv
        // 在微信开发者工具模拟器中可以直接获取 stepInfoList
        const stepInfo = res.stepInfoList || [];
        const todaySteps = stepInfo.length > 0 ? stepInfo[stepInfo.length - 1].step : 0;
        this.setData({ steps: todaySteps });
      },
      fail: (err) => {
        wx.showToast({ title: '获取步数失败', icon: 'none' });
        console.error('获取微信步数失败:', err);
        this.setData({ steps: 0 });
      }
    });
  },

  refreshSteps() {
    this.getWeRunData();
    wx.showToast({ title: '刷新中...', icon: 'loading' });
  },

  goBack() {
    wx.navigateBack();
  }
});
