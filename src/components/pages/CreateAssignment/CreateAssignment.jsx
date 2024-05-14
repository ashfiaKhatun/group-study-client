import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const CreateAssignment = () => {

    const [startDate, setStartDate] = useState(new Date());

    const {user} = useContext(AuthContext);



    const handleAddAssignment = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const difficulty = form.difficulty.value;   
        const photo = form.photo.value;
        const email = user?.email;

        const newAssignment = {
            title,
            description,
            marks,
            difficulty,
            startDate,
            photo,
            email
        };


        fetch('http://localhost:5000/all-assignments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAssignment)
        })
            .then(res => res.json())
            .then(() => {
                Swal.fire({
                    title: "Success",
                    text: "Assignment Added Successfully",
                    icon: "success"
                });
            })


        form.reset();

    }

    return (
        <>

            <Helmet>
                <title>Add Assignment</title>
            </Helmet>
            <h2 className="text-xl md:text-3xl font-extrabold my-6 text-center">Add Assignment</h2>
            <div className="px-4 md:px-20 mb-12">
                <form onSubmit={handleAddAssignment}>
                    <div className="grid md:grid-cols-2 gap-4 form-control rounded-xl p-4 md:p-20 bg-[#f4f3f0]">
                        
                        {/* title */}
                        <div>
                            <label className="label-text text-base">Title</label>
                            <input type="text" name="title" placeholder="Title" className="input  w-full mt-2" />
                        </div>

                        {/* description */}
                        <div>
                            <label className="label-text text-base">Description</label>
                            <input type="text" name="description" placeholder="Description" className="input w-full mt-2" />
                        </div>

                        {/* marks */}
                        <div>
                            <label className="label-text text-base">Marks</label>
                            <input type="text" name="marks" placeholder="Marks" className="input w-full mt-2" />
                        </div>

                        {/* difficulty */}
                        <div>
                            <label className="label-text text-base">Difficulty Level</label>
                            <select className="select input w-full mt-2" name='difficulty'>
                                <option></option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>

                            </select>
                        </div>


                        {/* date */}
                        <div className="">
                            <label className="label-text text-base">Due Date</label>
                            <div>
                                <DatePicker className="input w-full mt-2" selected={startDate} onChange={(date) => setStartDate(date)}  />
                            </div>
                        </div>

                        {/* photo url */}
                        <div className="">
                            <label className="label-text text-base">Photo URL</label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input w-full mt-2" />
                        </div>


                        <div className="lg:col-span-2">
                            <input type="submit" value="Add Assignment" className=" btn rounded-md w-full bg-cyan-800 hover:bg-cyan-950 text-white py-2 font-bold cursor-pointer" />
                        </div>
                    </div>
                </form>
            </div>
        </>


    );
};

export default CreateAssignment;