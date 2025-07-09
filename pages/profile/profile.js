Page({
  data: {
    userInfo: {
      nickName: '健康达人',
      avatarUrl: '/images/default-avatar.png'
    },
    signature: '记录每一天，迈向更健康的自己',
    signatures: [
      '记录每一天，迈向更健康的自己',
      '小步前行，大健康在望',
      '健康生活，从点滴开始',
      '每一次选择，都是对自己的爱'
    ]
  },

  onLoad() {
    let storedInfo = wx.getStorageSync('userInfo');
    if (storedInfo && storedInfo.nickName) {
      this.setData({ userInfo: storedInfo });
    }
    this.randomSignature();
  },

  randomSignature() {
    const signatures = this.data.signatures;
    const randomIndex = Math.floor(Math.random() * signatures.length);
    this.setData({ signature: signatures[randomIndex] });
    setTimeout(() => this.randomSignature(), 5000);
  },

  goToRecords() { wx.navigateTo({ url: '/pages/records/records' }); },
  goToSettings() { wx.navigateTo({ url: '/pages/settings/settings' }); },
  goToAbout() { wx.navigateTo({ url: '/pages/about/about' }); },
  goBack() { wx.switchTab({ url: '/pages/index/index' }); }
});
