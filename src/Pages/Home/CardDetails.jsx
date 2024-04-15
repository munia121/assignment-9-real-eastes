/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { AuthContext } from "../../ContexComponent/ContextComponent";
import { Link, useParams } from "react-router-dom";


const CardDetails = () => {
    const { userData, loading } = useContext(AuthContext)
    const { id } = useParams()

    const data = userData.find(card => card.id == id)
    console.log(data)

    if (loading) {
        return <div className="text-center mt-10"><span className="loading loading-spinner loading-lg mx-auto"></span></div>
    }

    return (
        <div className="mt-20">
            
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img data-aos="zoom-in" data-aos-duration= "1000" src={data.image_url} className="lg:w-[700px] rounded-lg shadow-2xl " />
                    <div>
                        <h1  className="animate__animated animate__rotateInDownLeft text-3xl font-bold">{data.estate_title}</h1>
                        <p className="py-6 animate__animated  animate__zoomIn  animate__delay-1s"  >{data.description}</p>
                        <hr />
                        <p className="font-bold mt-3 animate__animated  animate__zoomIn  animate__delay-2s" ><span className="font-bold text-pink-700 ">Segment- </span>{data.segment_name}</p>
                        <div className="flex  gap-20 mt-4  animate__animated  animate__zoomIn  animate__delay-3s">
                            <p className="font-bold"><span className="font-bold text-pink-700">Price:</span> {data.price}</p>
                            <p className="font-bold "><span className="text-pink-700">Status:</span> {data.status}</p>
                        </div>
                        <div className="mt-3 flex gap-20 animate__animated  animate__zoomIn  animate__delay-4s">
                            <p className="font-bold "><span className="font-bold text-pink-700">Area: </span> {data.area}</p>
                            <p className="font-bold mb-3"><span className="font-bold text-pink-700">location: </span> {data.location}</p>
                        </div>
                        <hr />
                        <div className="mt-2 animate__animated  animate__zoomIn  animate__delay-5s">
                            <span className="font-bold">Facilities:</span>{
                                data.facilities.map(a=> <li>{a}</li>)
                            }
                        <Link to={'/'}><button className="btn btn-sm mt-2 bg-pink-600 text-white">Go Back</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;