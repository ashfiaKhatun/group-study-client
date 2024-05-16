import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const PendingAssignmentMarks = () => {

    const loader = useLoaderData();


    const { link, note } = loader;

    const handleMarksSubmit = e =>{
        e.preventDefault();

        const form = e.target;

        const marksInput = form.marksInput.value;
        const feedBack = form.feedBack.value;

        const sendFeedBack = { marksInput, feedBack};

        fetch('https://group-study-server-three.vercel.app/all-assignments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sendFeedBack)
        })
            .then(res => res.json())
            .then(() => {
                Swal.fire({
                    title: "Success",
                    text: "FeedBack provided Successfully",
                    icon: "success"
                });
            })




        form.reset();
    }



    return (
        <div className="grid grid-cols-1 md:grid-cols-3 p-2 md:p-12">

            <div className="card card-compact bg-gray-100 shadow-xl border-b-8 border-l-8">

                <div className="card-body">
                    <h2 className="card-title">Submitted Link: </h2>
                    <p onClick={() => document.getElementById('my_modal_3').showModal()} className="cursor-pointer truncate">{link}</p>
                    <h2 className="font-bold text-lg">Note: </h2>
                    <p>{note}</p>

                    <form onSubmit={handleMarksSubmit}>
                        <div>
                            <label className="label-text font-bold">Mark</label>
                            <input type="text" name="marksInput"placeholder="Mark"className="input  w-full mt-2" />
                        </div>

                        <div>
                            <label className="label-text font-bold">Feedback</label>
                            <input type="text" name="feedBack" placeholder="Feedback" className="input w-full mt-2" />
                        </div>
                    </form>


                </div>
            </div>

            {/* <div>
                <p onClick={() => document.getElementById('my_modal_3').showModal()}><span>Submitted Assignment Link: </span>{link}</p>
                <p><span>Note:</span> {note}</p>
            </div> */}


            <div className="">
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box max-w-5xl flex">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <iframe src={link} className="h-[500px] w-full lg:w-[950px]"></iframe>


                    </div>
                </dialog>

            </div>

        </div>
    );
};

export default PendingAssignmentMarks;