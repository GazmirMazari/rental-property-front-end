import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import { router } from "./router";

// setup fake backend
import { fakeBackend } from "./helpers";
fakeBackend();

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.mount("#app");
