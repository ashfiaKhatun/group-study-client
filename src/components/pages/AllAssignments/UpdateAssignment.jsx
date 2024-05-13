import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const UpdateAssignment = () => {

    const loadedData = useLoaderData();

    const {
        title,
        description,
        marks,
        difficulty,
        photo
    } = loadedData

    return (
        <>

            <Helmet>
                <title>Add Assignment</title>
            </Helmet>
            <h2 className="text-xl md:text-3xl font-extrabold my-6 text-center">Add Assignment</h2>
            <div className="px-4 md:px-20 mb-12">
                <form>
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
                            <input type="submit" value="Add Assignment" className=" btn rounded-md w-full bg-cyan-800 hover:bg-cyan-950 text-white py-2 font-bold cursor-pointer" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateAssignment;