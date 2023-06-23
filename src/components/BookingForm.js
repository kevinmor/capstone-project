import { useState} from 'react'

const BookingForm = ({availableTimes, dispatch, submit, mobile}) => {

    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [guests, setGuests] = useState("")
    const [occasion, setOccasion] = useState("")
    const [shadow, setShadow] = useState("none")

    const formData = {
        date: date,
        time: time,
        guests: guests,
        occasion: occasion
    }

    //may need to use a state variable to populate with form data
    const handleSubmit = (e) => {
        e.preventDefault()
        submit(formData)
    }

    const validForm = () => date && time && (guests >= 1 && guests <= 10)&& occasion

    const container = {
        gridColumn: "3 / span 8",
        borderRadius: "16px",
        padding: "30px",
        display: mobile && "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: "2rem",
        alignItems: "start"
    }
    const instructions = {
        gridColumn: "3 / span 4",
        gridRow: "1",
        backgroundColor: "white",
        borderRadius: "16px",
        margin: 0,
        padding: "1rem 2rem 6rem 1rem",
        // boxShadow: !validForm()? "none" : shadow

    }

    const formStyle= {
        paddingTop: "1rem",
        gridRow: "1",
        gridColumn: "7 / span 4",
        display: "flex",
        flexWrap: "wrap",
        // border: "1px solid red",
        alignItems: "center",
    }

    const fieldValidStyle = {
        color: 'green'
    }
    const fieldInvalidStyle = {
        color: 'red'
    }

    const selectStyle = {
        padding: "1rem",
        marginTop: "1rem",
        marginBottom: "1rem",
        width: "100%"
    }

    const fieldStyle = {
        padding: "1rem",
        marginTop: "1rem",
        marginBottom: "1rem",
        width: "92%"
    }

    const btnStyle = {
        padding: "1rem",
        margin: "0 auto 1rem auto",
        width: "50%",
        borderRadius: "16px",
        backgroundColor: !validForm() ? "grey" : "green",
        cursor: !validForm() ? "auto" : "pointer",
        boxShadow: !validForm() ? "none" : shadow,

    }

    const mobileInstructions = {
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "1rem",
        marginBottom: "1rem"
    }

    const mobileFormStyle = {
        display: "flex",
        flexDirection: "column",
        width: "100%"
    }


    return(
        <section style={container} className="greyBg">     
            <article style={mobile ? instructions : mobileInstructions}>
                <h2 style={{paddingLeft: "1.25rem"}} className="section-title">Instructions:</h2>
                <ul className="p-text">
                    <li>All fields marked with an asterisk <span style={fieldInvalidStyle}>*</span> must be completed</li>
                    <li>A field that has been successfully filled will have a checkmark <span style={fieldValidStyle}>✓</span></li>
                    <li>The submit button will not be enabled until all required fields are completed</li>
                </ul>
            </article>
            <form style={mobile ? formStyle : mobileFormStyle} onSubmit={handleSubmit}>                
                <label htmlFor="res-date" className="lead-text">Reservation Date 
                    {date !== "" ? <span style={fieldValidStyle}>✓</span> : <span style={fieldInvalidStyle}> *</span>}:
                </label>
                <input type="date" id="res-date" name="res-date"
                    style={fieldStyle}
                    value={date}
                    onChange={(e) => {
                        dispatch({date: e.target.value})
                        setDate(e.target.value)
                    }}
                    required
                />

                <label htmlFor="res-time" className="lead-text">Time
                {time !== "" ? <span style={fieldValidStyle}>✓</span> : <span style={fieldInvalidStyle}> *</span>}:
                </label>
                <select id="res-time" name="res-time"
                    style={selectStyle}
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    aria-required="true"
                >
                <option value="">Select a Time</option>
                {availableTimes.map( i => <option key={i} value={i}>{i}</option>)}
                </select>

                <label htmlFor="guests" className="lead-text">Number of guests (1-10)
                    {guests >= 1 && guests <= 10 ? <span style={fieldValidStyle}>✓</span> : <span style={fieldInvalidStyle}> *</span>}:
                </label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests"
                    style={fieldStyle}
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    required
                    aria-required="true"
                />
    
                
                <label htmlFor="occasion" className="lead-text">Occasion
                    {occasion !== "" ? <span style={fieldValidStyle}>✓</span> : <span style={fieldInvalidStyle}> *</span>}:
                </label>
                <select id="occasion" name="occasion"
                    style={selectStyle}
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    required
                    aria-required="true"
                >
                    <option value="">Select an Occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input style={btnStyle} className="greyText lead-text" type="submit" role="button" 
                    value="Submit" disabled={!validForm()} 
                    onMouseEnter={() => setShadow("rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px")}
                    onMouseLeave={() => setShadow("none")}
                />
            </form>
        </section>
    )
}

export default BookingForm