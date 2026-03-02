import { StudentContext } from "../context/StudentContext";
import { useContext } from "react";
import StudentItem from "./StudentItem";

function StudentList(){

    const { studentData }=useContext(StudentContext);

    return (
<div>
        <h2>Student Details</h2>
        {            

            studentData.map((student)=>(

                <StudentItem key={student.id} item={student} />
            ))
        }

        </div>
     
    );


};

export default StudentList;