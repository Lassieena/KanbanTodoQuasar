const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "*", redirect: "/backlog" },
      { path: "/backlog", component: () => import("components/Backlog.vue") },
      { path: "/board", component: () => import("components/Board.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
