import { createRouter, createWebHashHistory } from "vue-router";
const Home = () => import("@/views/home/homeIndex");
const Login = () => import("@/views/login/loginIndex");
const List = () => import("@/views/list/listIndex");
const Detail = () => import("@/views/detail/detailIndex");
const My = () => import("@/views/my/myIndex");

const routes = [
  { path: "/", component: Home, name: "主页" },
  { path: "/login", component: Login, name: "登录" },
  { path: "/list", component: List, name: "列表" },
  { path: "/detail", component: Detail, name: "详情" },
  { path: "/my", component: My, name: "我的" },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
