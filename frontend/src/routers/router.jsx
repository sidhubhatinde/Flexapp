import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import FindWork from "../pages/findwork/FindWork";
import JobProposal from "../pages/findwork/JobProposal";
import FindTalent from "../pages/findtalent/FindTalent";
import JobPost from "../pages/findtalent/JobPost";

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
            }

        ]
    }
])

export default router;