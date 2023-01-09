
import CreateSpotForm from "../components/CreateSpotForm/CreateSpotForm"


const CreateSpotPage = () => {

    const newSpot = {
        name: "", 
        description:"", 
        address:"",
        city:"",
        state:"",
        country:"",
        lat:"",
        lng:"",
        price:"",
    
    }
    

    return (
        <div>
            <h1>Add Spot</h1>
            <CreateSpotForm spot={newSpot}/>
        </div>
        )
}



export default CreateSpotPage