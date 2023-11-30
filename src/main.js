import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/dist/locale/zh-cn.js'
import router from "@router";
const app = createApp(App);
app.use(router);
app.use(ElementPlus, { locale });
app.mount("#app");
