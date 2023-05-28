[
    {
        id: 'food 1',
        src: 'src_here',
        name: 'item_name',
        price: 'item_price',
        description: 'item_description'
    },
    {
        id: 'food 2',
        src: 'src_here',
        name: 'item_name',
        price: 'item_price',
        description: 'item_description'
    },
    {
        id: 'food 3',
        src: 'src_here',
        name: 'item_name',
        price: 'item_price',
        description: 'item_description'
    }
]

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

export default Specials