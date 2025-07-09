Page({
  data: {
    hasCalculatedBMI: false, // 检查是否计算过 BMI
    mealTables: [], // 存储生成的食谱表格
    foods: [
      "煎蛋", "全麦面包", "酸奶", "香蕉", "炒鸡胸肉", "土豆泥", "蔬菜沙拉", "米饭", "牛肉炒饭", "炒时蔬",
      "鸡蛋", "燕麦粥", "橙汁", "烤鸡胸肉", "红薯", "蔬菜", "糙米", "三文鱼", "炒菜花", "全麦面包",
      "低脂酸奶", "全麦吐司", "坚果", "苹果", "蔬菜沙拉", "烤鱼", "藜麦", "胡萝卜", "蒸蔬菜", "青椒",
      "水煮蛋", "低脂牛奶", "胡椒粉", "绿叶蔬菜", "鳄梨", "豆腐", "烤红薯", "番茄", "菠菜", "菠萝",
      "果仁", "菠菜汤", "肉桂", "草莓", "葡萄", "杏仁", "煮玉米", "黑木耳", "蘑菇", "黄豆", "糙米粥",
      "苹果醋", "辣椒", "胡椒", "红豆", "藕片", "香菇", "黄鳝", "菜花", "芒果", "豆腐汤", "红豆粥",
      "牛奶", "绿豆汤", "海带", "豆腐脑", "鲑鱼", "葱花", "酸梅汤", "小龙虾", "海鲜汤", "烤羊排",
      "橄榄油", "辣白菜", "洋葱", "核桃", "蛋白粉", "豌豆", "麻辣香锅", "菜肴", "烤鱼",
      "酱鸭", "蜜汁火腿", "烤大葱", "肉类炒饭", "海鲜炒饭", "鸡胸肉炒饭", "炒面", "番茄炒蛋",
      "鸡翅", "鸭脯肉", "鳗鱼", "牛奶酪", "蔬菜炒米", "豆腐丝", "羊肉串", "黄花菜", "黄鳝", "金针菇",
      "海带丝", "鳕鱼", "韭菜", "胡椒粉", "茄子", "莲藕", "黄豆芽", "素炒饭", "炖汤", "红烧肉",
      "土豆炖牛肉", "炒年糕", "肉包子", "虾仁炒饭", "牛肉饼", "猪排", "酸菜", "鸡腿", "猪肚", "火锅",
      "鲍鱼", "龙虾", "羊骨汤", "骨头汤", "椰浆", "橙皮", "茉莉花茶", "蜂蜜水", "绿茶", "菊花茶"
    ]
  },

  onLoad() {
    this.checkBMIStatus();
  },

  // 检查 BMI 是否已计算
  checkBMIStatus() {
    const bmiCategory = wx.getStorageSync('bmiCategory'); // 从本地存储获取 BMI 分类
    if (bmiCategory) {
      this.setData({
        hasCalculatedBMI: true,
        mealTables: this.generateMealTables(bmiCategory), // 生成食谱
      });
    }
  },

  // 生成每个 BMI 分类的 5 个食谱
  generateMealTables(bmiCategory) {
    let tables = [];
    for (let i = 1; i <= 5; i++) {
      tables.push(this.generateMealTable(bmiCategory, i));
    }
    return tables;
  },

  // 生成每个表格，包含一个完整的早餐、午餐和晚餐推荐
  generateMealTable(bmiCategory, tableIndex) {
    return {
      category: bmiCategory,
      breakfast: this.getRecommendedMeal(bmiCategory, 'breakfast', tableIndex),
      lunch: this.getRecommendedMeal(bmiCategory, 'lunch', tableIndex),
      dinner: this.getRecommendedMeal(bmiCategory, 'dinner', tableIndex),
    };
  },

  // 根据 BMI 分类和餐次推荐食谱
  getRecommendedMeal(bmiCategory, mealType, tableIndex) {
    const randomFood = (type) => {
      const randomIndex = Math.floor(Math.random() * this.data.foods.length);
      return this.data.foods[randomIndex];
    };

    let mealRecommendation = '';
    switch (bmiCategory) {
      case '体重过轻':
        if (mealType === 'breakfast') {
          mealRecommendation = `${randomFood()}、${randomFood()}、${randomFood()}`;
        } else if (mealType === 'lunch') {
          mealRecommendation = `${randomFood()}、${randomFood()}、${randomFood()}`;
        } else if (mealType === 'dinner') {
          mealRecommendation = `${randomFood()}、${randomFood()}、${randomFood()}`;
        }
        break;
      case '正常范围':
        if (mealType === 'breakfast') {
          mealRecommendation = `${randomFood()}、${randomFood()}、${randomFood()}`;
        } else if (mealType === 'lunch') {
          mealRecommendation = `${randomFood()}、${randomFood()}、${randomFood()}`;
        } else if (mealType === 'dinner') {
          mealRecommendation = `${randomFood()}、${randomFood()}、${randomFood()}`;
        }
        break;
      case '超重':
        if (mealType === 'breakfast') {
          mealRecommendation = `${randomFood()}、${randomFood()}、${randomFood()}`;
        } else if (mealType === 'lunch') {
          mealRecommendation = `${randomFood()}、${randomFood()}、${randomFood()}`;
        } else if (mealType === 'dinner') {
          mealRecommendation = `${randomFood()}、${randomFood()}、${randomFood()}`;
        }
        break;
      case '肥胖':
        if (mealType === 'breakfast') {
          mealRecommendation = `${randomFood()}、${randomFood()}、${randomFood()}`;
        } else if (mealType === 'lunch') {
          mealRecommendation = `${randomFood()}、${randomFood()}、${randomFood()}`;
        } else if (mealType === 'dinner') {
          mealRecommendation = `${randomFood()}、${randomFood()}、${randomFood()}`;
        }
        break;
      default:
        mealRecommendation = '请先计算 BMI！';
        break;
    }
    return mealRecommendation;
  },

  // 跳转到 BMI 计算页面
  goToBMIPage() {
    wx.navigateTo({
      url: '/pages/bmi/bim',
    });
  },
});
