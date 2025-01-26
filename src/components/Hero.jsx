import React from "react"
import "./Hero.css"
import img from "../../src/assets/img.png"
import imgsylani from "../../src/assets/imgsylani.png"
import sylani from "../../src/assets/sylani.png"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Welcome to the <span className="highlight">Saylani</span> Welfare
            </h1>
            <h2>Non Governmental Organization in Pakistan</h2>
            <p>
              The largest NGO offering free help. Saylani Welfare is on the ground and already working with local
              communities to assess how best to support underprivileged families in more than 63 areas of day to day
              lives.
            </p>
            <button className="explore-btn">Explorer More</button>
          </div>
          <div className="hero-images">
            <div className="image-circle image-1">
              <img src={img} />
            </div>
            <div className="image-circle image-2">
              <img src={imgsylani} alt="Community Service 2" />
            </div>
            <div className="image-circle image-3">
              <img src={sylani} alt="Community Service 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

