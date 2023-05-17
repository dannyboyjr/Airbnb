import CreateSpotForm from "../components/CreateSpotForm/CreateSpotForm"
import Footer from '../components/Footer/Footer'

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
            <h1>Add Spot</h1>
            <CreateSpotForm spot={newSpot}/>
        </div>
           <Footer />
           </div>
        )
}



export default CreateSpotPage