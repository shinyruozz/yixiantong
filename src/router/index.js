import Vue from "vue";
import Router from "vue-router";

import Home from "../pages/Home";
import Search from "../pages/Search";
import City from "../pages/City";
import List from "../pages/List";
import Detail from "../pages/Detail";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            redirect: "/home",
        },
        {
            path: "/home",
            name: "home",
            component: Home,
        },
        {
            path: "/detail",
            name: "detail",
            component: Detail,
        },
        {
            path: "/city",
            name: "city",
            component: City,
        },
        {
            path: "/search",
            name: "search",
            component: Search,
        },
        {
            path: "/list",
            name: "list",
            component: List,
        },
    ],
});