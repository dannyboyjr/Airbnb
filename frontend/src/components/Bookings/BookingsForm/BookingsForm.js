import './BookingsForm.css'

const BookingsForm = () => {
    return (
        <div className="bookingFormCard">
            <div>
                <h3>$[price]</h3>
                <h5>[stars]</h5>
            </div>
            <form className="bookingForm">
                <label>Checkin</label>
                <input
                type='date'
                />
                 <label>checkout</label>
                <input
                type='date'
                />
                 <label>Guess</label>
                <input
                type='number'
                />
                <button className='formButton'>Reserve</button>
            </form>
            <p>you won't be charged yet</p>
            <div>
                <h5>Total before taxes</h5>
                <h5>[amount]</h5>
            </div>
            
        </div>
    )
}

export default BookingsForm