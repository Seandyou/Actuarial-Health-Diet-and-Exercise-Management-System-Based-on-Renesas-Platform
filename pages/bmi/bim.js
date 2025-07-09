Page({
  data: {
    weight: 0, // 体重
    height: 0, // 身高
    bmiValue: '-', // 计算出的 BMI 值
    bmiCategory: '-', // 健康提示
    showRecipeButton: false, // 控制"制定食谱"按钮显示
  },

  // 体重输入处理
  onWeightInput(e) {
    this.setData({
      weight: parseFloat(e.detail.value),
    });
  },

  // 身高输入处理
  onHeightInput(e) {
    this.setData({
      height: parseFloat(e.detail.value),
    });
  },

  // 计算 BMI
  calculateBMI() {
    const { weight, height } = this.data;

    // 检查输入是否合法
    if (isNaN(weight) || weight <= 0) {
      wx.showToast({
        title: '请输入有效体重',
        icon: 'none',
      });
      return;
    }

    if (isNaN(height) || height <= 0) {
      wx.showToast({
        title: '请输入有效身高',
        icon: 'none',
      });
      return;
    }

    // 计算 BMI 值
    const bmi = weight / ((height / 100) * (height / 100)); // 身高单位转换为米

    // 判断 BMI 分类
    let category = '';
    if (bmi < 18.5) {
      category = '体重过轻';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = '正常范围';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = '超重';
    } else {
      category = '肥胖';
    }

    // 存储 BMI 分类到本地存储
    wx.setStorageSync('bmiCategory', category);

    // 更新页面数据
    this.setData({
      bmiValue: bmi.toFixed(2),
      bmiCategory: category,
      showRecipeButton: true, // 显示"制定食谱"按钮
    });
  },

  // 跳转到制定食谱页面（可以根据需求修改这里）
  goToRecipe() {
    wx.navigateTo({
      url: '/pages/food/food', // 这里的页面路径可以替换成你实际的页面路径
    });
  }
});
