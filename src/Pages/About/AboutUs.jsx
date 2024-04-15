import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { TbClockHour3 } from "react-icons/tb";




const AboutUs = () => {
    return (
        <div>
            <div className="mt-20">
                <h1 className="text-5xl font-bold text-center">Contact Us</h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7">
                <div className="mt-20 border p-7">
                    <div className=" justify-center items-center">
                        <LuPhoneCall className=" flex bg-pink-100 text-pink-700 p-5 h-20 w-20 rounded-full justify-center items-center "></LuPhoneCall>
                    </div>
                    <div className="mt-10">
                        <p className="text-2xl">Phone :</p>
                        <p className="text-2xl font-bold">+123(546)74554</p>
                    </div>
                </div>
                <div className="mt-20 border p-7">
                    <div className=" justify-center items-center">
                        <HiOutlineMailOpen className=" flex bg-pink-100 text-pink-700 p-5 h-20 w-20 rounded-full justify-center items-center "></HiOutlineMailOpen>
                    </div>
                    <div className="mt-10">
                        <p className="text-2xl">Email Address :</p>
                        <p className="text-2xl font-bold">help@gmail.com</p>
                    </div>
                </div>
                <div className="mt-20 border p-7">
                    <div className=" justify-center items-center">
                        <IoLocationOutline className=" flex bg-pink-100 text-pink-700 p-5 h-20 w-20 rounded-full justify-center items-center "></IoLocationOutline>
                    </div>
                    <div className="mt-10">
                        <p className="text-2xl">Location:</p>
                        <p className="text-2xl font-bold">New Jersey 54234</p>
                    </div>
                </div>
                <div className="mt-20 border p-7">
                    <div className=" justify-center items-center">
                        <TbClockHour3 className=" flex bg-pink-100 text-pink-700 p-5 h-20 w-20 rounded-full justify-center items-center "></TbClockHour3>
                    </div>
                    <div className="mt-10">
                        <p className="text-2xl">Opening Hours :</p>
                        <p className="text-2xl font-bold">Mon-Fri 09 am-05 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;