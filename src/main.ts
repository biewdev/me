import { createApp } from 'vue';
import 'zyle.css/css/zyle.min.css';
import './assets/styles/scss/main.scss';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
