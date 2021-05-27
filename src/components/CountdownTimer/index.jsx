import React from 'react'

import "./styles.css"

const CountdownTimer = () => {
    return (
        <div className="countdown-container">
            <div className="countdown-grid">
                <section>
                    <div>66</div>
                    <div>Days</div>
                </section>
                <span></span>
                <section>
                    <div>66</div>
                    <div>Hours</div>
                </section>
                <span></span>
                <section>
                    <div>66</div>
                    <div>Mins</div>
                </section>
                <span></span>
                <section>
                    <div>66</div>
                    <div>Secs</div>
                </section>
            </div>
        </div>
    )
}

export default CountdownTimer
