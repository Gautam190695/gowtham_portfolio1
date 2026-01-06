import React from "react";
import "../styles/about.css";
import WaterImage from "../assets/seven.jpg"; 
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaDownload } from "react-icons/fa";

export default function About() {
  const handleDownload = () => {
    const fileUrl = "/resume.pdf"; // file in public folder
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "My_Resume.pdf";
    link.click();
  };

  return (
    <section
      className="resume-page"
      id="about"
      style={{
              backgroundImage: `url(${WaterImage})`,
            
            }}
    >
      {/* Left Column */}
      <div className="resume-left">
        <header className="resume-header">
          <h1>Gowtham Sivakumar</h1>
          <h2>Resume</h2>
        </header>

        <section className="resume-section">
          <div className="timeline-item">
            <h3>Summary</h3>
            <p>
              Full Stack Developer with 4.8 years of experience delivering
              scalable, responsive web applications. Proficient in Angular,
              React.js, and Flutter. Adept at building user-centric interfaces,
              integrating RESTful APIs, and leading module development in agile
              teams.
            </p>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt /> Trichy, Tamil Nadu
              </li>
              <li>
                <FaEnvelope /> gowtham.btech19@gmail.com
              </li>
              <li>
                <FaLinkedin /> linkedin.com/in/gowtham-sivakumar
              </li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h3>Education</h3>
          <div className="timeline-item">
            <span className="year">2015 – 2018</span>
            <h4>Bachelor of Computer Science and Engineering (B.E)</h4>
            <p>
              Government College of Engineering, Srirangam (Anna University)
            </p>
          </div>
        </section>

        <section className="resume-section">
          <h3>Skills</h3>
          <div className="skills-container">
            <div className="skills-column">
              <div className="timeline-item">
                <h4>Front-end</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS / SCSS</li>
                  <li>Bootstrap</li>
                  <li>Angular 12, 14, 16</li>
                  <li>TypeScript</li>
                  <li>RxJS</li>
                </ul>
              </div>
              <div className="timeline-item">
                <h4>Back-end</h4>
                <ul>
                  <li>.NET / ASP.NET</li>
                  <li>REST APIs</li>
                  <li>Web API Development</li>
                </ul>
              </div>
              <div className="timeline-item">
                <h4>Database & Cloud</h4>
                <ul>
                  <li>SQL Server</li>
                  <li>MySQL</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div className="timeline-item">
                <h4>Tools</h4>
                <ul>
                  <li>Git</li>
                  <li>Jira</li>
                  <li>Bugzilla</li>
                  <li>Postman</li>
                  <li>VS Code</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Right Column (Scrollable Card) */}
      <div className="resume-right">
        <div className="resume-card">
          <section className="resume-section">
            <h3>Professional Experience</h3>
            <div className="timeline-item">
              <span className="year">Jan 2021 – Apr 2025</span>
              <h4>Senior Software Engineer – Rubix Cloud Technologies</h4>
              <p>Trichy, Tamil Nadu</p>
              <ul>
                <li>
                  Developed B2B/B2C apps using Angular improving UX and
                  performance.
                </li>
                <li>
                  Integrated .NET Core REST APIs with Angular frontend.
                </li>
                <li>
                  Led the ezHour HRMS platform (Timesheets, Leave, Employee
                  modules).
                </li>
                <li>
                  Built Project Management System for task and workflow
                  automation.
                </li>
                <li>Implemented Role-Based Access Control (RBAC).</li>
                <li>Used Git, GitHub, and Jira for versioning and Agile tracking.</li>
              </ul>
            </div>
          </section>

            <section className="resume-section">
              <h3>Project Experience</h3>
              <div className="timeline-item">
                <span className="year">2024 – 2025</span>
                <h4>ezHour – Timesheet Management System</h4>
                <ul>
                  <li>Developed SPA with Angular + Angular Material</li>
                  <li>Lazy loading improved performance by 30%</li>
                  <li>
                    Integrated with .NET Core Web API for backend services
                  </li>
                  <li>
                    Implemented timesheets, leave management, and employee
                    management
                  </li>
                  <li>Enhanced responsive UI with real-time updates</li>
                </ul>
                <p>
                  <strong>Technologies:</strong> Angular, .NET Core, SQL Server,
                  Git, Jira
                </p>
              </div>

              <div className="timeline-item">
                <span className="year">2024</span>
                <h4>PMS – Project Management System</h4>
                <p>Task creation, assignment, and team collaboration modules.</p>
              </div>

              <div className="timeline-item">
                <span className="year">2021 – 2024</span>
                <h4>Glamz – Salon Management Platform</h4>
                <p>
                  Developed responsive UI with Angular improving B2B and B2C
                  engagement.
                </p>
                <p>
                  Developed Web API using Asp .NetCore built Backend API
                  Applications.
                </p>
              </div>
            </section>

          <div className="resume-download">
            <button className="btn-download" onClick={handleDownload}>
              <FaDownload /> Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
