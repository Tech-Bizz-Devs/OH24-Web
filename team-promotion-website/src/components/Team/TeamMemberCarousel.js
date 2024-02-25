import React from "react";
import "./TeamMember.css";
import teamData from "./Constant";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const TeamMemberCarousel = () => {
  return (
    <div className="carousel-container glassmorphism">
      <div className="carousel">
        {teamData.map((member, index) => (
          <div
            className={`carousel-slide`}
            key={index}
          >
            <div className="upper-section">
              <div className="photo-container">
                <img src={member?.photo} alt="Team Member" className="photo" />
              </div>
              <div className="details">
                <h2>{member.name}</h2>
                <p>{member.role}</p>
              </div>
            </div>
            <div className="rating-icons">
              <p>Rating: {member.rating}</p>
              {/* LinkedIn and GitHub icons with links */}
              <div className="social-icons">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href={member.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              </div>
            </div>
            <div className="lower-section">
              <p className="description">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberCarousel;
