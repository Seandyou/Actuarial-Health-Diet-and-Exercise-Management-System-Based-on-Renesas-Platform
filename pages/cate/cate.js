Page({
  data: {
    totalCalories: 0,
    breakfastCalories: 0,
    lunchCalories: 0,
    dinnerCalories: 0,
    breakfastColor: "#FFFFFF",
    lunchColor: "#FFFFFF",
    dinnerColor: "#FFFFFF",
    breakfastProgress: 0,
    lunchProgress: 0,
    dinnerProgress: 0,
    breakfastProgressColor: "#4CAF50",
    lunchProgressColor: "#4CAF50",
    dinnerProgressColor: "#4CAF50",
    breakfastItems: [
      { name: "煎蛋", calories: 200, count: 0 },
      { name: "包子", calories: 250, count: 0 },
      { name: "煎饼果子", calories: 300, count: 0 },
      { name: "油条", calories: 150, count: 0 },
      { name: "豆浆", calories: 100, count: 0 },
      { name: "牛奶", calories: 120, count: 0 },
      { name: "燕麦粥", calories: 150, count: 0 },
      { name: "全麦面包", calories: 180, count: 0 },
      { name: "水煮蛋", calories: 160, count: 0 },
      { name: "三明治", calories: 250, count: 0 },
      { name: "酸奶", calories: 130, count: 0 },
      { name: "鸡蛋饼", calories: 220, count: 0 },
      { name: "吐司", calories: 170, count: 0 },
      { name: "玉米", calories: 90, count: 0 },
      { name: "红薯", calories: 110, count: 0 },
      { name: "水果沙拉", calories: 140, count: 0 },
      { name: "蒸饺", calories: 200, count: 0 },
      { name: "糯米饭", calories: 230, count: 0 },
      { name: "豆腐脑", calories: 100, count: 0 },
      { name: "烧麦", calories: 210, count: 0 },
      { name: "花卷", calories: 180, count: 0 },
      { name: "煎饺", calories: 240, count: 0 },
      { name: "米粥", calories: 80, count: 0 },
      { name: "鸡蛋羹", calories: 150, count: 0 },
      { name: "面包卷", calories: 200, count: 0 },
      { name: "香蕉", calories: 90, count: 0 },
      { name: "苹果", calories: 70, count: 0 },
      { name: "橙子", calories: 60, count: 0 },
      { name: "猕猴桃", calories: 80, count: 0 },
      { name: "蓝莓", calories: 50, count: 0 },
      { name: "草莓", calories: 40, count: 0 },
      { name: "芒果", calories: 100, count: 0 },
      { name: "荞麦面", calories: 130, count: 0 },
      { name: "南瓜粥", calories: 120, count: 0 },
      { name: "紫薯", calories: 110, count: 0 },
      { name: "杂粮饼", calories: 160, count: 0 },
      { name: "奶昔", calories: 180, count: 0 },
      { name: "煎培根", calories: 250, count: 0 },
      { name: "火腿片", calories: 200, count: 0 },
      { name: "鸡肉卷", calories: 220, count: 0 },
      { name: "煎香肠", calories: 230, count: 0 },
      { name: "奶酪", calories: 150, count: 0 },
      { name: "松饼", calories: 210, count: 0 },
      { name: "华夫饼", calories: 240, count: 0 },
      { name: "可颂", calories: 260, count: 0 },
      { name: "贝果", calories: 200, count: 0 },
      { name: "法式吐司", calories: 230, count: 0 },
      { name: "煎土豆饼", calories: 180, count: 0 },
      { name: "蔬菜煎饼", calories: 150, count: 0 },
      { name: "燕麦棒", calories: 170, count: 0 },
      { name: "鸡蛋卷", calories: 190, count: 0 },
      { name: "米糕", calories: 140, count: 0 },
      { name: "绿豆粥", calories: 110, count: 0 },
      { name: "红豆包", calories: 200, count: 0 },
      { name: "芝麻球", calories: 220, count: 0 },
      { name: "春卷", calories: 180, count: 0 },
      { name: "小笼包", calories: 210, count: 0 },
      { name: "肉夹馍", calories: 250, count: 0 },
      { name: "葱油饼", calories: 230, count: 0 },
      { name: "鸡丝粥", calories: 130, count: 0 },
      { name: "皮蛋粥", calories: 140, count: 0 },
      { name: "海鲜粥", calories: 150, count: 0 },
      { name: "杂酱面", calories: 200, count: 0 },
      { name: "热干面", calories: 180, count: 0 },
      { name: "牛肉面", calories: 220, count: 0 },
      { name: "鸡蛋面", calories: 190, count: 0 },
      { name: "凉皮", calories: 160, count: 0 },
      { name: "米粉", calories: 140, count: 0 },
      { name: "肠粉", calories: 170, count: 0 },
      { name: "烧饼", calories: 200, count: 0 },
      { name: "麻花", calories: 210, count: 0 },
      { name: "豆沙饼", calories: 230, count: 0 },
      { name: "咸鸭蛋", calories: 180, count: 0 },
      { name: "茶叶蛋", calories: 160, count: 0 },
      { name: "煮玉米", calories: 100, count: 0 },
      { name: "蒸南瓜", calories: 90, count: 0 },
      { name: "烤红薯", calories: 120, count: 0 },
      { name: "薯条", calories: 200, count: 0 },
      { name: "煎蘑菇", calories: 110, count: 0 },
      { name: "炒青菜", calories: 80, count: 0 },
      { name: "蒸山药", calories: 100, count: 0 },
      { name: "土豆泥", calories: 130, count: 0 },
      { name: "蔬菜汤", calories: 70, count: 0 },
      { name: "鸡蛋汤", calories: 90, count: 0 },
      { name: "番茄蛋汤", calories: 100, count: 0 },
      { name: "紫菜蛋汤", calories: 80, count: 0 },
      { name: "豆腐汤", calories: 90, count: 0 },
      { name: "牛奶麦片", calories: 150, count: 0 },
      { name: "水果麦片", calories: 140, count: 0 },
      { name: "坚果", calories: 200, count: 0 },
      { name: "葡萄干", calories: 130, count: 0 },
      { name: "核桃", calories: 180, count: 0 },
      { name: "杏仁", calories: 170, count: 0 },
      { name: "腰果", calories: 190, count: 0 },
      { name: "花生", calories: 160, count: 0 }

    ],
 
    lunchItems: [
      { name: "炒饭", calories: 400, count: 0 },
      { name: "炸鸡", calories: 350, count: 0 },
      { name: "烤肉", calories: 500, count: 0 },
      { name: "麻辣烫", calories: 450, count: 0 },
      { name: "鱼香肉丝", calories: 300, count: 0 },
      { name: "宫保鸡丁", calories: 320, count: 0 },
      { name: "红烧肉", calories: 450, count: 0 },
      { name: "水煮牛肉", calories: 400, count: 0 },
      { name: "糖醋里脊", calories: 380, count: 0 },
      { name: "回锅肉", calories: 420, count: 0 },
      { name: "牛肉炒饭", calories: 410, count: 0 },
      { name: "鸡肉饭", calories: 360, count: 0 },
      { name: "海鲜炒饭", calories: 390, count: 0 },
      { name: "杂酱面", calories: 400, count: 0 },
      { name: "牛肉面", calories: 420, count: 0 },
      { name: "热干面", calories: 380, count: 0 },
      { name: "炸酱面", calories: 410, count: 0 },
      { name: "担担面", calories: 390, count: 0 },
      { name: "凉面", calories: 350, count: 0 },
      { name: "米粉", calories: 340, count: 0 },
      { name: "炒粉", calories: 360, count: 0 },
      { name: "鸡丝面", calories: 370, count: 0 },
      { name: "蒸鱼", calories: 300, count: 0 },
      { name: "红烧鱼", calories: 350, count: 0 },
      { name: "清蒸虾", calories: 280, count: 0 },
      { name: "蒜蓉虾", calories: 310, count: 0 },
      { name: "椒盐鱿鱼", calories: 340, count: 0 },
      { name: "烤鸡翅", calories: 380, count: 0 },
      { name: "炸鸡腿", calories: 400, count: 0 },
      { name: "鸡肉咖喱", calories: 360, count: 0 },
      { name: "牛肉咖喱", calories: 390, count: 0 },
      { name: "土豆牛肉", calories: 370, count: 0 },
      { name: "红烧鸡块", calories: 350, count: 0 },
      { name: "青椒炒肉", calories: 320, count: 0 },
      { name: "木耳炒肉", calories: 310, count: 0 },
      { name: "西红柿炒蛋", calories: 280, count: 0 },
      { name: "酸辣土豆丝", calories: 250, count: 0 },
      { name: "炒青菜", calories: 200, count: 0 },
      { name: "清炒西兰花", calories: 220, count: 0 },
      { name: "蒜蓉菠菜", calories: 210, count: 0 },
      { name: "炒豆芽", calories: 190, count: 0 },
      { name: "麻婆豆腐", calories: 300, count: 0 },
      { name: "红烧豆腐", calories: 280, count: 0 },
      { name: "鱼头汤", calories: 320, count: 0 },
      { name: "鸡汤", calories: 250, count: 0 },
      { name: "排骨汤", calories: 300, count: 0 },
      { name: "冬瓜汤", calories: 200, count: 0 },
      { name: "番茄汤", calories: 220, count: 0 },
      { name: "紫菜汤", calories: 180, count: 0 },
      { name: "烤鸭", calories: 450, count: 0 },
      { name: "卤肉饭", calories: 400, count: 0 },
      { name: "盖浇饭", calories: 380, count: 0 },
      { name: "牛柳炒乌冬面", calories: 410, count: 0 },
      { name: "海鲜意面", calories: 390, count: 0 },
      { name: "披萨", calories: 450, count: 0 },
      { name: "汉堡", calories: 400, count: 0 },
      { name: "三明治", calories: 350, count: 0 },
      { name: "寿司", calories: 300, count: 0 },
      { name: "饭团", calories: 280, count: 0 },
      { name: "牛肉卷", calories: 360, count: 0 },
      { name: "鸡肉卷", calories: 340, count: 0 },
      { name: "春卷", calories: 320, count: 0 },
      { name: "饺子", calories: 350, count: 0 },
      { name: "水饺", calories: 330, count: 0 },
      { name: "煎饺", calories: 370, count: 0 },
      { name: "锅贴", calories: 360, count: 0 },
      { name: "烧麦", calories: 340, count: 0 },
      { name: "叉烧包", calories: 380, count: 0 },
      { name: "糯米鸡", calories: 400, count: 0 },
      { name: "蒸排骨", calories: 350, count: 0 },
      { name: "卤鸡腿", calories: 370, count: 0 },
      { name: "卤蛋", calories: 160, count: 0 },
      { name: "酱牛肉", calories: 340, count: 0 },
      { name: "盐焗鸡", calories: 360, count: 0 },
      { name: "红烧鸡翅", calories: 380, count: 0 },
      { name: "土豆烧鸡", calories: 350, count: 0 },
      { name: "香菇鸡汤", calories: 300, count: 0 },
      { name: "莲藕排骨汤", calories: 320, count: 0 },
      { name: "海带汤", calories: 200, count: 0 },
      { name: "酸菜鱼", calories: 340, count: 0 },
      { name: "剁椒鱼头", calories: 360, count: 0 },
      { name: "干锅鸡", calories: 400, count: 0 },
      { name: "铁板牛肉", calories: 410, count: 0 },
      { name: "烤鱼", calories: 380, count: 0 },
      { name: "香辣蟹", calories: 350, count: 0 },
      { name: "小龙虾", calories: 340, count: 0 },
      { name: "炒蛤蜊", calories: 300, count: 0 },
      { name: "蒸蟹", calories: 320, count: 0 },
      { name: "炸洋葱圈", calories: 320, count: 0 }
    ],
    dinnerItems: [
      { name: "鱼", calories: 300, count: 0 },
      { name: "蔬菜炒饭", calories: 200, count: 0 },
      { name: "牛排", calories: 400, count: 0 },
      { name: "糖醋排骨", calories: 500, count: 0 },
      { name: "水煮鱼", calories: 350, count: 0 },
      { name: "清蒸鲈鱼", calories: 280, count: 0 },
      { name: "红烧鲫鱼", calories: 320, count: 0 },
      { name: "椒盐虾", calories: 340, count: 0 },
      { name: "蒜蓉扇贝", calories: 300, count: 0 },
      { name: "蒸螃蟹", calories: 310, count: 0 },
      { name: "炒蛤蜊", calories: 290, count: 0 },
      { name: "香辣蟹", calories: 350, count: 0 },
      { name: "小龙虾", calories: 340, count: 0 },
      { name: "烤鸡腿", calories: 360, count: 0 },
      { name: "红烧鸡翅", calories: 370, count: 0 },
      { name: "土豆烧鸡", calories: 350, count: 0 },
      { name: "宫保鸡丁", calories: 320, count: 0 },
      { name: "咖喱鸡", calories: 340, count: 0 },
      { name: "红烧肉", calories: 450, count: 0 },
      { name: "回锅肉", calories: 420, count: 0 },
      { name: "酱牛肉", calories: 360, count: 0 },
      { name: "牛柳炒饭", calories: 380, count: 0 },
      { name: "牛肉汤", calories: 300, count: 0 },
      { name: "羊肉汤", calories: 320, count: 0 },
      { name: "羊肉串", calories: 350, count: 0 },
      { name: "烤羊排", calories: 400, count: 0 },
      { name: "铁板牛肉", calories: 410, count: 0 },
      { name: "麻辣牛肉", calories: 380, count: 0 },
      { name: "红烧茄子", calories: 250, count: 0 },
      { name: "地三鲜", calories: 280, count: 0 },
      { name: "酸辣土豆丝", calories: 220, count: 0 },
      { name: "麻婆豆腐", calories: 300, count: 0 },
      { name: "红烧豆腐", calories: 280, count: 0 },
      { name: "鱼头豆腐汤", calories: 310, count: 0 },
      { name: "紫菜蛋汤", calories: 180, count: 0 },
      { name: "海带汤", calories: 190, count: 0 },
      { name: "酸菜鱼", calories: 340, count: 0 },
      { name: "剁椒鱼头", calories: 360, count: 0 },
      { name: "干锅牛蛙", calories: 380, count: 0 },
      { name: "香菇鸡汤", calories: 300, count: 0 },
      { name: "蒸排骨", calories: 350, count: 0 },
      { name: "卤鸡腿", calories: 360, count: 0 },
      { name: "盐焗鸡", calories: 340, count: 0 },
      { name: "水煮肉片", calories: 370, count: 0 },
      { name: "糖醋鱼", calories: 350, count: 0 },
      { name: "蒸蛋", calories: 200, count: 0 },
      { name: "西红柿炒蛋", calories: 230, count: 0 },
      { name: "青椒炒肉", calories: 300, count: 0 },
      { name: "木耳炒肉", calories: 310, count: 0 },
      { name: "土豆丝炒肉", calories: 320, count: 0 },
      { name: "蒸南瓜", calories: 150, count: 0 },
      { name: "烤红薯", calories: 180, count: 0 },
      { name: "煮玉米", calories: 160, count: 0 },
      { name: "薯条", calories: 300, count: 0 },
      { name: "土豆泥", calories: 200, count: 0 },
      { name: "炒饭", calories: 350, count: 0 },
      { name: "海鲜炒饭", calories: 370, count: 0 },
      { name: "牛肉炒饭", calories: 380, count: 0 },
      { name: "鸡肉炒饭", calories: 360, count: 0 },
      { name: "杂酱面", calories: 340, count: 0 },
      { name: "牛肉面", calories: 350, count: 0 },
      { name: "鸡丝面", calories: 330, count: 0 },
      { name: "凉面", calories: 320, count: 0 },
      { name: "米粉", calories: 300, count: 0 },
      { name: "炒粉", calories: 310, count: 0 },
      { name: "饺子", calories: 340, count: 0 },
      { name: "水饺", calories: 320, count: 0 },
      { name: "煎饺", calories: 350, count: 0 },
      { name: "烧麦", calories: 330, count: 0 },
      { name: "叉烧包", calories: 360, count: 0 },
      { name: "糯米鸡", calories: 370, count: 0 },
      { name: "饭团", calories: 280, count: 0 },
      { name: "寿司", calories: 300, count: 0 },
      { name: "三明治", calories: 320, count: 0 },
      { name: "汉堡", calories: 350, count: 0 },
      { name: "披萨", calories: 400, count: 0 },
      { name: "牛肉卷", calories: 340, count: 0 },
      { name: "鸡肉卷", calories: 330, count: 0 },
      { name: "水果沙拉", calories: 200, count: 0 },
      { name: "蔬菜沙拉", calories: 180, count: 0 },
      { name: "凯撒沙拉", calories: 220, count: 0 },
      { name: "鸡肉沙拉", calories: 240, count: 0 },
      { name: "牛肉沙拉", calories: 250, count: 0 },
      { name: "凉拌豆腐皮", calories: 190, count: 0 },
      { name: "凉拌粉皮", calories: 170, count: 0 },
      { name: "卤蛋", calories: 160, count: 0 },
      { name: "茶叶蛋", calories: 150, count: 0 },
      { name: "烤鸡翅", calories: 360, count: 0 }
    ],
    filteredBreakfastItems: [],
    filteredLunchItems: [],
    filteredDinnerItems: [],
    backgroundColor: "#F5F7FA",
    showBreakfastOptions: false,
    showLunchOptions: false,
    showDinnerOptions: false,
    showExerciseButton: false,
    calorieMessage: ""
  },

  onLoad() {
    this.loadMeals();
    this.setData({
      filteredBreakfastItems: [...this.data.breakfastItems],
      filteredLunchItems: [...this.data.lunchItems],
      filteredDinnerItems: [...this.data.dinnerItems]
    });
  },

  onUnload() {
    this.saveMeals();
  },

  loadMeals() {
    try {
      const breakfastItems = wx.getStorageSync('breakfastItems') || this.data.breakfastItems;
      const lunchItems = wx.getStorageSync('lunchItems') || this.data.lunchItems;
      const dinnerItems = wx.getStorageSync('dinnerItems') || this.data.dinnerItems;
      this.setData({ breakfastItems, lunchItems, dinnerItems }, () => {
        this.updateMealCalories('breakfast');
        this.updateMealCalories('lunch');
        this.updateMealCalories('dinner');
      });
    } catch (e) {
      console.error('加载失败', e);
    }
  },

  saveMeals() {
    try {
      wx.setStorageSync('breakfastItems', this.data.breakfastItems);
      wx.setStorageSync('lunchItems', this.data.lunchItems);
      wx.setStorageSync('dinnerItems', this.data.dinnerItems);
    } catch (e) {
      console.error('保存失败', e);
    }
  },

  searchBreakfast(e) {
    const keyword = e.detail.value.toLowerCase();
    const filteredBreakfastItems = this.data.breakfastItems.filter(item =>
      item.name.toLowerCase().includes(keyword)
    );
    this.setData({ filteredBreakfastItems });
  },

  searchLunch(e) {
    const keyword = e.detail.value.toLowerCase();
    const filteredLunchItems = this.data.lunchItems.filter(item =>
      item.name.toLowerCase().includes(keyword)
    );
    this.setData({ filteredLunchItems });
  },

  searchDinner(e) {
    const keyword = e.detail.value.toLowerCase();
    const filteredDinnerItems = this.data.dinnerItems.filter(item =>
      item.name.toLowerCase().includes(keyword)
    );
    this.setData({ filteredDinnerItems });
  },

  increaseBreakfastItemCount(e) {
    const index = e.currentTarget.dataset.index;
    const items = this.data.breakfastItems;
    items[index].count += 1;
    this.updateItems('breakfast', items);
  },

  decreaseBreakfastItemCount(e) {
    const index = e.currentTarget.dataset.index;
    const items = this.data.breakfastItems;
    if (items[index].count > 0) {
      items[index].count -= 1;
      this.updateItems('breakfast', items);
    }
  },

  increaseLunchItemCount(e) {
    const index = e.currentTarget.dataset.index;
    const items = this.data.lunchItems;
    items[index].count += 1;
    this.updateItems('lunch', items);
  },

  decreaseLunchItemCount(e) {
    const index = e.currentTarget.dataset.index;
    const items = this.data.lunchItems;
    if (items[index].count > 0) {
      items[index].count -= 1;
      this.updateItems('lunch', items);
    }
  },

  increaseDinnerItemCount(e) {
    const index = e.currentTarget.dataset.index;
    const items = this.data.dinnerItems;
    items[index].count += 1;
    this.updateItems('dinner', items);
  },

  decreaseDinnerItemCount(e) {
    const index = e.currentTarget.dataset.index;
    const items = this.data.dinnerItems;
    if (items[index].count > 0) {
      items[index].count -= 1;
      this.updateItems('dinner', items);
    }
  },

  updateItems(mealType, items) {
    const updateData = {
      [`${mealType}Items`]: items,
      [`filtered${mealType.charAt(0).toUpperCase() + mealType.slice(1)}Items`]: items.filter(item =>
        this.data[`filtered${mealType.charAt(0).toUpperCase() + mealType.slice(1)}Items`]
          .map(i => i.name)
          .includes(item.name)
      )
    };
    this.setData(updateData, () => this.updateMealCalories(mealType));
  },

  updateMealCalories(mealType) {
    let mealCalories = 0;
    const mealItems = this.data[mealType + 'Items'];
    mealItems.forEach(item => mealCalories += item.count * item.calories);

    const updateData = {
      [`${mealType}Calories`]: mealCalories
    };
    this.setData(updateData, () => {
      this.updateProgressBar(mealCalories, mealType);
      this.updateTotalCalories();
    });
  },

  updateTotalCalories() {
    let totalCalories = 0;
    this.data.breakfastItems.forEach(item => totalCalories += item.count * item.calories);
    this.data.lunchItems.forEach(item => totalCalories += item.count * item.calories);
    this.data.dinnerItems.forEach(item => totalCalories += item.count * item.calories);

    const updateData = { totalCalories };
    if (totalCalories > 2300) {
      const excessCalories = totalCalories - 2300;
      updateData.calorieMessage = `您今日已超 ${excessCalories} 卡`;
      updateData.showExerciseButton = true;
    } else {
      updateData.calorieMessage = "";
      updateData.showExerciseButton = false;
    }
    this.setData(updateData);
  },

  updateProgressBar(mealCalories, mealType) {
    const maxCalories = this.getMealMaxCalories(mealType);
    const progress = Math.min((mealCalories / maxCalories) * 100, 100);
    const progressColor = mealCalories < maxCalories ? "#4CAF50" : mealCalories < 1.2 * maxCalories ? "#FFCA28" : "#F44336";

    this.setData({
      [`${mealType}Progress`]: progress,
      [`${mealType}ProgressColor`]: progressColor
    });

    this.updateMealColor(mealCalories, mealType);
  },

  getMealMaxCalories(mealType) {
    if (mealType === 'breakfast') return 600;
    if (mealType === 'lunch') return 1000;
    if (mealType === 'dinner') return 700;
    return 0;
  },

  updateMealColor(mealCalories, mealType) {
    let color = "#FFFFFF";
    const maxCalories = this.getMealMaxCalories(mealType);

    if (mealCalories >= 0.6 * maxCalories && mealCalories < maxCalories) {
      color = "#E8F5E9";
    } else if (mealCalories >= maxCalories && mealCalories < 1.2 * maxCalories) {
      color = "#FFF3E0";
    } else if (mealCalories >= 1.2 * maxCalories) {
      color = "#FFEBEE";
    }

    this.setData({
      [`${mealType}Color`]: color
    });
  },

  toggleBreakfastSelection() {
    this.setData({ showBreakfastOptions: !this.data.showBreakfastOptions });
  },

  toggleLunchSelection() {
    this.setData({ showLunchOptions: !this.data.showLunchOptions });
  },

  toggleDinnerSelection() {
    this.setData({ showDinnerOptions: !this.data.showDinnerOptions });
  },

  resetMeals() {
    this.setData({ backgroundColor: "#FFFFFF" });

    setTimeout(() => {
      const resetItems = items => items.map(item => ({ ...item, count: 0 }));
      const updateData = {
        breakfastItems: resetItems(this.data.breakfastItems),
        lunchItems: resetItems(this.data.lunchItems),
        dinnerItems: resetItems(this.data.dinnerItems),
        filteredBreakfastItems: resetItems(this.data.breakfastItems),
        filteredLunchItems: resetItems(this.data.lunchItems),
        filteredDinnerItems: resetItems(this.data.dinnerItems),
        breakfastProgress: 0,
        lunchProgress: 0,
        dinnerProgress: 0,
        breakfastColor: "#FFFFFF",
        lunchColor: "#FFFFFF",
        dinnerColor: "#FFFFFF",
        breakfastCalories: 0,
        lunchCalories: 0,
        dinnerCalories: 0,
        backgroundColor: "#F5F7FA"
      };
      this.setData(updateData, () => this.updateTotalCalories());
    }, 300);
  },

  goToExercise() {
    wx.navigateTo({ url: '/pages/sports/sports' });
  }
});
