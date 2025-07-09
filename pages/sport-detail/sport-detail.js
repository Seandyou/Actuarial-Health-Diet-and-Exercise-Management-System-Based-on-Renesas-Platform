Page({
  data: {
    sport: '',
    index: 0,
    sportIcons: [
      '../../assets/sport/跑步.jpg',
      '../../assets/sport/跳绳.jpg',
      '../../assets/sport/骑行.jpg',
      '../../assets/sport/瑜伽.jpg',
      '../../assets/sport/羽毛球.jpg',
      '../../assets/sport/游泳.jpg',
      '../../assets/sport/排球.jpg',
      '../../assets/sport/乒乓球.jpg',
    ],
    dataLabel1: '',
    dataValue1: 0,
    dataUnit1: '',
    dataLabel2: '',
    dataValue2: 0,
    dataUnit2: '',
    duration: 0,
    isRunning: false,
    timer: null,
    // 跑步特定数据
    targetDistance: 0,
    showTargetInput: false,
    timerDisplay: '00:00',
    secondsElapsed: 0,
  },

  // 页面加载时接收参数
  onLoad(options) {
    const { sport, index } = options;
    this.setData({ sport, index: parseInt(index) });
    this.updateSportData(sport);
  },

  // 根据运动类型更新数据展示
  updateSportData(sport) {
    let data = {};
    switch (sport) {
      case '跑步':
        data = { dataLabel1: '距离', dataUnit1: '公里', dataLabel2: '步数', dataUnit2: '步' };
        break;
      case '跳绳':
        data = { dataLabel1: '次数', dataUnit1: '次', dataLabel2: '卡路里', dataUnit2: '千卡' };
        break;
      case '骑行':
        data = { dataLabel1: '距离', dataUnit1: '公里', dataLabel2: '速度', dataUnit2: '公里/小时' };
        break;
      case '瑜伽':
        data = { dataLabel1: '时长', dataUnit1: '分钟', dataLabel2: '卡路里', dataUnit2: '千卡' };
        break;
      case '羽毛球':
        data = { dataLabel1: '挥拍', dataUnit1: '次', dataLabel2: '卡路里', dataUnit2: '千卡' };
        break;
      case '游泳':
        data = { dataLabel1: '距离', dataUnit1: '米', dataLabel2: '圈数', dataUnit2: '圈' };
        break;
      case '排球':
        data = { dataLabel1: '击球', dataUnit1: '次', dataLabel2: '卡路里', dataUnit2: '千卡' };
        break;
      case '乒乓球':
        data = { dataLabel1: '击球', dataUnit1: '次', dataLabel2: '卡路里', dataUnit2: '千卡' };
        break;
    }
    this.setData({ ...data, dataValue1: 0, dataValue2: 0, duration: 0 });
  },

  // 开始/暂停运动
  toggleSport() {
    if (this.data.isRunning) {
      clearInterval(this.data.timer);
      this.setData({ isRunning: false });
    } else {
      if (this.data.sport === '跑步') {
        this.setData({ showTargetInput: true });
      } else {
        this.startSport();
        this.setData({ isRunning: true });
      }
    }
  },

  // 设置跑步目标距离
  setTargetDistance(e) {
    this.setData({ targetDistance: e.detail.value });
  },

  // 确认跑步目标并开始
  confirmTarget() {
    if (!this.data.targetDistance || this.data.targetDistance <= 0) {
      wx.showToast({ title: '请输入有效目标距离', icon: 'none' });
      return;
    }
    this.setData({ showTargetInput: false });
    this.startSport();
    this.setData({ isRunning: true });
  },

  // 开始运动逻辑
  startSport() {
    const sport = this.data.sport;
    let duration = this.data.duration;
    let secondsElapsed = this.data.secondsElapsed;

    const timer = setInterval(() => {
      duration += 1;
      let dataValue1 = this.data.dataValue1;
      let dataValue2 = this.data.dataValue2;

      if (sport === '跑步') {
        secondsElapsed += 1;
        const minutes = Math.floor(secondsElapsed / 60);
        const seconds = secondsElapsed % 60;
        const timerDisplay = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        dataValue1 += 0.01; // 距离增加
        dataValue2 += 15;   // 步数增加
        this.setData({ timerDisplay, secondsElapsed });
      } else if (sport === '跳绳') {
        dataValue1 += 2;    // 次数
        dataValue2 += 0.1;  // 卡路里
      } else if (sport === '乒乓球') {
        dataValue1 += 3;    // 击球次数
        dataValue2 += 0.15; // 卡路里
      } // 可扩展其他运动

      this.setData({ duration, dataValue1: dataValue1.toFixed(2), dataValue2: dataValue2.toFixed(1) });
    }, 1000); // 每秒更新

    this.setData({ timer });
  },

  // 查看历史记录
  viewHistory() {
    wx.navigateTo({
      url: '/pages/history/history'
    });
  },

  onUnload() {
    if (this.data.timer) clearInterval(this.data.timer);
  }
});
