import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import RecoveryPage from "./pages/RecoveryPage";

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
    }
])

export default router