import { Link, NavLink } from "react-router-dom";


const NavBar = () => {

    const navLinks = <>
        <li><NavLink className={({isActive}) => isActive? 'text-[#23BE0A] border border-[#23BE0A] font-bold  rounded-md ' : 'font-bold text-black'} to={'/'}>Home</NavLink></li>

        <li><NavLink className={({isActive}) => isActive? 'text-[#23BE0A] border border-[#23BE0A] font-bold  rounded-md ' : 'font-bold text-black'} to={'/updateProfile'}>Update Profile</NavLink></li>

        <li><NavLink className={({isActive}) => isActive? 'text-[#23BE0A] border border-[#23BE0A] font-bold  rounded-md ' : 'font-bold text-black'} to={'/register'}>Register</NavLink></li>
       
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                       {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex gap-5 px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/login'} className="btn">Login</Link>
            </div>
        </div>
    );
};

export default NavBar;