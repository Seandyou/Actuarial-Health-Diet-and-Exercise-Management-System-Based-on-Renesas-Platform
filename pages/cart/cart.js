Page({
  data: {
    backgroundImage: '../../assets/sport/背景.jpg',
    products: [
      { id: 1, name: '臂力棒', price: 49.90, image: '../../assets/down/臂力棒.jpg' },
      { id: 2, name: '弹力带', price: 29.90, image: '../../assets/down/弹力带.jpg' },
      { id: 3, name: '俯卧撑支架', price: 39.90, image: '../../assets/down/俯卧撑支架.jpg' },
      { id: 4, name: '体脂秤', price: 199.00, image: '../../assets/down/体脂称.jpg' },
      { id: 5, name: '跳绳', price: 29.90, image: '../../assets/down/跳绳.jpg' },
      { id: 6, name: '哑铃', price: 99.00, image: '../../assets/down/哑铃.jpg' },
      { id: 7, name: '运动手环', price: 299.00, image: '../../assets/down/运动手环.jpg' }
    ],
    cartItems: [],
    showCartModal: false,
    totalPrice: 0,
    formattedTotalPrice: '0.00' // 新增：初始化格式化总价
  },

  onLoad() {
    try {
      const cartItems = wx.getStorageSync('cartItems') || [];
      this.setData({ cartItems }, () => {
        this.updateCartItems();
        this.calculateTotalPrice();
      });
    } catch (e) {
      console.error('加载购物车数据失败', e);
      wx.showToast({ title: '加载失败', icon: 'none' });
    }
  },

  updateCartItems() {
    const cartItems = this.data.cartItems.map(item => ({
      ...item,
      total: (item.price * item.quantity).toFixed(2)
    }));
    this.setData({ cartItems });
  },

  addToCart(e) {
    try {
      const productId = e.currentTarget.dataset.id;
      const product = this.data.products.find(item => item.id === productId);
      if (!product) throw new Error('商品未找到');
      const cartItems = [...this.data.cartItems];
      const existingItem = cartItems.find(item => item.id === productId);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartItems.push({ ...product, quantity: 1 });
      }

      this.setData({ cartItems }, () => {
        wx.setStorageSync('cartItems', cartItems);
        this.updateCartItems();
        this.calculateTotalPrice();
        wx.showToast({ title: `已将${product.name}加入购物车`, icon: 'success' });
      });
    } catch (e) {
      console.error('加入购物车失败', e);
      wx.showToast({ title: '操作失败', icon: 'none' });
    }
  },

  decreaseQuantity(e) {
    try {
      const productId = e.currentTarget.dataset.id;
      const cartItems = [...this.data.cartItems];
      const item = cartItems.find(item => item.id === productId);
      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        this.removeFromCart(e);
        return;
      }

      this.setData({ cartItems }, () => {
        wx.setStorageSync('cartItems', cartItems);
        this.updateCartItems();
        this.calculateTotalPrice();
      });
    } catch (e) {
      console.error('减少数量失败', e);
    }
  },

  increaseQuantity(e) {
    try {
      const productId = e.currentTarget.dataset.id;
      const cartItems = [...this.data.cartItems];
      const item = cartItems.find(item => item.id === productId);
      if (!item) return;
      item.quantity += 1;

      this.setData({ cartItems }, () => {
        wx.setStorageSync('cartItems', cartItems);
        this.updateCartItems();
        this.calculateTotalPrice();
      });
    } catch (e) {
      console.error('增加数量失败', e);
    }
  },

  removeFromCart(e) {
    try {
      const productId = e.currentTarget.dataset.id;
      const cartItems = this.data.cartItems.filter(item => item.id !== productId);
      this.setData({ cartItems }, () => {
        wx.setStorageSync('cartItems', cartItems);
        this.updateCartItems();
        this.calculateTotalPrice();
        wx.showToast({ title: '已移除商品', icon: 'success' });
      });
    } catch (e) {
      console.error('移除商品失败', e);
    }
  },

  clearCart() {
    try {
      this.setData({ cartItems: [], totalPrice: 0, formattedTotalPrice: '0.00' }, () => {
        wx.setStorageSync('cartItems', []);
        wx.showToast({ title: '购物车已清空', icon: 'success' });
      });
    } catch (e) {
      console.error('清空购物车失败', e);
    }
  },

  calculateTotalPrice() {
    try {
      const totalPrice = this.data.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const formattedTotalPrice = totalPrice.toFixed(2); // 格式化为两位小数
      this.setData({ totalPrice, formattedTotalPrice });
    } catch (e) {
      console.error('计算总价失败', e);
    }
  },

  showCart() {
    this.setData({ showCartModal: true });
  },

  hideCart() {
    this.setData({ showCartModal: false });
  }
});
