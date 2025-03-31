import React from 'react'
import './FooterSection.css'

const FooterSection = () => {
  return (
    <div>
      <div className="footer-container">
        <h2><img src="./src/assets/sphere.webp" alt="solarsphere" id='sphere-img'/> SOLARSPHERE</h2>
        <p>Discover celestial wonders, astronomy events, and join a community passionate about the cosmos and beyond.</p>
        <div className="line">
        </div>
        <div className="about-section">
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>FAQ</li>
            <li>Track your order</li>
        </div>
        <div className="contact-section">
            <div className='section'>
                <div><img src="./src/assets/calliconn.jpg"  className="img-div" alt="callicon" /></div>
                <div className="content-div">
                    <p>Contact:</p>
                    <p>+1(1234)567-8901</p>
                </div>
            </div>
            <div className='section1'>
                <div><img src="./src/assets/msgicon.jpg" className="img-div" alt="" /></div>
                <div className="content-div">
                    <p>Email</p>
                    <p>admin@solarsphere.com</p>
                </div>
            </div>
            <div className='section'>
                <img src="./src/assets/facebookicon.png" className="img-div" alt="facebook" />
                <img src="./src/assets/instagramicon.png" className="img-div" alt="instagram" />
                <img src="./src/assets/twittericon.avif" className="img-div" alt="twitter" />
            </div>
        </div>
        <div className="footer">
            <p>@Copyright SolarSphere2025</p>
            <p>Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    </div>
  )
}

export default FooterSection
