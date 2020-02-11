import routes from "./router.config";
import plugins from "./plugin.config";
import themes from './theme.config';
const buildrc = require("../../../.buildrc.js");

plugins.push(['umi-plugin-antd-theme',themes])

export default {
  hash: true,
  outputPath: `../../dist/renderer`,
  publicPath: './',
  alias: buildrc.webpack.alias,
  treeShaking: true,
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,

  plugins,
  routes,
};
