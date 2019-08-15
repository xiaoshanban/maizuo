// 1. 引入 Vue
import Vue from "vue";

// 2. 引入 VueRouter
import VueRouter from "vue-router";

// 3. 调用 VueRouter
Vue.use(VueRouter);

// 4. 定义路由规则
const routes = [
  {
    path: "/",
    component: () => import("./views/Home/index.vue"),
    children: [
      { path: "center", component: () => import("./views/Home/center.vue") },
      { path: "films", component: () => import("./views/Home/films.vue") },
      { path: "cinemas", component: () => import("./views/Home/cinemas.vue") },
      { path: "brang", component: () => import("./views/Home/brang.vue") }
    ]
  },
  { path: "/city", component: () => import("./views/City/index.vue") },
  { path: "/film/:filmId", component: () => import("./views/Film/index.vue") },
  { path: "/login", component: () => import("./views/Login/index.vue") },
  { path: "/money", component: () => import("./views/Money/index.vue") }
];

// 5. 创建路由实例对象
const router = new VueRouter({
  routes
});

// 6. 暴露
export default router;
