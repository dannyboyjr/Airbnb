import { useParams } from "react-router-dom";
import Spot from '../components/Spot/Spot'
import Reviews from "../components/Reviews/Reviews";



const SpotPage = () => {

    const { id } = useParams();

    return (
        <div>
            <Spot id={id} />
            <Reviews id={id}/>
            </div>
        )
}



export default SpotPage