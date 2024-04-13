import { useContext } from "react";
import { AuthContext } from "../../ContexComponent/ContextComponent";
import { useParams } from "react-router-dom";


const CardDetails = () => {
    const {userData} = useContext(AuthContext)
    const {id} = useParams()

    const data = userData.find(card => card.id == id)
    console.log(data)
    return (
        <div>
            card details {data.id}
        </div>
    );
};

export default CardDetails;