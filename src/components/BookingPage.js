import BookingForm from "./BookingForm"

const BookingPage = ({availableTimes, dispatch, submit}) => {
    const headerStyle = {
        gridColumn: "3 / span 8"
    }
    return(
        <section className="grid">
            <h1 style={headerStyle} className="section-title"> Book A Table</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submit={submit}/>
        </section>
    )
}



export default BookingPage