import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { useState, useEffect } from "react"



function App() {
    //handles tracks window size for mobile responsiveness 
    const [mobile, setMobile] = useState(
      window.matchMedia("(min-width: 768px)").matches
  )
    useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMobile(e.matches))
    }, [])

  const container = {
    minHeight: "100vh"
  }

  return (
    <div style={container}>
      <Header mobile={mobile}/>
      <Main mobile={mobile}/>
      <Footer mobile={mobile}/>
    </div>
  )
}

export default App