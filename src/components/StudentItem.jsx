import { StudentContext } from "../context/StudentContext";
import { useContext } from "react";

function StudentItem({item}){

    const {updateStudent, deleteStudent} = useContext(StudentContext);

   const handleUpdate = () => {
   const newname = prompt("Enter new name", item.name);
   const newcourse = prompt("Enter new course", item.course);
   updateStudent(item.id, newname, newcourse);
};


    const handleDelete=()=>{
        deleteStudent(item.id);

    }



    return (

        <div>
           <p>Student ID: {item.id}</p>
           <p>Student Name:{item.name}</p>
           <p>Student Course:{item.course}</p>
            <button onClick={handleUpdate}>Update</button>
           <button onClick={handleDelete}>Delete</button>
          

        </div>
    )






}
export default StudentItem;