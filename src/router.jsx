import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import RecoveryPage from "./pages/RecoveryPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import IndexPage from "./pages/IndexPage";
import GamePage from "./pages/GamePage";
import CheckoutPage from "./pages/CheckoutPage";
import AdminPage from "./pages/AdminPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RegisterPage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/recovery",
        element: <RecoveryPage />
    },
    {
        path: "/profile",
        element: <ProfilePage />
    },
    {
        path: "/error",
        element: <NotFoundPage />
    },
    {
        path: "/index",
        element: <IndexPage />
    },
    {
        path: "/game",
        element: <GamePage />
    },
    {
        path: "/checkout",
        element: <CheckoutPage />
    },
    {
        path: "/admin",
        element: <AdminPage />
    }
])

export default router