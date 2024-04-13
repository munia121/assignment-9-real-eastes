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
                    <img src={data.image_url} className="lg:w-[700px] rounded-lg shadow-2xl " />
                    <div>
                        <h1 className="text-3xl font-bold">{data.estate_title}</h1>
                        <p className="py-6">{data.description}</p>
                        <p><span className="font-bold">Segment- </span>{data.segment_name}</p>
                        <div className="flex  gap-20 mt-4">
                            <p><span className="font-bold">Price:</span> {data.price}</p>
                            <p className="font-bold">{data.status}</p>
                        </div>
                        <div className="mt-3 flex gap-20">
                            <p><span className="font-bold">Area: </span> {data.area}</p>
                            <p><span className="font-bold">location: </span> {data.location}</p>
                        </div>
                        <div className="mt-2">
                            Facilities:{
                                data.facilities.map(a=> <li>{a}</li>)
                            }
                        </div>
                        <Link to={'/'}><button className="btn btn-sm mt-2 btn-primary">Go Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;