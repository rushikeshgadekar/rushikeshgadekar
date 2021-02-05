import React from "react";
import "./Section.css";

function Section() {
  return (
    <div className="section">
      <div className="abt">
        <h1 className="title">ABOUT ME</h1>
        <p>
          Seeking a position in an organization where I can display my technical
          abilities and knowledge to contribute for the growth of the
          organization simultaneously helping me to fulfill my career objectives
          and widen my knowledge.
        </p>
        <h1 className="title">Education</h1>
        <h2>MGM’s Jawaharlal Nehru Engineering College, Aurangabad</h2>
        <ul className="list">
          <li>Bachelor of Engineering in Computer Science and Engineering</li>
          <li>
            University : Dr. Babasaheb Ambedkar Technical University, A’bad
          </li>
          <li>Graduate in June 2021</li>
        </ul>
        <h2>SBES College of Science, Aurangabad</h2>
        <ul className="list">
          <li>Hsc Pass-out in March 2017</li>
          <li>Board : State Board of Maharashtra</li>
          <li>Percentage : 71.38</li>
        </ul>
        <h2>Late. Sindhu Memorial High School, Aurangabad</h2>
        <ul className="list">
          <li>SSC Pass-out in March 2015</li>
          <li>Board : State Board of Maharashtra</li>
          <li>Percentage : 91.80</li>
        </ul>

        <h1 className="title">Internships</h1>
        <h2>
          Endress-Hauser (India) Automation Instrumentation Pvt. Ltd. Aurangabad
        </h2>
        <ul className="list">
          <li>Real time project for interns.</li>
          <li>
            Detect location of object/guage by LED’s using RaspberryPi,
            Python(Tkinter)
          </li>
        </ul>
        <h2>Indian Opensource Community</h2>
        <ul className="list">
          <li>Internship on Cloud Services </li>
          <li>Introduction to AWS, GCP, Openstack, Microsoft Azure</li>
        </ul>

        <h1 className="title">
          Position of Responsibility & Extra Curriculars
        </h1>
        <ul className="list">
          <li>
            COMMUNITY AMBASSADOR | Google Crowdsource, Aurangabad April 2020 -
            Present
          </li>
          <li>VOLUNTEER | National Service Scheme Sept 2018 - Present</li>
          <li>VOLUNTEER | CodinGo 2.0 (TechFest) March 2018</li>
          <li>COORDINATOR | Razzmatazz Feb 2018</li>
          <li>MEMBER | CSI(Computer Society of India) March 2019 - Present</li>
          <li>VOLUNTEER | Training & Placement Dept. Oct 2018 - Present</li>
        </ul>

        <h1 className="title">Projects</h1>
        <h4>Easy Farming Sept 2020 - Present</h4>
        <li>
          Developing an Android application using firebase(Google) to overcome
          agricultural issues such as renting equipment, selling crops, recruit
          labour, buy seeds/fertilizers
        </li>
        <li> - Merchant can register themselves to buy crops</li>
      </div>
    </div>
  );
}

export default Section;
