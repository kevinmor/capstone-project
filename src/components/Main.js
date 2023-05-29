import {Routes, Route} from'react-router-dom'
import { useState, useReducer, useEffect } from 'react'
import Homepage from './Homepage'
import BookingPage from './BookingPage'

function Main() {
    //the reducer function. will need updating. for now return all the same times
    const updateTimes = (state, action) =>{
        if(action.date != null) return state
    }

//this will be initialized using API data in the end. CONVERT TO FUNCTION
    const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    // const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking-page" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}/>} />                
            </Routes>
        </main>
    )
}

export default Main