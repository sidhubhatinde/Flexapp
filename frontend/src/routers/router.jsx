import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import FindWork from "../pages/findwork/FindWork";
import JobProposal from "../pages/findwork/JobProposal";
import FindTalent from "../pages/findtalent/FindTalent";
import JobPost from "../pages/findtalent/JobPost";
import WhyFlexwork from "../pages/whyflexwork/WhyFlexwork";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            //add other routes here
            {
                path:'/',
                element:<Home/>
            },
            {
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

        ]
    }
])

export default router;