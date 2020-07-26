import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import vuetwemoji from 'vue-twemoji'

Vue.use(vuetwemoji, {
  baseUrl: '/assets/image/emoji/', //can set to local folder of emojis. default: https://twemoji.maxcdn.com/
  extension: '.png', //.svg, .png
  className: 'emoji', //custom className for image output
  size: '36x36' //image size
})


// Vue.directive('emoji', {
//   inserted (el) {
//     // el.innerHTML = this.vuetwemoji.parse(el.innerHTML)
//     el.innerHTML = this.$twemoji.parse(el.innerHTML, function (emoji, options) {
//       return options.base + emoji + options.extension
//     })
//   }
// })

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
