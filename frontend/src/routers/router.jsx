import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
<<<<<<< HEAD
import Login from "../pages/login";
import Signup from "../pages/Signup";



=======
import FindWork from "../pages/findwork/FindWork";
import JobProposal from "../pages/findwork/JobProposal";
import FindTalent from "../pages/findtalent/FindTalent";
<<<<<<< HEAD
>>>>>>> findwork-page
=======
import JobPost from "../pages/findtalent/JobPost";
import WhyFlexwork from "../pages/whyflexwork/WhyFlexwork";
>>>>>>> findtalent-page

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
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            }
=======
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

>>>>>>> findwork-page
        ]
    }
])

export default router;