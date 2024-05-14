import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {

    const loadedData = useLoaderData();

    const {
        title,
        description,
        marks,
        difficulty,
        startDate,
        photo
    } = loadedData

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row border rounded-xl p-8 bg-blue-800 bg-opacity-10 ">
                    <img src={photo} className="w-1/2 rounded-lg shadow-2xl" />
                    <div className="space-y-1 flex-1 text-lg">
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <p className="py-6">{description}</p>
                        <hr className="border border-gray-300" />
                        <p><b>Marks: </b> {marks}</p>
                        <p><b>Difficulty: </b> {difficulty}</p>
                        <p><b>Due Date: </b> {startDate}</p>
                        <button className="btn btn-sm bg-cyan-800 hover:bg-cyan-950 text-white">Take Assignment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;