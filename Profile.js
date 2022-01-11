import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.facebook.com/profile.php?id=100076785353342">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/aines_journey/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC6X9AkAhonLsQB2N7I3yxcw">
              <i className="fa fa-youtube"></i>
            </a>
            <a href="https://twitter.com/ainecodes">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/aine-mcgivern-676a47172/">
              <i className="fa fa-linkedin"></i>
            </a>

            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello, I'm <span className="highlighted-text">Aine</span>
              </span>
            </div>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "First Class Honours",
                    1000,
                    "Computer Science Graduate",
                    1000,
                    "Ethusicastic Learner",
                    1000,
                    "Problem Solver",
                    1000,
                    "Team Worker!",
                    1000,
                  ]}
                />
              </h1>
              <span className='profile-role-tagline'>
                  Currently in search for a Graduate Job. 
              </span>
            </span>
          </div>
          <div className="profile-optins">
              <button className="btn primary-btn">
                  {""}
                  Contact Me{" "}
              </button>
              <a href="AineCV.pdf" download='Aine AineCV.pdf'>
                  <button className="btn highlighted-btn">Get my CV</button>
              </a>

          </div>
        </div>
      </div>
    </div>
  );
}
