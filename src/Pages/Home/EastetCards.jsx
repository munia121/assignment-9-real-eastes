import { useContext } from "react";
import { AuthContext } from "../../ContexComponent/ContextComponent";

import SingleCard from "./SingleCard";

const EastetCards = () => {
    const {userData} = useContext(AuthContext)
    console.log(userData)
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 p-4">
            {
                userData.map(data => <SingleCard key={data.id} data={data}></SingleCard>)
            }
        </div>
    );
};

export default EastetCards;