import about1 from '../img/about1.jpg'
import about2 from '../img/about2.jpg'

const Chicago = () => {

    const aboutText = {
        gridColumn: "3 / span 3",
    }
    const aboutImages = {
        gridColumn: "span 5",
        position: "relative"
    }

    const aboutHeading = {
        fontSize: "3.3331rem", 
        marginTop:0,
        marginBottom: "1rem"
    }

    const aboutImg1 = {
        gridColumn: "1 / span 8",
        gridRow: "1",
        paddingTop: "20%",
        width: "100%",
        zIndex: "1"
    }
    const aboutImg2 = {
        gridColumn: "4 / -1",
        gridRow: "1",
        width: "100%"
    }

    return (
        <section className="grid greyBg section-padding">
            <article style={aboutText}>
                <h1 style={aboutHeading} className="section-title blackText">Little Lemon</h1>
                <h2 className="blackText">Chicago</h2>
                <p className="p-text blackText"> 
                    Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean
                    restaurant, focused on traditional recipes served with a modern twist.
                    The chefs draw inspiration from Italian, Greek, and Turkish culture and
                    have a menu of 12–15 items that they rotate seasonally.
                    The restaurant has a rustic and relaxed atmosphere with moderate prices,
                    making it a popular place for a meal any time of the day.
                </p>
            </article>
            <div style={aboutImages} className="grid">
                <img src={about1} alt="" style={aboutImg1} />
                <img src={about2} alt="" style={aboutImg2} />
            </div>
        </section>
    )
}

export default Chicago