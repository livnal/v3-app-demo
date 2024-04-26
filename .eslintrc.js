/*
 * @Descripttion: 配置ESLint规则
 * @version: 1.0
 * @FilePath: /v3-app-demo/.eslintrc.js
 */
// .eslintrc.js
module.exports = {
  // 根节点
  root: true,
  // 环境
  env: {
    // 浏览器环境
    browser: true,
    // Node.js环境
    node: true,
    // ES2021环境
    es2021: true,
  },
  // 扩展
  extends: [
    '@vue/standard',
  ],
  // 解析器选项
  parserOptions: {
    // ECMAScript版本
    ecmaVersion: 12,
    // 解析器
    parser: '@babel/eslint-parser',
    // 源类型
    sourceType: 'module',
    // 需要配置文件
    requireConfigFile: false,
  },
  // 规则
  rules: {
    // 不允许使用console
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
