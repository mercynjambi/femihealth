//  take care of aunthentication context and create  a use auth 
import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../../firebase/firebase';
import { useEffect } from "react";
import { onAuthStateChanged }   from "firebase/auth";

const  AuthContext = React.createContext();

export function useAuth() {
    return React.useContext(AuthContext);
}

export function AuthProvider({ children}) {
    const [currentUser, setCurrentUser ] = useState(null);
    const [userLoggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
         const unsubscribe = onAuthStateChanged(auth, initializeUser);
         return unsubscribe;
}, [])

    async function initializeUser(user) {
        if(user){
            setCurentUser({ ...user });
            setUserLoggedIn(true);
        }else{
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
}

const value ={
    currentUser,
    userLoggedIn,
    loading
}

return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
)
}