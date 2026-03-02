import { createContext, useEffect, useState} from "react";


export const AuthContext= createContext();

const AuthProvider=({children})=>{

    const[isAuth,setisAuth]= useState(false);


    useEffect(()=>{

        const saved = localStorage.getItem("isAuth");
        if(saved==="true")
            setisAuth(true);

    },[])

    const login=(email,password)=>{

        if(email==="admin@gmail.com" && password==="1234")
        {
         
        localStorage.setItem("isAuth","true");
           setisAuth(true);
        }
        else{
            alert("Invalid Credentials");
        }

    };

    const logout=()=>{

        localStorage.removeItem("isAuth");
        setisAuth(false);


    };


    return (

        <AuthContext.Provider value={{isAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )


};

export default AuthProvider;
