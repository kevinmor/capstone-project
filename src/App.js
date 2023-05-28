import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"



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
      <Main />
      <Footer />
    </div>
  )
}

export default App