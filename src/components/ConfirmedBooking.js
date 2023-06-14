const ConfirmedBooking = (formData) => {
    const confirmMsg = {
        gridColumn: "3 / span 8",
        alignSelf: "center",
        justifySelf: "center",
        fontFamily: "'Karla', sans-serif",
        fontSize: "40pt",
        fontWeight: "800",
        marginBottom: 0,
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
        // gridColumn: "3 / span 8",
        // alignSelf: "center",
        // justifySelf: "center",
        padding: 0,
        fontFamily: "'Karla', sans-serif",
        fontSize: "18pt",
        fontWeight: "800",
        listStyleType: "none",
    }

    const submittedData = formData.formData

    return(
        <section className="grid section-padding greenBg">
            <h1 style={confirmMsg} className="yellowText">Booking is Confirmed!</h1>
            <article style={confirmDetails} className="greyBg">
                <h2 style={detailsMsg} className="blackText">Your reservation details:</h2>
                <ul style={detailsList} className="blackText p-text">
                    <li>Date: {submittedData.date}</li>
                    <li>Time: {submittedData.time}</li>
                    <li>Number of Guests: {submittedData.guests}</li>
                    <li>Occasion: {submittedData.occasion}</li>
                </ul>
            </article>
        </section>
    )
}

export default ConfirmedBooking