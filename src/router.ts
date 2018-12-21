import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import Login from "./views/auth/Login.vue";

import Register from "./views/auth/Register.vue";

import Meetups from "./views/meetup/Meetups.vue";
import MeetupDetail from "./views/meetup/MeetupDetail.vue";
import NewMeetup from "./views/meetup/NewMeetup.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/meetups",
      name: "meetups",
      component: Meetups
    },
    {
      path: "/new-meetup",
      name: "new-meetup",
      component: NewMeetup
    },
    {
      path: "/meetups/:id",
      name: "meetup-detail",
      component: MeetupDetail
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
});
