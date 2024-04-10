/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext(null)
const ContextComponent = ({ children }) => {
    const [user, setUser] = useState(null)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // login 
    const userLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth,email, password)
    }


    // google 
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }


    // log out 

    const logOut = () =>{
        return signOut(auth)
    }



     
    // onAuthStateChange
    useEffect(()=>{
        
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user in tha state changed', currentUser);
            setUser(currentUser);
            
        })
        return () =>{
            unSubscribe();
        }
    },[])



    const passValue = { user,createUser, userLogin, googleLogin,logOut }

    return (
        <div>
            <AuthContext.Provider value={passValue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextComponent;