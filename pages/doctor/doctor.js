// 引入封装的api模块
import invoke from '../../utils/request.js'
import storage from '../../utils/storage.js';


// pages/doctor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialogShow: false,
    buttons: [{ text: '取消' }, { text: '确定' }]
  },
  openDialog() {
    this.setData({ dialogShow: true });
  },
  tapDialogButton(e) {
    this.setData({ dialogShow: false });
    console.log('按钮被点击', e.detail.index);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    storage.setStorageSync('username', 'user123');
     // 获取本地存储
     const username = storage.getStorageSync('username');
     console.log('用户名:', username);
 
     // 移除本地存储
     storage.removeStorageSync('username');
 
     // 清除所有本地存储
     storage.clearStorageSync();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.openDialog();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})