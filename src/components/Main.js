import {Routes, Route, useNavigate} from'react-router-dom'
import { useState, useReducer } from 'react'
import Homepage from './Homepage'
import BookingPage from './BookingPage'
import ConfirmedBooking from './ConfirmedBooking'
import { fetchAPI, submitAPI } from '../api/api'



function Main() {    
    const initializeTimes = () => fetchAPI(new Date())
    const updateTimes = (state, action) =>{
        state = fetchAPI(new Date(action.date))
        return state
    }
    const [submittedData, setSubmittedData] = useState("")
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())
    const navigate = useNavigate()
    const submitForm = (formdata) => {
        setSubmittedData(formdata)
        navigate('confirmed-booking')
        return submitAPI(formdata)
    }
    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking-page" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submit={submitForm}/>} />                
                <Route path="confirmed-booking" element={<ConfirmedBooking formData={submittedData} />} />
            </Routes>
        </main>
    )
}

export default Main