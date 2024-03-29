import Button from './Button'
import salad from '../img/salad.jpg'
import bruschetta from '../img/bruschetta.jpg'
import lemonDessert from '../img/dessert.jpg'

const specialsCards = [
    {
        id: 'Greek Salad',
        src: salad,
        name: 'Greek Salad',
        price: '$12.99',
        description: 'This is a fresh Greek Salad with tomatoes, croutons, fresh kale and a Mediterranean dressing. Great for health conscious diners.'
    },
    {
        id: 'Bruschetta',
        src: bruschetta,
        name: "Burschetta",
        price: '$5.99',
        description: 'A warm fresh bread that is perfectly compliments any entree you choose. Crispy and fluffy, perfect to top.'
    },
    {
        id: 'Lemon Dessert',
        src: lemonDessert,
        name: 'Lemon Dessert',
        price: '$5.00',
        description: 'A sweet, zest, tart dessert that is made of our soft and flaky dough. Refreshing, feeling and sweet!'
    }
]


const Specials = ({mobile}) => {
    const cardsContainer = {
        gridColumn: mobile && "3 / span 8"
    }

    const cardStyle = {
        borderRadius: "16px",
        gridColumn: "span 4",
        paddingBottom: "2rem",
        marginBottom: !mobile && "2rem"
    }

    const cardImg = {
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
        height: "200px", 
        width: "100%"
    }

    const cardHeading = {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "0 1rem 0 1rem"
    }
    const cardDescription = {
        padding: "0 1rem 0 1rem", 
        marginTop: 0, 
        marginBottom: 0,
        // overflow: "auto"
    }


    const displayCards = specialsCards.map(item => {
            return(
                <article key={item.id} style={cardStyle} className="greyBg">
                    <img src={item.src} alt={item.name} style={cardImg}/>
                    <div style={cardHeading}>
                        <h3 className="card-title blackText">{item.name}</h3>
                        <h3 className="card-title orangeText">{item.price}</h3>                             
                    </div>
                    <p style={cardDescription} className="p-text">{item.description}</p>
                </article>
            )
        })

    return (
        <section className={mobile ? "grid section-padding" : "mobile-container"}>
            <div className={mobile ? "specials-heading" : "mobile-specials"}>
                <h1 className="specials">This Weeks Specials!</h1>
                {/* Update button for accessibility */}
                {/* <button style={btn} className="blackText buttonFont"
                    onMouseEnter={() => setColor('#EE9972')}
                    onMouseLeave={() => setColor('#F4CE14')}
                >
                    Online Menu
                </button> */}
                <Button btnText='Online Menu'/>
            </div>
            <div style={cardsContainer} className={mobile ? "grid" : "mobile-specials-cards"}>
                {displayCards}
            </div>
        </section>
    )
}

export default Specials