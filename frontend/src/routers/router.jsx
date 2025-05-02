import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../pages/login";
import Signup from "../pages/Signup";




const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            //add other routes here
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            }
        ]
    }
])

export default router;