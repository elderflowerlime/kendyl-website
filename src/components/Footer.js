import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className='footer-subscription-heading'>
            Join our newsletter for the newest deals!
            </p>
            <p className='footer-subscription-text'>
            You can unsubscribe at any time
            </p>
            <div className='footer-input-areas'>
                <form>
                    <input 
                    type="email" 
                    names="email" 
                    placeholder='Your Email' 
                    className="footer-input"/>
                    <Button buttonStyle="btn--outline">Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>KENDYL</h2>
                    <Link to=''>Contact Us</Link>
                    <Link to=''>About Kendyl</Link>
                    <Link to=''>FAQ</Link>
                    
                </div>
                <div className="footer-link-items">
                    <h2>Where you can find us:</h2>
                    <Link to=''>INSTAGRAM</Link>
                    <Link to=''>FACEBOOK</Link>
                    <Link to=''>TIKTOK</Link>
                    
                </div>
            </div>
        </div>
        <div className="section-copyrights">
            KENDYL Ⓒ 2022
        </div>
    </div>
  )
}

export default Footer