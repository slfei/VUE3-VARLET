import { createApp } from "vue";
import App from "./App.vue";
import Varlet from "@varlet/ui";
import "@varlet/ui/es/style.js";
import { router } from "./router/index";

createApp(App).use(router, Varlet).mount("#app");
