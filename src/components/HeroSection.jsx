import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <div className="hero-header">
            <div className="hero-header-heading">
                <div>
                    <h1>Featured Products</h1>
                    <p>Discover our top solar products high effeciency pnels,versatile solar idts,durable batteries,
                        and smart invertors,Power your life sustainably!
                    </p>
                </div>
                <div>
                    <button className="hero-button" id="hero-button-left" onclick="plusDivs(-1)"><img src="./src/assets/leftarrow.png" class="arrow-button"/></button>
                    <button className="hero-button" id="hero-button-right" onclick="plusDivs(+1)"><img src="./src/assets/rightarrow.jpg" class="arrow-button"/></button>
                </div>
            </div>
        <div className="hero-header-card">
            {/* card-1 */}
            <div className="card">
                <img src="./src/assets/solarinverter.jpeg" alt="image" id='card-image' />
                <div className="card-footer">
                    <div className="card-footer-left">
                        <p>solar Inverter</p>
                        <h3>$1,500</h3>
                    </div>
                    <div className="card-footer-right">
                        <button>
                            Buy Now
                            <img src="./src/assets/electricityicon.jpeg" alt="icon" id='button-footer-icon'/>
                        </button>
                    </div>
                </div>
            </div>
            {/* card-2 */}
            <div className="card">
                <img src="./src/assets/solarbatteries.webp" alt="image" id='card-image' />
                <div className="card-footer">
                    <div className="card-footer-left">
                        <p>solar Battery</p>
                        <h3>$1,800</h3>
                    </div>
                    <div className="card-footer-right">
                        <button>
                            Buy Now
                            <img src="./src/assets/electricityicon.jpeg" alt="icon" id='button-footer-icon'/>
                        </button>
                    </div>
                </div>
            </div>
            {/* card-3 */}
            <div className="card">
                <img src="./src/assets/solarenergy.png" alt="image" id='card-image' />
                <div className="card-footer">
                    <div className="card-footer-left">
                        <p>solar Energy</p>
                        <h3>$2,000</h3>
                    </div>
                    <div className="card-footer-right">
                        <button>
                            Buy Now
                            <img src="./src/assets/electricityicon.jpeg" alt="icon" id='button-footer-icon'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-content-heading">
            <h1 style={{"padding-bottom":"0.5rem"}}>Benefits of Solar Panels</h1>
            <p>Solar panels offer eco-friendly energy, reduce electricity bills, inrease property
                <p>value and promote sustainable living. Perfect for solare-commerce!</p>
            </p>
        </div>
        <div className="hero-content-container">
            <div className="hero-content-left">
                <img src="./src/assets/solarimage.png" alt="solarimage" />
            </div>
            <div className="hero-content-right">
                <p>
                    <img src="./src/assets/icon1.png" alt="icon1" id='icon-image'/>
                    Reduce electricity bills</p>
                <p>
                    <img src="./src/assets/icon2.jpg" alt="icon2" id='icon-image'/>
                    Reduce carbon footprint</p>
                <p>
                    <img src="./src/assets/icon3.png" alt="icon3" id='icon-image'/>
                    Renewable Energy source</p>
                <p>
                    <img src="./src/assets/icon4.png" alt="icon4" id='icon-image' />
                    Technological advancements</p>
                <p>
                    <img src="./src/assets/icon5.webp" alt="icon5" id='icon-image' />
                    job creation and economic growth</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
