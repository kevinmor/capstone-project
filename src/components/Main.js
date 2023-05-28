import {Routes, Route} from'react-router-dom'
import { useState } from 'react'
import Homepage from './Homepage'
import BookingPage from './BookingPage'

function Main() {
    const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])

    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking-page" element={<BookingPage availableTimes={availableTimes}/>} />                
            </Routes>
        </main>
    )
}

export default Main