import React from 'react'
import './TestimonialSection.css'

const Testimonialsection = () => {
  return (
    <div>
      <div className="testimonial-header">
        <div className="testimonial-heading">
            <h1>Customer Testimonial</h1>
            <div>
                <button className="testimonial-button" id="testimonial-button-left" onclick="plusDivs(-1)"><img src="./src/assets/leftarrow.png" class="arrow-button"/></button>
                <button className="testimonial-button" id="testimonial-button-right" onclick="plusDivs(+1)"><img src="./src/assets/rightarrow.jpg" class="arrow-button"/></button>
            </div>
        </div>
        <div className="testimonial-card-section">
            <div className="testimonial-card">
                <div className="testimonial-card-header">
                    <div className="testimonial-card-header-left">
                        <img src="./src/assets/user1.jpeg" alt="user1" />
                        <div>
                            <h4>Alex Reid</h4>
                            <p>Businessman</p>
                        </div>
                    </div>
                    <div className="testimonial-card-header-right">
                        <button><img className='testimonial-star-img' src="./src/assets/staricon.webp" alt="star-img" />5.0</button>
                    </div>
                </div>
                <div className="testimonial-card-details">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sit quasi architecto explicabo, consequatur inventore. Repudiandae laboriosam aspernatur explicabo? Sit quasi quidem maiores est? Modi, enim nostrum similique magnam consectetur distinctio perferendis dolor suscipit quasi.
                    </p>
                </div>
            </div>
            <div className="testimonial-card">
                <div className="testimonial-card-header">
                    <div className="testimonial-card-header-left">
                        <img src="./src/assets/user2.jpg" alt="user1" />
                        <div>
                            <h4>Justin Lawson</h4>
                            <p>Businessman</p>
                        </div>
                    </div>
                    <div className="testimonial-card-header-right">
                        <button><img className='testimonial-star-img' src="./src/assets/staricon.webp" alt="star-img" />5.0</button>
                    </div>
                </div>
                <div className="testimonial-card-details">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sit quasi architecto explicabo, consequatur inventore. Repudiandae laboriosam aspernatur explicabo? Sit quasi quidem maiores est? Modi, enim nostrum similique magnam consectetur distinctio perferendis dolor suscipit quasi.
                    </p>
                </div>
            </div>
            <div className="testimonial-card">
                <div className="testimonial-card-header">
                    <div className="testimonial-card-header-left">
                        <img src="./src/assets/user3.avif" alt="user1" />
                        <div>
                            <h4>Alex Ford</h4>
                            <p>Businessman</p>
                        </div>
                    </div>
                    <div className="testimonial-card-header-right">
                        <button><img className='testimonial-star-img' src="./src/assets/staricon.webp" alt="star-img" />5.0</button>
                    </div>
                </div>
                <div className="testimonial-card-details">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sit quasi architecto explicabo, consequatur inventore. Repudiandae laboriosam aspernatur explicabo? Sit quasi quidem maiores est? Modi, enim nostrum similique magnam consectetur distinctio perferendis dolor suscipit quasi.
                    </p>
                </div>
            </div>
        </div>
        <div className="header-button">
            <button>View All</button>
        </div>
      </div>
      <div className="testimonial-content">
        <div className="testimonial-content-heading">
            <h2>Environmental Impact of Solar Energy</h2>
            <p>Discover eco-friendly solar products that reduce carbon footprints and promote sustainable living through clean, renewable energy solutions</p>
        </div>
        <div className="testimonal-content-container">
            <div className="testimonial-content-left">
                <div>
                    <h1>50%</h1>
                    <p>Reduce Carbon footprint</p>
                </div>
                <div>
                    <h1>25%</h1>
                    <p>Conserve Natural Resource</p>
                </div>
                <div>
                    <h1>30%</h1>
                    <p>Sustainable Energy source</p>
                </div>
                <div>
                    <h1>40%</h1>
                    <p>Reduce Energy Bills</p>
                </div>
            </div>
            <div className="testimonial-content-right">
                <img src="./src/assets/image1.jpg" alt="image1" className='testimonial-content-image'/>
                <img src="./src/assets/image2.jpg" alt="image2" className='testimonial-content-image'/>
                <img src="./src/assets/image3.jpg" alt="image3" className='testimonial-content-image'/>
                <img src="./src/assets/image4.jpg" alt="image4" className='testimonial-content-image'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonialsection
