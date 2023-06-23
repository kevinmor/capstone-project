import bg from '../img/restaurant.jpg'

const ConfirmedBooking = (formData, mobile) => {
    const confirmMsg = {
        gridColumn: "3 / span 8",
        alignSelf: "center",
        justifySelf: "center",
        fontFamily: "'Karla', sans-serif",
        fontSize: "46pt",
        fontWeight: "800",
        marginTop: 0,
        marginBottom: 0,
        textAlign: mobile && "center"
    }
    const detailsMsg = {
        fontFamily: "'Karla', sans-serif",
        fontSize: "24pt",
        fontWeight: "900",
        marginTop: 0,
        marginBottom: 0,
    }

    const confirmDetails = {
        gridColumn: "3 / span 8",
        justifySelf: "center",
        justifyContent: "center",
        padding: "2rem",
        borderRadius: "16px"
    }

    const detailsList = {
        padding: 0,
        fontFamily: "'Karla', sans-serif",
        fontSize: "18pt",
        fontWeight: "800",
        listStyleType: "none",
    }

    const submittedData = formData.formData

    const confirmBg = {
        backgroundImage: "url(" + bg + ")",
        boxShadow: "inset 0 0 0 1000px rgba(73,94,87,.85)"
    }

    return(
        <section className={mobile ? "grid section-padding" : "mobile-container greenBg"} style={confirmBg}>
            <h1 style={confirmMsg} className="yellowText">Booking is Confirmed!</h1>
            <article style={confirmDetails} className="greyBg">
                <h2 style={detailsMsg} className="blackText">Your reservation details:</h2>
                <ul style={detailsList} className="blackText p-text">
                    <li>Date: <span style={{textDecoration: "underline"}}>{submittedData.date}</span></li>
                    <li>Time: <span style={{textDecoration: "underline"}}>{submittedData.time}</span></li>
                    <li>Number of Guests: <span style={{textDecoration: "underline"}}>{submittedData.guests}</span></li>
                    <li>Occasion: <span style={{textDecoration: "underline"}}>{submittedData.occasion}</span></li>
                </ul>
            </article>
        </section>
    )
}

export default ConfirmedBooking