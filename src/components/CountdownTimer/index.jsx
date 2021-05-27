import React, { useEffect, useRef, useState } from 'react'

import "./styles.css"

const CountdownTimer = () => {
    const [timerDays, setTimerDays] = useState("00")
    const [timerHours, setTimerHours] = useState("00")
    const [timerMins, setTimerMins] = useState("00")
    const [timerSecs, setTimerSecs] = useState("00")

    let interval = useRef()

    const startTimer = () => {
        const countdownDate = new Date('October 6 2021 00:00:00').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()
            const timeBetween = countdownDate - now

            const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24))
            const hours = Math.floor((timeBetween % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const minutes = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((timeBetween % (1000 * 60)) / 1000)

            if (timeBetween < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMins(minutes)
                setTimerSecs(seconds)

            }

        }, 1000);
    }

    useEffect(() => {
        const intervalRef = interval.current
        startTimer()
        return () => {
            clearInterval(intervalRef)
        }
    })

    return (
        <div className="countdown-container">
            <div className="countdown-grid">
                <section>
                    <div>{timerDays}</div>
                    <div>Days</div>
                </section>
                <span></span>
                <section>
                    <div>{timerHours}</div>
                    <div>Hours</div>
                </section>
                <span></span>
                <section>
                    <div>{timerMins}</div>
                    <div>Mins</div>
                </section>
                <span></span>
                <section>
                    <div>{timerSecs}</div>
                    <div>Secs</div>
                </section>
            </div>
        </div>
    )
}

export default CountdownTimer
