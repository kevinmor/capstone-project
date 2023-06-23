import { useNavigate } from 'react-router-dom'
import Button from './Button'
import chef from '../img/rcb.jpg'

const CallToAction= ({mobile}) => {


    // const [mobile, setMobile] = useState(
    //     window.matchMedia("(min-width: 768px)").matches
    // )
    // useEffect(() => {
    //     window
    //     .matchMedia("(min-width: 768px)")
    //     .addEventListener('change', e => setMobile(e.matches))
    // }, [])


    const navigate = useNavigate()


    const callToActionText = {
        gridColumn: mobile ? "3 / span 4" : "3 / span 5",
        justifySelf: !mobile && "center",
        marginTop: "0",
        paddingTop: "0"
    }
    const chefImg = {
        gridColumn: "span 4",
        alignSelf: "start",
        height: "115%",
        maxWidth:"100%"
    }


    const testHand = () => navigate('/booking-page')

    return (
        <section className={mobile ? "grid sectionStyle greenBg" : "mobile-container callText greenBg"} >
            <div style={callToActionText}>
                <h1 className="action-text yellowText">Little Lemon</h1>
                <h2 className="subtitle-text greyText">Chicago</h2>
                <p className="lead-text greyText" style={{marginTop: "2rem", marginBottom: "2rem"}}>
                    We are a family owned restaurant, with a focus on traditional recipes but with a modern twist!
                </p>
                <Button btnText='Reserve a table now' evtName='onClick' evtHandler={testHand}/>

            </div>
            {mobile && <img src={chef} alt="" style={chefImg}/> }
        </section>
    )
}

export default CallToAction