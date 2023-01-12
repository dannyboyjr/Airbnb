import './CreateSpotForm.css'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createSpot } from '../../store/spots'


const CreateSpotForm = ({spot}) => {
        
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory()

        const[name, setName] = useState(spot.name)
        const[description, setDiscription] = useState(spot.description)
        const[address, setAddress] = useState(spot.address)
        const[city, setCity] = useState(spot.city)
        const[state, setState] = useState(spot.state)
        const[country, setCountry] = useState(spot.country)
        const[lat, setLat] = useState(spot.lat)
        const[lng, setLng] = useState(spot.lng)
        const[price, setPrice] = useState(spot.price)
        const[error, setError] = useState([])


        const handleSubmit = async (e) => {
            e.preventDefault()
            setError([])
            if(!sessionUser){
                setError("You must be logged in")
                return
            }

             const spot = {name, 
                        description, 
                        address,
                        city,
                        state,
                        country,
                        lat,
                        lng,
                        price
                    }

                
            dispatch(createSpot(spot))
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
                 history.push("/")
            }).catch( async response => {
                const data = await response.json()
                console.log("THIS IS THE DATA")
                console.log(data)
                if (data.errors)setError(data.errors)

            })

        }

  

    return sessionUser.id ? (
        <form className='create' onSubmit={handleSubmit}>

            {error.length > 0 && 
            <ul>
            {error.map((e, i ) => (
                <li key={i}>{e}</li>
            ))}
            </ul>
            }

            <label>Name:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />

            <label>description: </label>
            <input
                type="text"
                onChange={(e) => setDiscription(e.target.value)}
                value={description}
            />

            <label>Address</label>
            <input
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
            /> 

            <label>City</label>
            <input
                type="text"
                onChange={(e) => setCity(e.target.value)}
                value={city}
            />  

            <label>State</label>
            <input
                type="text"
                onChange={(e) => setState(e.target.value)}
                value={state}
            />  
            <label>country</label>
            <input
                type="text"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
            />  
            <label>latitude</label>
            <input
                type="number"
                onChange={(e) => setLat(e.target.value)}
                value={lat}
            />  
            <label>longitude</label>
            <input
                type="number"
                onChange={(e) => setLng(e.target.value)}
                value={lng}
            />  
            <label>Price</label>
            <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
            />  

            <label>Add Photos Section</label>

            <button>Add Listing</button>

        </form>
    ) : null
}

export default CreateSpotForm