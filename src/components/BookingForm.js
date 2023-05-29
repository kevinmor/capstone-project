import { useState, useEffect, useReducer } from 'react'
import { fetchAPI, submitAPI } from '../api/api'


const BookingForm = ({availableTimes, dispatch, submit}) => {

    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [guests, setGuests] = useState("")
    const [occasion, setOccasion] = useState("")

    //may need to use a state variable to populate with form data
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            date: date,
            time: time,
            guests: guests,
            occasion: occasion
        }
    }

    const validForm = () => date && time && guests >= 1 && occasion
    const formStyle = {
        display: "grid",
        maxWidth: "200px",
        gap: "20px"
    }

    return(
        <>
            <h1>Book Now</h1>
            <form onSubmit={handleSubmit} style={formStyle}>                
                <label htmlFor="res-date">Desired Reservation Date:</label>
                <input type="date" id="res-date" name="res-date"
                    value={date}
                    onChange={(e) => {
                        dispatch({date: e.target.value})
                        setDate(e.target.value)
                    }}
                    required
                />

                <label htmlFor="res-time">Desired Time:</label>
                <select id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                >
                <option value="">Select a Time</option>
                {availableTimes.map( i => <option key={i} value={i}>{i}</option>)}
                </select>

                <label htmlFor="guests">Number of guests:</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" 
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    required
                />
                
                <label htmlFor="occasion">Occasion:</label>
                <select id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    required
                >
                    <option value="">Select an Occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                
                <input type="submit" value="Make your reservation" disabled={!validForm()} />
            </form>
        </>
    )
}

export default BookingForm