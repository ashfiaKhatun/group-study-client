import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import MyAssignmentCard from "./MyAssignmentCard";

const MyAssignmentList = () => {

    const loadedData = useLoaderData();

    

    return (
        <>

            <Helmet>
                <title>My Assignment List</title>
            </Helmet>

            <div className="grid md:grid-cols-3 gap-4 md:gap-8 my-6 px-2 md:px-16">
                {
                    loadedData.map(data => <MyAssignmentCard key={data._id} data={data}></MyAssignmentCard>)
                }
            </div>

        </>
    );
};

export default MyAssignmentList;