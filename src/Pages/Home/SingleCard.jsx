/* eslint-disable react/prop-types */


import { Link } from "react-router-dom";


const SingleCard = ({ data }) => {
    // eslint-disable-next-line no-unused-vars
    const {id,image_url,estate_title,description} = data;
    return (
        <div>
            <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img data-aos="zoom-in" data-aos-duration='1000'  src={image_url} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 hover:"   />

                
                <div className="mt-6 mb-2">
                    
                    <h2 className="text-xl font-semibold tracking-wide">{estate_title}</h2>
                </div>
                <p className="dark:text-gray-800">{description.slice(0,100)}....</p>
                <Link to={`cardDetails/${id}`}><button  className=" btn mt-4 bg-pink-600 text-white shadow-xl">View Property</button></Link>
            </div>
        </div>
    );
};

export default SingleCard;