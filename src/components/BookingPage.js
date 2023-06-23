import BookingForm from "./BookingForm"

const BookingPage = ({availableTimes, dispatch, submit, mobile}) => {
    const headerStyle = {
        gridColumn: "3 / span 8"
    }
    return(
        <section className={mobile? "grid" : "mobile-container"}>
            <h1 style={headerStyle} className="section-title"> Book A Table</h1>
            <BookingForm mobile={mobile} availableTimes={availableTimes} dispatch={dispatch} submit={submit}/>
        </section>
    )
}



export default BookingPage