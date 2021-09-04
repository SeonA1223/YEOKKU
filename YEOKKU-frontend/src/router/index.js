import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/OptimalMap.vue"),
  },
  {
    path: "/map",
    name: "Map",
    component: () => import("../views/OptimalMap.vue"),
    children: [
      {
        path: "spotdetail",
        name: "TourSpotDetail",
        component: () => import("../components/optimalmap/TourSpotDetail.vue"),
      },
      {
        path: "pathdetail",
        name: "PathDetail",
        component: () => import("../components/optimalmap/PathDetail.vue"),
      },
      {
        path: "optlist",
        name: "OptimalList",
        component: () => import("../components/optimalmap/OptimalList.vue"),
      },
      {
        path: "route",
        name: "RouteList",
        component: () => import("../components/optimalmap/RouteList.vue"),
      },
    ],
    redirect: () => {
      return "/map/route";
    },
  },
  {
    path: "/movie",
    name: "Movie",
    component: () => import("../views/Movie.vue"),
    children: [
      {
        path: "moviedetail",
        name: "movieDetail",
        component: () => import("../components/culture/MovieDetail.vue"),
      },
    ],
  },
  {
    path: "/book",
    name: "Book",
    component: () => import("../views/Book.vue"),
    children: [
      {
        path: "bookdetail",
        name: "bookDetail",
        component: () => import("../components/culture/BookDetail.vue"),
      },
    ],
  },
  {
    path: "/music",
    name: "Music",
    component: () => import("../views/Music.vue"),
    children: [
      {
        path: "musicdetail",
        name: "musicDetail",
        component: () => import("../components/culture/MusicDetail.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
