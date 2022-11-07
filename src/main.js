import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/router.js"
import store from "./store/store.js"
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

app.use(
    createAuth0({
        domain: "dev-x2h71833nmny0o7p.us.auth0.com",
        client_id: "buE1mHtJjnYSyGYnaRHoL5AIWUDuTFZA",
        redirect_uri: window.location.origin,
        audience: "http://localhost:3001",
    })
);

app.use(router).use(store).mount('#app')
