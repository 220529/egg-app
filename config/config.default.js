// config/config.default.js
exports.keys = '<此处改为你自己的 Cookie 安全字符串>';

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

// add middleware robot
exports.middleware = [
  'robot'
];
// robot's configurations
exports.robot = {
  ua: [/curl/i, /Baiduspider/i]
};