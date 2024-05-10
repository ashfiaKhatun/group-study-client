import {
    createBrowserRouter,
} from "react-router-dom";

import ErrorPage from "../components/pages/ErrorPage";
import Root from "../layout/Root";
import Home from "../components/pages/Home/Home";
// import SignIn from "../components/pages/SignIn/SignIn";
// import SignUp from "../components/pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            // {
            //     path: '/signin',
            //     element: <SignIn></SignIn>
            // },
            // {
            //     path: '/signup',
            //     element: <SignUp></SignUp>
            // },
            
        ]
    },
]);

export default router;