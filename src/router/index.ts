import { createRouter as createVueRouter, createWebHashHistory, Router } from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import { createAuthGuard } from "@auth0/auth0-vue";
import { App } from 'vue';
import Video from '../views/Video.vue';

export function createRouter(app: App): Router {
  return createVueRouter({
    routes: [
      {
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "/video",
        name: "video",
        component: Video,
        beforeEnter: createAuthGuard(app)
      },
      {
        path: "/profile",
        name: "profile",
        component: Profile,
        beforeEnter: createAuthGuard(app)
      }
    ],
    history: createWebHashHistory()
  })
}
