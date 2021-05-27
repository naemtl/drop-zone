import React from 'react'

import "./styles.css"

const CountdownTimer = () => {
    return (
        <div className="countdown-container">
            <section>
                <p>66</p>
                <p><small>Days</small></p>
            </section>
            <span>:</span>
            <section>
                <p>66</p>
                <p><small>Hours</small></p>
            </section>
            <span>:</span>
            <section>
                <p>66</p>
                <p><small>Mins</small></p>
            </section>
            <span>:</span>
            <section>
                <p>66</p>
                <p><small>Secs</small></p>
            </section>
        </div>
    )
}

export default CountdownTimer
