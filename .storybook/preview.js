import Vue from 'vue'
import Vuex from 'vuex'

import '!style-loader!css-loader!sass-loader!../node_modules/bootstrap/dist/css/bootstrap.css';
// import '!style-loader!css-loader!sass-loader!@cloud-platform/vue2-components-plugin/src/styles/styles.scss';

Vue.use(Vuex)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
