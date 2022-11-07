import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/profile",
        name: "profile",
        component: () =>
            import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () =>
            import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;