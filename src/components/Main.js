import {Routes, Route} from'react-router-dom'

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<Booking />} />
            </Routes>
        </main>
    )
}

export default Main