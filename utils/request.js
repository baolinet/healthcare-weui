// 引入配置信息
import config from './config.js'; // 配置文件中包含 baseUrl 等信息

// 网络请求封装函数
const invoke = (url,method,params)=>{
    return new Promise((resolve, reject) => {
        wx.request({
          url: config.baseUrl + url, // 完整的请求URL
          method: method, // 请求方法
          data: method === 'GET' ? params : JSON.stringify(params), // 根据请求方法设置参数格式
          header: {
            'content-type': 'application/json', // 或者 'application/x-www-form-urlencoded'
            'token': wx.getStorageSync("user")?.token || ' ', // 从本地存储中获取token
          },
          success(res) {
            console.log('响应拦截器success接口返回:', res);
            switch (res.data.code) {
              case '200': // 请求成功
                resolve(res.data); // 将响应数据传递给Promise的resolve
                break;
              case '400': // 客户端请求错误
                wx.showToast({
                  title: res.data.message || "请求有误，请检查您的输入或联系客服~",
                  icon: "none",
                  duration: 3000
                });
                reject(new Error(res.data.message || "客户端请求错误"));
                break;
              case '401': // 未授权
              case '403': // 禁止访问
                wx.showToast({
                  title: res.data.code === '401' ? "身份验证已过期，请重新登陆~" : "无权访问，请登录后再访问~",
                  icon: "none",
                  duration: 2000
                });
                wx.redirectTo({
                  url: '/pages/login/login'
                });
                break;
              case '404': // 未找到资源
                wx.showToast({
                  title: "系统出错啦，找不到资源~",
                  icon: "error",
                  duration: 2000
                });
                reject(new Error("未找到资源"));
                break;
              default: // 其他错误
                reject(new Error("未知错误"));
            }
          },
          fail(err) {
            console.error('请求失败:', err);
            wx.showToast({
              title: "系统出现了意想不到的问题!",
              icon: "none",
              duration: 2000
            });
            reject(new Error("请求失败: " + (err.errMsg || "未知原因")));
          }
        });
      });
}

// 示例：GET 请求封装
const get = (url, data = {}, header = {}) => {
  return invoke({ url, method: 'GET', data, header });
};

// 示例：POST 请求封装
const post = (url, data = {}, header = {}) => {
  return invoke({ url, method: 'POST', data, header });
};

// 导出方法
module.exports = {
  invoke,
  get,
  post,
}; 