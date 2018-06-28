// Libs
import { Meteor } from 'meteor/meteor';
import Vue from 'vue';

import VueTracker from 'vue-meteor-tracker';
import VueMeta from 'vue-meta';
import App from './App.vue';

import router from "./config/routes.js"


Vue.use(VueTracker);
Vue.use(VueMeta)

Meteor.startup(() => {
  new Vue({
    router,
    render: h => h(App),
  }).$mount('app');
});
