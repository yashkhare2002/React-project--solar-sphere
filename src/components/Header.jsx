import React from 'react'
import './Header.css'

const Header = () => {
  const handleSubmit = ()=>{
    console.log("btn clicked")
  }
  return (
    <div>
      <div className="header-container">
        <div className="header-image">
          <div className="header-navbar">
            <div className="header-navbar-heading">
              <img src="./src/assets/logo.jpeg" alt="logoimage" id='logo-image'/>
              <h1>SOLARSPHERE</h1>
            </div>
            <div className="header-navbar-pages">
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Services</li>
              <li>Blog</li>
            </div>
            <div className="header-navbar-button">
              <button>
                Get started
              </button>
            </div>
          </div>
          <div className="header-content">
            <div className="header-left">
              <h1>Harness the power of the Sun</h1>
              <p> Eco-friendly, cost-effective and reliable solar solution foryour Home and Business, Discover our Premium Solar Products</p>
              <button>Explore products 
                <img id='header-left-image' src="./src/assets/electricityicon.jpeg" alt="" />
              </button>
            </div>
            <div className="header-right">
              <div className='items' id='div1'>
                <h1>30 %</h1>
                Recduce Carbon Footprint
              </div>
              <div className='items' id='div2'>
                <h1>20 %</h1>
                <p>reduced Energy Bills</p>
              </div>
              <div className='items' id='div3'>
                <div className="div3-left">
                  <img src="./src/assets/user1.jpeg" alt="user" />
                  <img src="./src/assets/user2.jpg" alt="user" />
                  <img src="./src/assets/user3.avif" alt="user" />
                  <img src="./src/assets/user4.jpeg" alt="user" />
                  <img src="./src/assets/user5.jpg" alt="user" />
                </div>
                <div className="div3-right">
                  <div className="div3-img">
                    <img src="./src/assets/staricon.webp" alt="image" id='icon-star'/>
                    <img src="./src/assets/staricon.webp" alt="image" id='icon-star'/>
                    <img src="./src/assets/staricon.webp" alt="image" id='icon-star'/>
                    <img src="./src/assets/staricon.webp" alt="image" id='icon-star'/>
                    <img src="./src/assets/staricon.webp" alt="image" id='icon-star'/>
                  </div>
                  <div className="div3-para">
                    <p>10K+ Worldwide Users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
