import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { AppUser, AppAdmin } from "../views";
import { UserLogin, UserHome, UserTodoList, AccountMenu } from "../views/user";
import { AdminHome } from "../views/admin";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: AppUser,
    children: [
      { path: "login", component: UserLogin },
      { path: "home", component: UserHome },
      { path: "todo", component: UserTodoList },
      { path: "account", component: AccountMenu },
    ],
  },
  {
    path: "/admin",
    component: AppAdmin,
    children: [{ path: "home", component: AdminHome }],
  },
  { path: "/:pathMatch(.*)*", redirect: "/login" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
