import star from '../img/star.svg'
import {Woman1, Woman2, Man1, Man2} from "../img"

const testimonials = [
    {
        testimonial_id: "testimonial-1",
        testimonial_name: "Kat C.",
        testimonial_rating: 5,
        testimonial_review: "The food was fresh and great for an evening out with friends!",
        testimonial_img: Woman1
    },
    {
        testimonial_id: "testimonial-2",
        testimonial_name: "John B.",
        testimonial_rating: 5,
        testimonial_review: "A great place to reserve a table for my family of 5 and options for all.",
        testimonial_img: Man1
    },
    {
        testimonial_id: "testimonial-3",
        testimonial_name: "Amy V.",
        testimonial_rating: 5,
        testimonial_review: "This food reminds me of what my mother used to make, but with a twist!",
        testimonial_img: Woman2
    },
    {
        testimonial_id: "testimonial-4",
        testimonial_name: "Derek S.",
        testimonial_rating: 5,
        testimonial_review: "We had an amazing evening and will surely be back for more.",
        testimonial_img: Man2
    }
]

const CustomersSay = ({mobile}) => {
    const testimonialSection = {
        maxWidth: "100%",
        paddingTop: "5rem", 
        paddingBottom: "5rem",
    }

    const testimonialsHeading = {
        gridColumn: "3 / span 8",
        textAlign: "center"
    }

    const testimonialCardsContainer = {
        gridColumn: mobile && "3 / span 8",
        marginTop: !mobile && "1rem"

    }

    const testimonialCard = {
        gridColumn: mobile && "span 3",
        padding: "1rem 1rem 1rem 1rem",
        borderRadius: "16px",
        marginBottom: "1rem"
    }

    const testimonialImage = {
        display: "flex",
        flexDirection: "column",
        width: "35%",
        height: mobile ? "90px" : "150px",
        borderRadius: "50%",
        alignSelf: "center",
    }


    const starRatings = {
        display: "flex",
        justifyContent: "center",
    }

    const column2 = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "65%",
    }
 
    const showTestimonials = testimonials.map(review => {
        return(
            <article style={testimonialCard} className="greyBg" key={review.testimonial_id}>
                <div className="row">
                    <img style={testimonialImage} src={review.testimonial_img} alt="reviewer"/>
                    <div style={column2}>
                        <h3 className="card-title blackText">{review.testimonial_name}</h3>
                        <div style={starRatings}>
                            <img src={star} alt="1 star rating" width="10%"/>
                            <img src={star} alt="1 star rating" width="10%"/>
                            <img src={star} alt="1 star rating" width="10%"/>
                            <img src={star} alt="1 star rating" width="10%"/>
                            <img src={star} alt="1 star rating" width="10%"/>
                        </div>
                    </div>
                </div>
            
                <p className="p-text blackText">{review.testimonial_review}</p>
            </article>
        )
    })

    return (
        <section  style={testimonialSection} className={mobile ? 'greenBg grid' : 'mobile-container greenBg'}>
            <h2 style ={testimonialsHeading} className="section-title greyText">Testimonials</h2>
            <div style={testimonialCardsContainer} className={mobile ? "grid" : "testimonials"}>
                {showTestimonials}
            </div>
        </section>
    )
}

export default CustomersSay