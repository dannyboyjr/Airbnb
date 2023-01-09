
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {editSpot} from '../../store/spotByIdStore'

const EditSpotForm = ({spot, id}) => {


        
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);

        const[name, setName] = useState(spot.name)
        const[description, setDiscription] = useState(spot.description)
        const[address, setAddress] = useState(spot.address)
        const[city, setCity] = useState(spot.city)
        const[state, setState] = useState(spot.state)
        const[country, setCountry] = useState(spot.country)
        const[lat, setLat] = useState(spot.lat)
        const[lng, setLng] = useState(spot.lng)
        const[price, setPrice] = useState(spot.price)
        const[error, setError] = useState(null)
        const[emptyFields, setEmptyFields] = useState([])

        const handleSubmit = async (e) => {
            e.preventDefault()
            if(!sessionUser){
                setError("You must be logged in")
                return
            }

            spot = {id, name,description,address,city,state,country,lat,lng,price}

            console.log(spot)

                
            dispatch(editSpot(spot))
            .then(() => {
                setName("")
                setDiscription("")
                setAddress("")
                setCity("")
                setState("")
                setCountry("")
                setLat("")
                setLng("")
                setPrice("")
                setError(null)
                setEmptyFields([])
            }
            )

            
        }

  

    return sessionUser.id ? (
        <form className='create' onSubmit={handleSubmit}>

            <label>Name:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={emptyFields.includes("name") ? 'error' : ''}
            />

            <label>description: </label>
            <input
                type="text"
                onChange={(e) => setDiscription(e.target.value)}
                value={description}
                className={emptyFields.includes("description") ? 'error' : ''}
            />

            <label>Address</label>
            <input
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                className={emptyFields.includes("address") ? 'error' : ''}
            /> 

            <label>City</label>
            <input
                type="text"
                onChange={(e) => setCity(e.target.value)}
                value={city}
                className={emptyFields.includes("city") ? 'error' : ''}
            />  

            <label>State</label>
            <input
                type="text"
                onChange={(e) => setState(e.target.value)}
                value={state}
                className={emptyFields.includes("state") ? 'error' : ''}
            />  
            <label>country</label>
            <input
                type="text"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                className={emptyFields.includes("country") ? 'error' : ''}
            />  
            <label>latitude</label>
            <input
                type="number"
                onChange={(e) => setLat(e.target.value)}
                value={lat}
                className={emptyFields.includes("latitude") ? 'error' : ''}
            />  
            <label>longitude</label>
            <input
                type="number"
                onChange={(e) => setLng(e.target.value)}
                value={lng}
                className={emptyFields.includes("") ? 'error' : ''}
            />  
            <label>Price</label>
            <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className={emptyFields.includes("price") ? 'error' : ''}
            />  

            <label>Add Photos Section</label>

            <button>Edit Listing</button>
            {error && <div className="error">{error}</div>}

        </form>
    ) : null
}

export default EditSpotForm