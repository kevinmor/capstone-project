import Header from "./components/Header"
// import Main from "./components/Main"
import Footer from "./components/Footer"
import Homepage from "./components/Homepage"
import Booking from "./components/Booking"
import { Routes, Route } from "react-router-dom"

function App() {
  const container = {
    padding: "20px",
    display: "grid",
    gridTemplateRows: "50px auto auto",
    // gridAutoColumns: "1fr",
    // gridAutoFlow: "column",
    minHeight: "100vh"
  }

  return (
    <div style={container}>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App