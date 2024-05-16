
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const PendingAssignmentCard = (params) => {

  const { pendingAssignment } = params;

  const { _id, title, marks, user_name } = pendingAssignment;



  return (
    <>
      <div className="border rounded-xl shadow-lg hover:shadow-2xl space-y-2 p-4 m-2 lg:m-4 border-l-8 border-b-8">

        <h2 className="text-lg font-bold">{title}</h2>
        <p><b>Marks: </b>{marks}</p>
        <p><b>Examinee Name: </b>{user_name}</p>

        <Link to={`/pending-assignments-marks/${_id}`} className="btn">
          <button>Give Marks</button>
        </Link>

      </div>


    </>
  );
};

PendingAssignmentCard.propTypes = {
  params: PropTypes.object
}

export default PendingAssignmentCard;