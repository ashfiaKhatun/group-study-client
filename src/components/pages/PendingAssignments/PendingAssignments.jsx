import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import PendingAssignmentCard from "./PendingAssignmentCard";

const PendingAssignments = () => {

    const [pendingAssignments, setPendingAssignments] = useState([]);

    useEffect( () => {
        fetch('https://group-study-server-three.vercel.app/all-submitted-assignments')
        .then(res => res.json())
        .then(data => setPendingAssignments(data))
    }, [])

    return (
        <>
            <Helmet>
                <title>Pending Assignment</title>
            </Helmet>
            <div className="grid grid-cols-2 md:grid-cols-3">
            {
                pendingAssignments.map(pendingAssignment => <PendingAssignmentCard key={pendingAssignment._id} pendingAssignment={pendingAssignment}></PendingAssignmentCard>)
            }

            </div>

        </>
    );
};

export default PendingAssignments;