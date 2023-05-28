import BookingForm from "./BookingForm"

const BookingPage = ({availableTimes}) => {
    return(
        <>
            <h1>Book A Table</h1>
            <BookingForm availableTimes={availableTimes}/>
        </>
    )
}



export default BookingPage