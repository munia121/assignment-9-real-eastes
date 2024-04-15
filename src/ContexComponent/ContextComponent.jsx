/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext(null)
const ContextComponent = ({ children }) => {
    const [user, setUser] = useState(null)
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [autoUpdate, setAutoUpdate] = useState(false)

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user profile
    const updateUserProfile = (name, image) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
          })
    }




    // login 
    const userLogin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }


    // google 
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    // github
    const gitHubProvider = new GithubAuthProvider();
    // gitHubProvider.addScope('user:email')
    const gitHubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }



    // log out 

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }



    useEffect(() =>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>setUserData(data))
    },[])


     
    // onAuthStateChange
    useEffect(()=>{
        
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user in tha state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
            
        })
        return () =>{
            unSubscribe();
        }
    },[autoUpdate])



    const passValue = { user,userData,loading,createUser, userLogin, googleLogin,logOut, gitHubLogin, updateUserProfile,setAutoUpdate }

    return (
        <div>
            <AuthContext.Provider value={passValue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextComponent;