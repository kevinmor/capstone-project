import { useState, useEffect } from 'react'

const BookingForm = ({availableTimes}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const formStyle = {
        display: "grid",
        maxWidth: "200px",
        gap: "20px"
    }

    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [guests, setGuests] = useState("")
    const [occasion, setOccasion] = useState("")

    const showTimes = availableTimes.map( i => <option key={i}>{i}</option>)

    useEffect(() => {
        console.log(availableTimes)
    }, [])


    return(
        <form onSubmit={handleSubmit} style={formStyle}>
            <label htmlFor="firstname">First name:</label>
            <input type="text" name="firstname" id="firstname" />

            
            <label htmlFor="res-date">Desired Reservation Date:</label>
            <input type="date" id="res-date" name="res-date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            
            <label htmlFor="res-time">Desired Time:</label>
            <select id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            >
            {showTimes}
            </select>

            <label htmlFor="guests">Number of guests:</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" 
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
            />
            
            <label htmlFor="occasion">Occasion:</label>
            <select id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            
            <input type="submit" value="Make your reservation" />
        </form>
    )
}

export default BookingForm