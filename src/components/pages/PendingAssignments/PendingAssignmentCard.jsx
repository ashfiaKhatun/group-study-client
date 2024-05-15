import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import PropTypes from 'prop-types';

const PendingAssignmentCard = ({ pendingAssignment }) => {


  const { user } = useContext(AuthContext);

  const { _id, title, marks, user_name, link, note } = pendingAssignment;

  console.log(note);



  return (
    <div className="border rounded-xl shadow-lg hover:shadow-2xl space-y-2 p-4 m-2 lg:m-4 border-l-8 border-b-8">

      <h2 className="text-lg font-bold">{title}</h2>
      <p><b>Marks: </b>{marks}</p>
      <p><b>Examinee Name: </b>{user_name}</p>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal({note})}>open modal</button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">{title}!</h3>
          <p className="py-4">{note}</p>
        </div>
      </dialog>


    </div>
  );
};

PendingAssignmentCard.propTypes = {
  params: PropTypes.object
}

export default PendingAssignmentCard;