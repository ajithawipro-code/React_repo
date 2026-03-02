import { createContext } from "react";
import { useState } from "react";


export const StudentContext=createContext();

const StudentProvider=({children})=>{

    const [studentData,setStudentdata]=useState([]);

    const addStudent=(name, course)=>{

     setStudentdata([...studentData, {id:Date.now(), name, course}]);

    }

    const deleteStudent=(id)=>{

        setStudentdata(studentData.filter((student)=>student.id!==id));


    }

    const updateStudent=(id, newname, newcourse)=>{

        setStudentdata(studentData.map
            (student=>student.id===id? {...student, id, name:newname, course:newcourse}: student))


    }

    return (

        <StudentContext.Provider value={{studentData, addStudent, deleteStudent, updateStudent}}>
            {children}
        </StudentContext.Provider>
    )

}

export default StudentProvider;