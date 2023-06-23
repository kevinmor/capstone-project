import CallToAction from './CallToAction'
import Specials from './Specials'
import CustomersSay from './CustomersSay'
import Chicago from './Chicago'




const Homepage = ({mobile}) => {
    return(
        <>
            <CallToAction mobile={mobile} />
            <Specials mobile={mobile} />
            <CustomersSay mobile={mobile} />
            <Chicago mobile={mobile} />
        </>
    )
}



export default Homepage