import BookingForm from "./BookingForm"
import { useState, useReducer, useEffect } from 'react'

const BookingPage = ({availableTimes, dispatch, submit}) => {
    return(
        <>
            <h1>Book A Table</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submit={submit}/>
        </>
    )
}



export default BookingPage