// import { createContext, useContext, useState } from "react"


// const UserContext =createContext(null)

// export const UserProvider =({children})=>{
//    const [user,setUser]=useState(null)

//    const login =(userData,expiresIn)=>{

//       const expirationTime=new Date().getTime() + expiresIn *1000;

//       localStorage.setItem("expirationTime",expirationTime.toString())
//       localStorage.setItem("userData",JSON.stringify(userData))

//       setUser(userData)
//    }
//    return(
//       <UserContext.Provider value={{user,setUser,login}}>
//          {children}
//       </UserContext.Provider>
//    )
// }

// export const useUser=()=>{
//    return useContext(UserContext)
// }

// export default UserContext

import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("userData");
        const token = localStorage.getItem("token");
        const expirationTime = localStorage.getItem("expirationTime");

        if (storedUser && token && new Date().getTime() < parseInt(expirationTime)) {
            setUser(JSON.parse(storedUser));
        } else {
            logout();  // If expired, clear data
        }
    }, []);

    const login = (userData, token, expiresIn) => {
        const expirationTime = new Date().getTime() + expiresIn * 1000;

        localStorage.setItem("expirationTime", expirationTime.toString());
        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("token", token);

        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("userData");
        localStorage.removeItem("token");
        localStorage.removeItem("expirationTime");

        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};

export default UserContext;

