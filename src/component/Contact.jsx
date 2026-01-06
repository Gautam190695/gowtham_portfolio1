import "../styles/contact.css";
import WaterImage from "../assets/seven.jpg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
      style={{
        backgroundImage: `url(${WaterImage})`,
        backgroundSize: "cover",
      }}
    >
      {/* Overlay for readability */}
      <div className="overlay" />

      <div className="contact-content">
        <h2 className="expertise-title">Contact US</h2>

        <div className="contact-container">
          {/* Left Side - Form */}
          <div className="contact-left">
            <h2>SAY HELLO!</h2>
            <p>
              My creative spirit comes alive in the digital realm. With nimble
              fingers flying across the keyboard.
            </p>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="E-Mail" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">SEND EMAIL</button>
            </form>
          </div>
        </div>

        {/* Footer section */}
        <footer
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 35px",
    fontFamily: "sans-serif",
    fontSize: "14px",
     gap: "15px"
  }}
>
  {/* Left Text */}
  <span>© 2025 Gowtham Sivakumar. All Rights Reserved.</span>

  {/* Right Icons */}
  <div
    style={{
      display: "flex",
      gap: "15px",
      fontSize: "18px",
      color: "#555",
    }}
  >
    <a href="https://facebook.com" target="_blank" rel="noreferrer">
      <i style={{color: "#fff"}} className="fa-brands fa-facebook-f"></i>
    </a>

    <a href="https://instagram.com" target="_blank" rel="noreferrer">
      <i style={{color: "#fff"}} className="fa-brands fa-instagram"></i>
    </a>

    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
      <i style={{color: "#fff"}} className="fa-brands fa-linkedin-in"></i>
    </a>

    <a href="https://github.com" target="_blank" rel="noreferrer">
      <i style={{color: "#fff"}} className="fa-brands fa-github"></i>
    </a>
  </div>
</footer>

      </div>
    </section>

  );
}
