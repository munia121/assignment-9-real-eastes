/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


import { Link } from "react-router-dom";


const SingleCard = ({ data }) => {
    // eslint-disable-next-line no-unused-vars
    const { id, image_url, estate_title, description, area, segment_name, status, price, location, facilities } = data;

    return (
        <div>
            <div className=" relative p-6 rounded-md h-[700px]  shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img data-aos="zoom-in" data-aos-duration='1000' src={image_url} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <p className="absolute top-8 bg-white px-2 rounded-lg opacity-70">{area}</p>

                <div className="mt-6 mb-2">

                    <h2 className="text-xl font-semibold tracking-wide">{estate_title}</h2>
                </div>
                <p className="dark:text-gray-800">{description.slice(0, 100)}....</p>
                <div className="flex mt-6  gap-5 lg:gap-20 md:gap-20">
                    <p className="text-pink-700 font-bold">segment- <span className="text-black">{segment_name}</span></p>
                    <p className="text-pink-700 font-bold">status- <span className="text-black">{status}</span></p>
                </div>

                <div className="flex  gap-5 lg:gap-32 md:gap-20">
                    <p className="text-pink-700 font-bold">Price- <span className="text-black">{price}</span></p>
                    <p className="text-pink-700 font-bold">Location- <span className="text-black">{location}</span></p>
                </div>
                <div className="mt-4">
                    <span className="text-pink-700 font-bold">Facilities: </span>
                    {
                        facilities.map(item => <li>{item}</li>)
                    }
                </div>
                <div className="">
                    <Link to={`cardDetails/${id}`}><button className=" mt-5  btn  bg-pink-600 text-white shadow-xl">View Property</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;