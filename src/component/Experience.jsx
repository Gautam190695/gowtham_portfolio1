import "../styles/experience.css";
import WaterImage from "../assets/five.jpg"; // adjust path if needed
import { FaAngular, FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiDotnet } from "react-icons/di";
import { FaJira } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaFlutter } from "react-icons/fa6";







export default function Expertise() {
  return (
    <section
      className="expertise"
      id="experience"
      style={{
        backgroundImage: `url(${WaterImage})`,
      fontSize: '16px',
      }}
    >
      {/* Overlay */}
      <div className="overlay"></div>

      <div className="expertise-content">
        <h2>MY EXPERIENCE</h2>

        <div className="expertise-grid">
          <div className="card">
            <div className="icon">
              <FaAngular size={40} color="#d9e8e8ff" />
            </div>
            <h3>Angular Ts</h3>
            <p>
              Building fast, scalable, and responsive web applications with Angular and modern UI libraries.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <FaReact size={40} color="#d9e8e8ff" />
            </div>
            <h3>React Js</h3>
            <p>
              Building fast, scalable, and responsive web applications with  React Js and modern UI libraries.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <DiDotnet size={40} color="#d9e8e8ff" />
            </div>
            <h3>.Net Core</h3>
            <p>
              Building fast, scalable Rest API applications with .NET and modern API libraries.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <FaFlutter size={40} color="#d9e8e8ff" />
            </div>
            <h3>Flutter</h3>
            <p>
              Building fast, scalable, and responsive Mobile applications with Flutter and modern Dart libraries.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <IoLogoGithub size={40} color="#d9e8e8ff" />
            </div>
            <h3>GitHub</h3>
            <p>
              Managing source code repositories, version control  and collaborative development to ensure smooth project workflows.            </p>
          </div>

          <div className="card">
            <div className="icon">
              <FaJira size={40} color="#d9e8e8ff" />
            </div>
            <h3>Jira </h3>
            <p>
              Tracking project progress, managing tasks  and coordinating agile workflows to deliver projects on time and within scope.
            </p>
          </div>


          {/* <div className="card">
            <div className="icon">
              <FaJira size={40} color="#d9e8e8ff" />
            </div>
            <h3>Jira </h3>
            <p>
              Tracking project progress, managing tasks  and coordinating agile workflows to deliver projects on time and within scope.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <IoLogoGithub size={40} color="#d9e8e8ff" />
            </div>
            <h3>GitHub</h3>
            <p>
              Managing source code repositories, version control  and collaborative development to ensure smooth project workflows.            </p>
          </div>
 */}

        </div>
      </div>
    </section>
  );
}
