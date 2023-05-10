import chef from '../img/rcb.jpg'

const Homepage = () => {
    // const homepageContainer = {
    //     display: "flex",
    //     justifyContent: "center"
    // }
    return(
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

export default Homepage