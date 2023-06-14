import chef from '../img/rcb.jpg'

const CallToAction= () => {

    const sectionStyle = {
        padding: "2rem 0 2rem 0",
        alignItems: "center"
    }

    const callToActionText = {
        gridColumn: "3 / span 4",
        marginTop: "0",
        paddingTop: "0"
    }
    const chefImg = {
        gridColumn: "span 4",
        alignSelf: "start",
        height: "115%",
        maxWidth:"100%"
    }

    const btn = {
        marginTop: "1rem",
        padding: "1rem",
        borderRadius: "16px",
        borderStyle: "none",
    }

    return (
        <section style={sectionStyle} className="grid greenBg" >
            <div style={callToActionText}>
                <h1 className="action-text yellowText">Little Lemon</h1>
                <h2 className="subtitle-text greyText">Chicago</h2>
                <p className="lead-text greyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus tortor id placerat luctus. Nullam tincidunt. </p>
                {/* update button for accessibility and to link properly */}
                <button style={btn} className="yellowBg blackText buttonFont">
                    Reserve a table now
                </button>
            </div>
            <img src={chef} alt="" style={chefImg}/>
        </section>
    )
}

export default CallToAction