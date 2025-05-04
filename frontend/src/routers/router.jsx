import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
<<<<<<< HEAD
import FindWork from "../pages/findwork/FindWork";
import JobProposal from "../pages/findwork/JobProposal";
import FindTalent from "../pages/findtalent/FindTalent";
import JobPost from "../pages/findtalent/JobPost";
import WhyFlexwork from "../pages/whyflexwork/WhyFlexwork";
=======
import Login from "../pages/login";
import Signup from "../pages/Signup";



>>>>>>> ce129d6121cf800ce9081455b8d3ae51ccb3d0c4

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
<<<<<<< HEAD
                path:'/find-work',
                element:<FindWork/>,
            },
            {
                path:'apply-job/:id',
                element:<JobProposal/>
            },
            {
                path:'/find-talent',
                element:<FindTalent/>
            },
            {
                path:'/post-job',
                element:<JobPost/>
            },
            {
                path:'/why-flexwork',
                element:<WhyFlexwork/>
            }

=======
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            }
>>>>>>> ce129d6121cf800ce9081455b8d3ae51ccb3d0c4
        ]
    }
])

export default router;