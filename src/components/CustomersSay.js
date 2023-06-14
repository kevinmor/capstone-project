import star from '../img/star.svg'
import womanTestimonial from '../img/woman1.jpeg'

const testimonials = [
    {
        testimonial_id: "testimonial-1",
        testimonial_name: "Kat C.",
        testimonial_rating: 5,
        testimonial_review: "insert testimonial text here"
    },
    {
        testimonial_id: "testimonial-2",
        testimonial_name: "John B.",
        testimonial_rating: 5,
        testimonial_review: "insert testimonial text here"
    },
    {
        testimonial_id: "testimonial-3",
        testimonial_name: "Amy V.",
        testimonial_rating: 5,
        testimonial_review: "insert testimonial text here"
    },
    {
        testimonial_id: "testimonial-4",
        testimonial_name: "Derek S.",
        testimonial_rating: 5,
        testimonial_review: "insert testimonial text here"
    }
]

const CustomersSay = () => {
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
        gridColumn: "3 / span 8",
    }

    const testimonialCard = {
        gridColumn: "span 3",
        padding: "1rem 10px 1rem 10px",
        borderRadius: "16px",
    }

    const testimonialImage = {
        maxWidth: "25%",
        height: "75px",
        borderRadius: "50%",
        alignItems: "center"
    }
    const reviewerInfo = {
        alignItems: "center",
        justifySelf: "center"
    }

    const starRatings = {
        alignContent: "center"
    }
 
    const showTestimonials = testimonials.map(review => {
        return(
            <article style={testimonialCard} className="greyBg" key={review.testimonial_id}>
                <div className="row">
                    <img style={testimonialImage} src={womanTestimonial} alt="reviewer" className="column" />
                    <div style={reviewerInfo} className="column">
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
        <section  style={testimonialSection} className='greenBg grid'>
            <h2 style ={testimonialsHeading} className="section-title greyText">Testimonials</h2>
            <div style={testimonialCardsContainer} className="grid">
                {showTestimonials}
            </div>
        </section>
    )
}

export default CustomersSay