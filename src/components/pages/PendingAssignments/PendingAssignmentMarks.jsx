import { useLoaderData } from "react-router-dom";

const PendingAssignmentMarks = () => {

    const loader = useLoaderData();


    const { link, note } = loader;

    return (
        <div className="grid grid-cols-3">


            <div className="border rounded-xl shadow-lg hover:shadow-2xl space-y-2 p-4 m-2 lg:m-4 border-l-8 border-b-8">

                <div className="">
                    <p className=""><b>Submitted Assignment Link:</b> <span className="cursor-pointer" onClick={() => document.getElementById('my_modal_3').showModal()}>{link}</span></p>
                </div>
                <p><b>Note:</b> {note}</p>



            </div>

            {/* <div>
                <p onClick={() => document.getElementById('my_modal_3').showModal()}><span>Submitted Assignment Link: </span>{link}</p>
                <p><span>Note:</span> {note}</p>
            </div> */}


            <dialog id="my_modal_3" className="modal">
                <div className="modal-box h-[400px] w-[950px]">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <iframe src={link} className="h-[300px] w-[850px]"></iframe>


                </div>
            </dialog>

        </div>
    );
};

export default PendingAssignmentMarks;