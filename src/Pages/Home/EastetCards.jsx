import { useContext } from "react";
import { AuthContext } from "../../ContexComponent/ContextComponent";

import SingleCard from "./SingleCard";

const EastetCards = () => {
    const {userData, loading} = useContext(AuthContext)
    console.log(userData)
    if(loading){
        return <div className="text-center mt-10"><span className="loading loading-spinner loading-lg mx-auto"></span></div>
    }
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 p-4">
            {
                userData.map(data => <SingleCard key={data.id} data={data}></SingleCard>)
            }
        </div>
    );
};

export default EastetCards;