import BookingForm from "./BookingForm"
import { useState, useReducer } from 'react'



const BookingPage = ({availableTimes, dispatch}) => {
    return(
        <>
            <h1>Book A Table</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
        </>
    )
}



export default BookingPage