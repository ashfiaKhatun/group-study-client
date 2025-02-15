import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AssignmentCard from "./AssignmentCard";

const AllAssignments = () => {

    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        fetch('https://group-study-server-three.vercel.app/all-assignments')
            .then(res => res.json())
            .then(data => setAssignments(data))
    }, [])

    return (
        <>
            <Helmet>
                <title>All Assignment List</title>
            </Helmet>
            <div className="grid md:grid-cols-3 gap-4 md:gap-8 my-6 px-2 md:px-16">
                {
                    assignments.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment} assignments={assignments} setAssignments={setAssignments}></AssignmentCard>)
                }

            </div>


        </>
    );
};

export default AllAssignments;