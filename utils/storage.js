// 封装本地存储操作
export default {
    setStorageSync(key, data) {
      try {
        wx.setStorageSync(key, data);
      } catch (e) {
        console.error('本地存储设置失败:', e);
      }
    },
    getStorageSync(key) {
      try {
        return wx.getStorageSync(key);
      } catch (e) {
        console.error('本地存储读取失败:', e);
        return undefined;
      }
    },
    removeStorageSync(key) {
      try {
        wx.removeStorageSync(key);
      } catch (e) {
        console.error('本地存储移除失败:', e);
      }
    },
    clearStorageSync() {
      try {
        wx.clearStorageSync();
      } catch (e) {
        console.error('本地存储清除失败:', e);
      }
    }
  };