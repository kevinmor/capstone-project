import chef from '../img/rcb.jpg'

const Hero = () => {
    return (
        <div className='greenBg'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus tortor id placerat luctus. Nullam tincidunt. </p>
            {/* update button for accessibility and to link properly */}
            <button>
                Reserve a table now
            </button>
            <img src={chef} height={250} width={350} alt=""/>
        </div>
    )
}

const Specials = () => {
    return (
        <section>
            <h1>This weeks Specials!</h1>
            {/* Update button for accessibility */}
            <button>Online Menu</button>
            <p>Insert 3 cards with specials here</p>
        </section>
    )
}

const Testimonials = () => {
    return (
        <section className='greenBg'>
            <h2>Testimonials</h2>
            <p>Insert 3-4 cards with testimonials here based on figma design</p>
        </section>
    )
}

const About = () => {
    return (
        <section>
            <h1>About Section</h1>
            <p>Insert text here</p>
        </section>
    )
}

const Homepage = () => {
    // const homepageContainer = {
    //     display: "flex",
    //     justifyContent: "center"
    // }
    return(
        <>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </>
    )
}



export default Homepage