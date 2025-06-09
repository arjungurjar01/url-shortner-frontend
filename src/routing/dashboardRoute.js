import { createRoute } from "@tanstack/react-router";
import DashboardPage from "../pages/DashboardPage";
import { rootRoute } from "./routeTree";
import { checkAuth } from "../utils/checkAuth";

export const dashboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/dashboard',
    loader:checkAuth,
    component: DashboardPage,
  })