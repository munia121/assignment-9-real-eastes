
import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar/NavBar";
import Footer from "../Pages/Home/Footer";
const MainLayOut = () => {
    return (
        <div >
            <div className="lg:w-[1500px] mx-auto ">
                <NavBar></NavBar>
            </div>
            <div className="lg:w-[1400px] mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;