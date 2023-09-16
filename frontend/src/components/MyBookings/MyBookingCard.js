import { useDispatch, useSelector } from 'react-redux'
import { deleteBookingById } from '../../store/bookings'
import { useHistory } from 'react-router-dom';


const MyBookingCard = ({booking}) => {
    let sessionUser = useSelector(state => state.session.user);
    let dispatch = useDispatch()
    const history = useHistory();

    const checkin = new Date(booking.startDate);
    const checkout = new Date(booking.endDate);

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteBookingById(booking.id))
    }

    return (
        <div className='reviewCard'>
            <div className='reviewText'>
             <h3>{booking.Spot.name} </h3>
             </div>
            <div className=''>
            <div>Check-in: {checkin.toLocaleDateString('en-US')}</div>
            <div>Checkout: {checkout.toLocaleDateString('en-US')}</div>
           </div>
           {booking.userId === sessionUser.id && 
               <div className='reviewBtns'>
                <button  className='reviewBtns' onClick={handleDelete}>Cancel Reservation</button>
                </div>
                }
        </div>
    )
}

export default MyBookingCard;