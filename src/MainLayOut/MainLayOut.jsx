
import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar/NavBar";
const MainLayOut = () => {
    return (
        <div className="lg:w-[1400px] mx-auto">
            <NavBar></NavBar>
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;