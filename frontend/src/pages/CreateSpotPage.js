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
        <div className="page-layout-for-footer">
        <div>
            <CreateSpotForm spot={newSpot}/>
        </div>

           </div>
        )
}



export default CreateSpotPage