// index.js
import invoke from '../../utils/request'; // 引入网络请求工具

const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },

  // 设置用户信息
  setUserInfo(avatarUrl, nickName) {
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    });
  },

  bindViewTap() {
    // 当页面在 tabBar 中注册时，不能使用 wx.navigateTo。
    // 因此，如果目标页面（这里是 /pages/logs/logs）是 tabBar 页面，就需要使用 wx.switchTab 来跳转
    console.log("click")
    wx.switchTab({
      url: '/pages/mine/mine'
    });
  },

  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setUserInfo(avatarUrl, nickName);
  },

  onInputChange(e) {
    const { value: nickName } = e.detail
    const { avatarUrl } = this.data.userInfo
    this.setUserInfo(avatarUrl, nickName);
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        const { userInfo } = res;
        this.setUserInfo(userInfo.avatarUrl, userInfo.nickName);
      },
      fail: (err) => {
        console.error('获取用户信息失败', err);
      },
    })
  },
})
