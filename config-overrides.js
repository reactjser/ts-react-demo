const path = require('path');
const { override, addWebpackAlias, fixBabelImports } = require('customize-cra');

module.exports = override(
  // antd按需引入
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  // 设置@别名
  addWebpackAlias({
    '@': path.join(__dirname, 'src'),
  }),
);
