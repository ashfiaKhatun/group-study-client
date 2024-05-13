import { Helmet } from "react-helmet-async";

const CreateAssignment = () => {

    const handleAddAssignment = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const difficulty = form.difficulty.value;
        const photo = form.photo.value;

        const newAssignment = {
            title,
            description,
            marks,
            difficulty,
            photo
        };

    }

    return (
        <>

            <Helmet>
                <title>Add Assignment</title>
            </Helmet>
            <h2 className="text-3xl font-extrabold my-6 ml-20">Add Assignment</h2>
            <div className="px-4 md:px-20">
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



                        {/* photo url */}
                        <div className="lg:col-span-2">
                            <label className="label-text text-base">Photo URL</label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input w-full mt-2" />
                        </div>


                        <div className="lg:col-span-2">
                            <input type="submit" value="Add Assignment" className="border btn border-black rounded-md w-full bg-[#D2B48C] hover:bg-[#a58c6c] hover:text-white py-2 font-bold cursor-pointer" />
                        </div>
                    </div>
                </form>
            </div>
        </>


    );
};

export default CreateAssignment;