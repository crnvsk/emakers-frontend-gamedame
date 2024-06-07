import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import RecoveryPage from "./pages/RecoveryPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import IndexPage from "./pages/IndexPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RegisterPage/>
        
        
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/recovery",
        element: <RecoveryPage/>
    },
    {
        path: "/profile",
        element: <ProfilePage/>
    },
    {
        path: "/error",
        element: <NotFoundPage/>
    },
    {
        path: "/index",
        element: <IndexPage/>
    }
])

export default router