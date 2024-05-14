import {
    createBrowserRouter,
} from "react-router-dom";

import ErrorPage from "../components/pages/ErrorPage";
import Root from "../layout/Root";
import Home from "../components/pages/Home/Home";
import SignIn from "../components/pages/SignIn/SignIn";
import SignUp from "../components/pages/SignUp/SignUp";
import AllAssignments from "../components/pages/AllAssignments/AllAssignments";
import CreateAssignment from "../components/pages/CreateAssignment/CreateAssignment";
import MyAssignmentList from "../components/pages/MyAssignmentList/MyAssignmentList";
import PendingAssignments from "../components/pages/PendingAssignments/PendingAssignments";
import PrivateRouter from "./PrivateRouter";
import UpdateAssignment from "../components/pages/AllAssignments/UpdateAssignment";
import ViewDetails from "../components/pages/Details/ViewDetails";

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
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/all-assignments',
                element: <PrivateRouter><AllAssignments></AllAssignments></PrivateRouter>
            },
            {
                path: '/add-assignment',
                element: <PrivateRouter><CreateAssignment></CreateAssignment></PrivateRouter>
            },
            {
                path: '/update-assignment/:id',
                element: <PrivateRouter><UpdateAssignment></UpdateAssignment></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/all-assignments/${params.id}`)
            },
            {
                path: '/view-assignment/:id',
                element: <PrivateRouter><ViewDetails></ViewDetails></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/all-assignments/${params.id}`)
            },
            {
                path: '/my-assignments',
                element: <PrivateRouter><MyAssignmentList></MyAssignmentList></PrivateRouter>
            },
            {
                path: '/pending-assignments',
                element: <PrivateRouter><PendingAssignments></PendingAssignments></PrivateRouter>
            },
            
        ]
    },
]);

export default router;