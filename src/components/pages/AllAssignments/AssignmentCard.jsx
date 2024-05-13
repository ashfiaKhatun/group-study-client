import { Link } from "react-router-dom";

const AssignmentCard = ({assignment}) => {

    const {_id, title, marks, difficulty, photo} = assignment;

    return (
        <div className="card card-compact shadow-xl border">
            <figure className="p-4"><img src={photo} className="rounded-lg h-44 w-full" /></figure>

            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <hr />
                <p className="text-gray-700 "><b>Marks:</b> {marks}</p>
                <p className="text-gray-700 "><b>Difficulty Level:</b> {difficulty} days</p>

                <div className="card-actions">
                        <Link><button className="py-1 px-6 rounded-full bg-gray-300 border-cyan-800 hover:bg-cyan-800 hover:text-white text-cyan-800 font-bold">View</button></Link>
                        <Link to={`/update-assignment/${_id}`}><button className="py-1 px-6 rounded-full bg-gray-300 border-cyan-800 hover:bg-cyan-800 hover:text-white text-cyan-800 font-bold">Update</button></Link>
                        <button  className="py-1 px-6 rounded-full bg-gray-300 border-red-800 hover:bg-red-800 hover:text-white text-red-800 font-bold">Delete</button>
                    </div>
            </div>
        </div>
    );
};

export default AssignmentCard;