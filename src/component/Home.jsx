import { useEffect, useState } from "react";
import "../styles/Home.css";
import WaterImage from "../assets/one.jpg"; 


export default function PortfolioHero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: true,
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToExp = () => {
    const section = document.getElementById("experience");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }
    const scrollToAbout = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }
    const scrollToHome = () => {
    const section = document.getElementById("home");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }
  const scrolltoResume = () => {
    const section = document.getElementById("about");
    if(section){
      section.scrollIntoView({behavior:"smooth"})
    }
  }


return (
  <section id="home">
  <div
    style={{
      position: "relative",
      textAlign: "center",
      marginTop: "20px",
      height: "100vh", // or any fixed height like 600px
      backgroundImage: `url(${WaterImage})`,
      backgroundSize: "cover",        // make image cover the div
      backgroundPosition: "center",   // center the image
      backgroundRepeat: "no-repeat",  // no tiling
    }}
  >
    {/* Dark overlay (optional for readability) */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)", // optional overlay
      }}
    />

    <div className="hero-container" style={{ position: "relative", zIndex: 1 }}>
      {/* Top Section */}
 <div className="hero-top">
  <div className="local-time">
    <span className="label">LOCAL</span> / {time}
  </div>

  {/* <div className="menu-icon">&#8942;&#8942;</div> */}

  {/* Right-aligned buttons */}
  <div className="hero-actions">
      <button className="about-btn" onClick={scrollToHome}>
      HOME
    </button>
     {/* <button className="about-btn" onClick={scrollToAbout}>
      ABOUT
    </button> */}
    <button className="exp-btn" onClick={scrollToExp}>
      EXPERIENCE
    </button>
     <button className="resume-btn" onClick={scrolltoResume}>
      RESUME
    </button>
    <button className="contact-btn" onClick={scrollToContact}>
      CONTACT
    </button>
  </div>
</div>


      {/* Main Content */}
      <div className="hero-main">
        <div className="status">
          <span className="status-dot"></span>
          AVAILABLE FOR FREELANCE
        </div>
        <h1 className="name">
          GOWTHAM
          <br />
          SIVAKUMAR
        </h1>
        <div className="footer-info">
          <span>BASED IN TRICHY, TAMILNADU</span>
          <span>FULL STACK DEVELOPER</span>
        </div>
      </div>
    </div>
  </div>
  <button
  className="scroll-top-btn"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  ↑
</button>
  </section>
);

}

