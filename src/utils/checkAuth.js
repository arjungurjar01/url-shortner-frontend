import { getCurrentUser } from "../api/auth";
import { login, logout } from "../store/slice/authSlice";
import { store } from "../store/store"
import { redirect } from "@tanstack/react-router";

export const checkAuth = async() =>{
      try {
    const data = await getCurrentUser();
    const user = data.user ;
    // console.log(data.user,"user");
    if (!user) {
      store.dispatch(logout());
      throw redirect({ to: "/auth" });
    }

    //  Set the user in Redux
    store.dispatch(login(user));

    //  Double-check state
    const auth = store.getState().auth;
    if (!auth.isAuthenticated) {
      throw redirect({ to: "/auth" });
    }

    return true;
  } catch (error) {
    console.error("Auth error:", error);
    store.dispatch(logout());
    throw redirect({ to: "/auth" });
  }
}