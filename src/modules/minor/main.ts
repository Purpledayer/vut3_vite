import { createApp } from "vue";
import App from "minor/App.vue";
import 'uno.css';
import router from "./router/index";

createApp(App).use(router).mount("#app");
