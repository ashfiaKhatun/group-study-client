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
import PendingAssignmentMarks from "../components/pages/PendingAssignments/PendingAssignmentMarks";

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
                loader: ({params}) => fetch(`https://group-study-server-three.vercel.app/all-assignments/${params.id}`)
            },
            {
                path: '/view-assignment/:id',
                element: <PrivateRouter><ViewDetails></ViewDetails></PrivateRouter>,
                loader: ({params}) => fetch(`https://group-study-server-three.vercel.app/all-assignments/${params.id}`)
            },
            {
                path: '/my-assignments/email/:email',
                element: <PrivateRouter><MyAssignmentList></MyAssignmentList></PrivateRouter>,
                loader: ({params}) => fetch(`https://group-study-server-three.vercel.app/all-submitted-assignments/email/${params.email}`)
            },
            {
                path: '/pending-assignments',
                element: <PrivateRouter><PendingAssignments></PendingAssignments></PrivateRouter>
            },
            {
                path: '/pending-assignments-marks/:id',
                element: <PrivateRouter><PendingAssignmentMarks></PendingAssignmentMarks></PrivateRouter>,
                // loader: ({params})=> fetch(`https://group-study-server-three.vercel.app/all-submitted-assignments/${params.id}`),
                loader: ({params})=> fetch(`https://group-study-server-three.vercel.app/all-submitted-assignments/${params.id}`)
            },

            
        ]
    },
]);

export default router;