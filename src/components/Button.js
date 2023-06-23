import { useState } from 'react'

const Button = ({btnText, evtName, evtHandler}) => {
    const [resBtn, setResBtn] = useState([
        '#F4CE14', ''
    ])


    const btnStyle = {
        marginTop: "1rem",
        padding: "1rem",
        borderRadius: "16px",
        borderStyle: "none",
        backgroundColor: resBtn[0],
        cursor: resBtn[1]
    }

    return(
        <>
            <button style={btnStyle} className="blackText buttonFont"
                onMouseEnter={() => setResBtn(['#EE9972', 'pointer']) }
                onMouseLeave={() => setResBtn(['#F4CE14', ''])}
                onClick={() => evtHandler ? evtHandler() : ''}
            >
                {btnText}
            </button>
        </>
    )
}

export default Button