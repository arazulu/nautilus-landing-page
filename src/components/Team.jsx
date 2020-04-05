import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Team = () => {
  const teamProfile = [
    {
      name: "Joshua Nordstrom",
      github: "https://www.github.com/jdnordy",
      linkedIn: "https://www.linkedin.com/in/jdnordy/",
      src: "./assets/Joshua-Nordstrom.jpg",
    },
    {
      name: "Tyler Hurtt",
      github: "http://github.com/tylerhurtt",
      linkedIn: "https://www.linkedin.com/in/tylerhurtt",
      src: "./assets/Tyler-Hurtt.jpg",
    },
    {
      name: "Aris Razuri",
      github: "https://github.com/arazulu",
      linkedIn: "https://www.linkedin.com/in/aris-razuri",
      src: "./assets/Aris-Razuri.jpg",
    },
    {
      name: "Danny Scheiner",
      github: "https://github.com/dannyscheiner",
      linkedIn: "https://www.linkedin.com/in/dannyscheiner/",
      src: "./assets/Danny.svg",
    },
    {
      name: "Michael Dinh",
      github: "https://github.com/michaelbayday",
      linkedIn: "https://www.linkedin.com/in/michaelxdinh/",
      src: "./assets/Mike.svg",
    },
  ];
  const profiles = teamProfile.map((profile) => {
    return (
      <React.Fragment key={profile.name}>
        <div className="teamProfile">
          <div className="team-icon">
            <img
              src={profile.src}
              alt={profile.name}
              className="animated pulse delay-3s"
            ></img>
          </div>
          <div className="team-profile-title">
            <h4>{profile.name}</h4>
          </div>
          <div className="team-links">
            <a href={profile.github} target="Blank">
              <FontAwesomeIcon icon={faGithub} size="4x" color="#e0e9f1" />
            </a>
            <a href={profile.linkedIn} target="Blank">
              <FontAwesomeIcon icon={faLinkedin} size="4x" color="#e0e9f1" />
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="team-wrapper">
      <h1>Meet The Team </h1>
      <div className="team-container">{profiles}</div>
    </div>
  );
};

export default Team;