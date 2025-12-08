import "../styles/contact.css";
import WaterImage from "../assets/three.jpg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
      style={{
        backgroundImage: `url(${WaterImage})`,
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
        <footer className=" text-xl text-center pt-18  text-gray-600"
        style={{display:"flex",flexDirection:"column",margin:"25px",fontFamily:"sans-serif",fontSize:"14px"}}>
          © 2025 Gowtham Sivakumar. All Rights Reserved.
        </footer>
      </div>
    </section>

  );
}
