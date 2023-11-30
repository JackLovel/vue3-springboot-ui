import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/dist/locale/zh-cn.js'
import router from "@router";
import { createPinia } from 'pinia'
const app = createApp(App);
const pinia = createPinia()
app.use(router);
app.use(pinia);
app.use(ElementPlus, { locale });
app.mount("#app");
