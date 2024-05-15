import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const ViewDetails = () => {

    const { user } = useContext(AuthContext)

    const loadedData = useLoaderData();

    const {
        title,
        description,
        marks,
        difficulty,
        startDate,
        photo
    } = loadedData

    const handleSubmitAssignment = e => {
        e.preventDefault();
        const form = e.target;
        const link = form.link.value;
        const note = form.note.value;
        const email = form.email.value;
        const status = form.status.value;
        const user_name = user.displayName;

        const submittedAssignment = {
            title, marks, link, note, email, status, user_name
        }

        fetch('https://group-study-server-three.vercel.app/all-submitted-assignments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submittedAssignment)
        })
        .then(res => res.json())
        .then( () => {
            Swal.fire({
                title: "Success",
                text: "Assignment Submitted Successfully",
                icon: "success"
            });
        })

    }

    const closeModal = () => {
        const modal = document.getElementById('my_modal_1');
        modal.close();
    }


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
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Fill the form</h3>
                    <form onSubmit={handleSubmitAssignment} className="space-y-4">

                        <div>
                            <label className="label-text text-base">File link</label>
                            <input type="text" name="link" placeholder="File Link" className="input input-bordered w-full mt-2" />
                        </div>

                        <div>
                            <label className="label-text text-base">Note</label>
                            <textarea name="note" placeholder="Quick Note" className="border rounded-lg px-4 py-1 w-full"></textarea>
                        </div>

                        <div>
                            <label className="label-text text-base">Status</label>
                            <input type="text" name="status" defaultValue='Pending' readOnly className="input input-bordered w-full mt-2" />
                        </div>

                        <div>
                            <label className="label-text text-base">Email</label>
                            <input type="text" name="email" defaultValue={user.email} readOnly className="input input-bordered w-full mt-2" />
                        </div>
                        
                        <div>
                            <input onClick={closeModal} type="submit" value="Submit Assignment" className=" btn rounded-md w-full bg-cyan-800 hover:bg-cyan-950 text-white py-2 font-bold cursor-pointer" />
                        </div>

                    </form>

                </div>
            </dialog>
        </div>
    );
};

export default ViewDetails;