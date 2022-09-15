import React from 'react'
import '../App.css'
import { Button } from './Button'
import './WelcomeSection.css'

function WelcomeSection() {
  return (
    <div className='welcome-container'>
        <video src="/videos/welcomevideo.mp4" autoPlay loop muted />
        <h1>WELCOME TO KENDYL</h1>
        <p>We make your candle wishes come true</p>
        <div className='welcome--btn'>
            <Button className='btn'
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
                SHOW ME!
            </Button>
        </div>
    </div>
  )
}

export default WelcomeSection;