
const MyAssignmentCard = ({data}) => {

    const {title, status, marks, marksInput, feedBack} = data;

    return (
        <div className="border rounded-xl shadow-lg hover:shadow-2xl space-y-2 p-4 m-2 lg:m-4 border-l-8 border-b-8">

            <h2 className="text-lg font-bold">{title}</h2>
            <p><b>Marks: </b>{marks}</p>
            <p><b>Status: </b>{status}</p>
            <p><b>Marks Obtained: </b>{marksInput}</p>
            <p><b>Feed Back: </b>{feedBack}</p>

        </div>
    );
};

export default MyAssignmentCard;