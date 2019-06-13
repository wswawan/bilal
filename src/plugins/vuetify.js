import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import id from 'vuetify/es5/locale/id'

Vue.use(Vuetify, {
  options: {
    customProperties: true
  },
  iconfont: 'md',
  lang: {
    locales: { id },
    current: 'id'
  },
})
