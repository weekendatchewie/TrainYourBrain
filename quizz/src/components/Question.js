import React from "react"
import './Question.css'

function Question(props) {
    return(
        <div className='question'>
            <p>{props.question}</p>
        </div>
    )
}

export default Question