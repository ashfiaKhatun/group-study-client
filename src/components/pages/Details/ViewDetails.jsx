import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const ViewDetails = () => {

    const {user} = useContext(AuthContext)

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
                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn btn-sm bg-cyan-800 hover:bg-cyan-950 text-white">Take Assignment</button>
                    </div>
                </div>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Fill the form</h3>
                    <form>
                        <label className="label-text text-base">File link</label>
                        <input type="text" name="title" placeholder="Title" className="input  w-full mt-2" />
                        
                        <label className="label-text text-base">Title</label>
                        <textarea name="" id="" className="input w-full mt-2"></textarea>

                        <label className="label-text text-base">User Email</label>
                        <input type="email" name="user_email" readOnly defaultValue={user.email} className="input  w-full mt-2" />

                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ViewDetails;