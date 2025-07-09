Page({
  data: {
    sportList: ['跑步', '跳绳', '骑行', '瑜伽', '羽毛球', '游泳', '排球', '乒乓球'],
    sportIcons: [
      '../../assets/sport/跑步.jpg',     // 跑步图片路径
      '../../assets/sport/跳绳.jpg',     // 跳绳图片路径
      '../../assets/sport/骑行.jpg',     // 骑行图片路径
      '../../assets/sport/瑜伽.jpg',     // 瑜伽图片路径
      '../../assets/sport/羽毛球.jpg',   // 羽毛球图片路径
      '../../assets/sport/游泳.jpg',     // 游泳图片路径
      '../../assets/sport/排球.jpg',     // 排球图片路径
      '../../assets/sport/乒乓球.jpg',   // 乒乓球图片路径
    ],
    selectedSport: '',  // 记录当前选中的运动
    activeIndex: -1     // 记录当前触摸放大的索引
  },

  // 点击运动项
  selectSport(e) {
    const index = e.currentTarget.dataset.index;
    const sport = this.data.sportList[index];
    this.setData({ selectedSport: sport });
    wx.showToast({
      title: `选择了${sport}`,
      icon: 'none'
    });
    wx.navigateTo({
      url: `/pages/sport-detail/sport-detail?sport=${sport}&index=${index}`
    });
    // 后续可在此处添加更多逻辑
  },

  // 触摸开始时放大
  zoomIn(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({ activeIndex: index });
  },

  // 触摸结束时恢复
  zoomOut() {
    this.setData({ activeIndex: -1 });
  },

  onLoad() {
    // 页面加载时初始化
  }
});
