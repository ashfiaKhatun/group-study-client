import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import PropTypes from 'prop-types';

const PendingAssignmentCard = (params) => {

  const { pendingAssignment } = params;

  const { user } = useContext(AuthContext);

  const { _id, title, marks, user_name, link, note } = pendingAssignment;

  console.log(note);



  return (
    <>
      <div className="border rounded-xl shadow-lg hover:shadow-2xl space-y-2 p-4 m-2 lg:m-4 border-l-8 border-b-8">

        <h2 className="text-lg font-bold">{title}</h2>
        <p><b>Marks: </b>{marks}</p>
        <p><b>Examinee Name: </b>{user_name}</p>

        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn" onClick={() => document.getElementById('pending-modal').showModal()}>open modal</button>


      </div>

      <div>
        <dialog id="pending-modal" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Fill up the Form</h3>
            <div>
              <p>{title}</p>
              <form className="space-y-4 mt-6" >
                <div className="form-control md:w-full">
                  <label className="label">
                    <span className="label-text text-base">Return Date</span>
                  </label>
                  <label className="input-group ">
                    <input type="date" name="return_date" className="input input-bordered w-full border-2 border-blue-300" />
                  </label>
                </div>


                {/* Form Row */}
                <div className="md:flex items-center space-y-4 md:space-y-0">
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text text-base">User Name</span>
                    </label>
                    <label className="input-group ">
                      <input type="text"
                        name="user_name"
                        defaultValue={user.displayName}
                        readOnly
                        className="input input-bordered w-full border-2 border-blue-300" />
                    </label>
                  </div>


                  <div className=" md:w-1/2 md:ml-4">
                    <label className="label">
                      <span className="label-text text-base">User Email</span>
                    </label>
                    <label className="input-group ">
                      <input type="email"
                        name="user_email"
                        defaultValue={user.email}
                        readOnly
                        method="dialog"
                        className="input input-bordered w-full border-2 border-blue-300"
                      />
                    </label>
                  </div>
                </div>


                {/* Submit form */}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-outline btn-success text-lg w-full border-2 border-blue-300"
                />
              </form>
            </div>
          </div>
        </dialog>
      </div>



    </>
  );
};

PendingAssignmentCard.propTypes = {
  params: PropTypes.object
}

export default PendingAssignmentCard;