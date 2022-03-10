import { createRouter, createWebHashHistory } from "vue-router";
const Home = () => import("@/views/home/homeIndex");
const Login = () => import("@/views/login/loginIndex");

const routes = [
  { path: "/", component: Home, name: "主页" },
  { path: "/login", component: Login, name: "登录" },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
