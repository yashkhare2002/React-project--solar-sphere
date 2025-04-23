import React from 'react'
import './BlogSection.css'

const BlogSection = () => {
  return (
    <div>
      <div className="blog-section-heading">
        <h2>Latest Blog</h2>
        <button>View All</button>
      </div>
      <div className="blog-content">
        <div className="blog-cards">
            <div className="blog-card">
                <img src="./src/assets/blogimg1.jpg" alt="blogimg1" />
                <div className="card-content">
                    <p>Solar Panelss vs. Solar Shingles:Which Is Right For Your Home?</p>
                    <button>Read More <img src="./src/assets/electricityicon.jpeg" alt="icon" /></button>
                </div>
            </div>
            <div className="blog-card">
                <img src="./src/assets/blogimg2.jpeg" alt="blogimg2" />
                <div className="card-content">
                    <p>Harnessing The Tower Of The Sun: A Beginner's Guide To Solar Energy</p>
                    <button>Read More <img src="./src/assets/electricityicon.jpeg" alt="icon" /></button>
                </div>
            </div>
            <div className="blog-card">
                <img src="./src/assets/blogimg3.webp" alt="blogimg3" />
                <div className="card-content">
                    <p>The Environment Benefits Of Solar Energy: A Closer Look</p>
                    <button>Read More <img src="./src/assets/electricityicon.jpeg" alt="icon" /></button>
                </div>
            </div>
        </div>
      </div>
      <div className="blog-info-containers">
            <h1>FAQ's</h1>
            <div className="blog-box-container">
            <div className="blog-box">How do solar panels work?<button>+</button></div>
            <div className="blog-box">Do you offer international shipping?<button>+</button></div>
            <div className="blog-box">Do you provide installation services?<button>+</button></div>
            <div className="blog-box">How do I maintain my solar panels?<button>+</button></div>
            <div className="blog-box">What is the difference between monocrystalline and polycrystalline panels?<button>+</button></div>
        </div>
      </div>
      <div className="blog-image-container">
        <div className="blog-image">
          <h1>Have a question for us? Let us Know!</h1>
          <button>Get in Touch <img src="./src/assets/electricityicon.jpeg" alt="electricityicon" /></button>
        </div>
      </div>
    </div>
  )
}

export default BlogSection
