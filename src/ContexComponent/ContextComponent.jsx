/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext(null)
const ContextComponent = ({ children }) => {


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



    const passValue = { createUser, userLogin, googleLogin }

    return (
        <div>
            <AuthContext.Provider value={passValue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextComponent;