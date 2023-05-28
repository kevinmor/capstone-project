import CallToAction from './CallToAction'
import Specials from './Specials'
import CustomersSay from './CustomersSay'
import Chicago from './Chicago'




const Homepage = () => {
    // const homepageContainer = {
    //     display: "flex",
    //     justifyContent: "center"
    // }
    return(
        <>
            <CallToAction />
            {/* <Specials /> */}
            <CustomersSay />
            <Chicago />
        </>
    )
}



export default Homepage