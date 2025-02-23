

import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate =useNavigate()

    const logout = () => {
        localStorage.removeItem("userData");
        localStorage.removeItem("expirationTime");
        setUser(null);
        navigate('/login')
    };

    useEffect(() => {
        const storedUser = localStorage.getItem("userData");
        const expirationTime = localStorage.getItem("expirationTime");

        if (storedUser &&  new Date().getTime() < parseInt(expirationTime)) {
            setUser(JSON.parse(storedUser));
        } else {
            logout();  // If expired, clear data
        }
    }, []);


    const login = (userData, expiresIn) => {
        const expirationTime = new Date().getTime() + expiresIn * 1000;
        console.log(expirationTime.toString())

        localStorage.setItem("expirationTime",expirationTime.toString());
        localStorage.setItem("userData", JSON.stringify(userData));

        setUser(userData);
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

