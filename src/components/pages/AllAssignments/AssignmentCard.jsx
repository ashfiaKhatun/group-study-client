import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const AssignmentCard = ({ assignment, assignments, setAssignments }) => {

  const [userEmail, setUserEmail] = useState(null);

  const { user } = useContext(AuthContext);


  const { _id, email, title, marks, difficulty, photo } = assignment;

  useEffect(() => {
    fetch(`https://group-study-server-three.vercel.app/all-assignments/email/${email}`)
      .then(res => res.json())
      .then(data => setUserEmail(data))
  }, [email])

  const handleDelete = () => {

    if (user.email === email) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {


          fetch(`https://group-study-server-three.vercel.app/all-assignments/${_id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Assignment has been deleted.",
                  icon: "success"
                });
                const remaining = assignments.filter(assignment => assignment._id !== _id);
                setAssignments(remaining);
              }
            })
        }
      });
    }
    else {
      alert('User does not match');
    }

  }

  return (
    <div className="card card-compact shadow-xl border">
      <figure className="p-4"><img src={photo} className="rounded-lg h-72 w-full" /></figure>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <hr />
        <p className="text-gray-700 "><b>Marks:</b> {marks}</p>
        <p className="text-gray-700 "><b>Difficulty Level:</b> {difficulty} days</p>

        <div className="card-actions">
          <Link to={`/view-assignment/${_id}`}><button className="py-1 px-6 rounded-full bg-gray-300 border-cyan-800 hover:bg-cyan-800 hover:text-white text-cyan-800 font-bold">View</button></Link>

          <Link to={`/update-assignment/${_id}`}><button className="py-1 px-6 rounded-full bg-gray-300 border-cyan-800 hover:bg-cyan-800 hover:text-white text-cyan-800 font-bold">Update</button></Link>

          <button onClick={() => handleDelete(_id)} className="py-1 px-6 rounded-full bg-gray-300 border-red-800 hover:bg-red-800 hover:text-white text-red-800 font-bold">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;