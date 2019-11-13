import React from 'react'

function ChoiceQuizz() {
    return(
        <div>
            <label htmlFor="scales">QCM</label>
            <input type="radio" id="scales" name="scales"/>
            <input type="radio" id="scales" name="scales"/>
            <label htmlFor="scales">True False</label>
            <button className='qcmButton'  >Go!</button>
        </div>
    )


}

export default ChoiceQuizz