// config.js
const app = getApp();

const config = {
    // 环境变量（手动设置，例如 'development' 或 'production'）
    env: app.globalData.env || 'development', // 使用全局变量中的环境配置
  
    // API 基础 URL
    baseUrl: {
      development: 'https://dev.example.com/api', // 开发环境
      production: 'https://prod.example.com/api', // 生产环境
      test: 'https://test.example.com/api'       // 测试环境
    },
  
    // 默认超时时间（毫秒）
    timeout: 10000,
  
    // 公共参数（例如 token、用户ID 等）
    commonParams: {
      appVersion: '1.0.0', // 应用版本
      platform: 'wechat'   // 平台标识
    },
  
    // 其他配置
    defaultPageSize: 10, // 分页默认大小
    maxCacheSize: 100,   // 最大缓存大小
  };
  
  // 根据环境变量选择对应的 API 基础 URL
  config.apiUrl = config.baseUrl[config.env];
  
  export default config;