/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../ContexComponent/ContextComponent";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
        return children
    }


    return (
        <div>
            <Navigate state={location.pathname} to={'/login'}></Navigate>
        </div>
    );
};

export default PrivetRoute;