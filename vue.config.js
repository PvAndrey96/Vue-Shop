/* eslint-disable no-param-reassign */
const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Vue-Shop';
        return args;
      });

    config.module
      .rule('svg-sprite')
      .test(/\.(svg)(\?.*)?$/)
      .include
      .add(path.resolve(__dirname, 'src/assets/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        extract: true,
        spriteFilename: 'img/svg.[hash:8].svg',
      });

    config
      .plugin('svg-sprite')
      .use(SpriteLoaderPlugin, [{ plainSprite: true }]);

    config.module
      .rule('svg')
      .exclude
      .add(path.resolve(__dirname, 'src/assets/svg'));

    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader');
  },
};
