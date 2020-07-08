import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () =>
      import(/* webpackChunkName: "portfolio" */ "../views/Portfolio.vue")
  },
  {
    path: "/stocks",
    name: "Stocks",
    component: () =>
      import(/* webpackChunkName: "stocks" */ "../views/Stocks.vue")
  },
  {
    path: "/signup",
    name: "SignUp/Login",
    component: () =>
      import(/* webpackChunkName: "stocks" */ "../views/SignUp.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
