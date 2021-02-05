import React from "react";
import img from "../images/profile.jpg";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="img-container">
          <img src={img} alt="profile" />
        </div>
        <div className="flex">
          <div className="info">
            <h2 className="title">Contact</h2>
            <h3>Phone</h3>
            <p>9579348055</p>
            <h3>Email</h3>
            <p>
              <a href="rushikeshgadekar17399@gmail.com">
                rushikeshgadekar17399@gmail.com
              </a>
            </p>
            <h3>Home</h3>
            <p>
              Plot no-63,SN-152/1, Sai Colony, Jadhavwadi, Aurangabad-431003
            </p>
          </div>
          <div>
            <h2 className="title">Skills</h2>
            <div className="skills">
              <div className="l">
                <p>Html</p>
                <p>Css</p>
                <p>Javascript</p>
                <p>React.js</p>
              </div>
              <div className="r">
                <p>Python</p>
                <p>Android</p>
                <p>Linux</p>
                <p>Database</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="title">Languages</h2>
            <div className="lang">
              <p>Marathi</p>
              <p>Hindi</p>
              <p>English</p>
            </div>
          </div>

          <div className="certificates">
            <h2 className="title">Certificates</h2>
            <ul>
              <li>RHCSA (EX200)</li>
              <li>AWS Fundamentals (Coursera)</li>
              <li>
                Workshop on Ansible and Jenkins (Indian Opensource Community)
              </li>
              <li>
                Introduction to OpenShift Applications (Red Hat Training &
                Certification)
              </li>
              <li>Step into Robotic Process Automation (GUVI)</li>
              <li>Introduction to AI in Data Centre (NVIDIA)</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
