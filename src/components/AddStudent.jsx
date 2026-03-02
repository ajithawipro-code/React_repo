import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";

const AddStudent=()=>{

    const {addStudent}=useContext(StudentContext);

    const[name,setName]=useState("");
    const[course,setCourse]=useState("");

    const handleAdd=()=>{

        if(!name.trim()|| !course.trim())
        {
            alert("Empty");
            return;
        }
        addStudent(name,course);
        setName("");
        setCourse("");

    }


    return (

        <div>
            <h2>Add Student Details</h2>
            <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder="Enter Course" value={course} onChange={(e)=>setCourse(e.target.value)} />
            <button onClick={handleAdd}>Add Student</button>
        </div>
    )


}

export default AddStudent;