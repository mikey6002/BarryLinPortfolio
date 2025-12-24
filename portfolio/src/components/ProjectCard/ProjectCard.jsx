import React from "react";
import "./style.css";

export const ProjectCard = ({ project }) => {
  const {
    id,
    title,
    cardModifier,
    image,
    imageClassName,
    developedUsing,
    description,
    learnMore,
    liveDemo,
  } = project;

  return (
    <div className={`project-card ${cardModifier || ""}`} key={id}>
      <div className="project-media">
        {image ? (
          imageClassName ? (
            <div className="element-wrapper">
              <img className={imageClassName} src={image} alt={title} />
            </div>
          ) : (
            <div className="project-image" style={{ backgroundImage: `url(${image})` }} />
          )
        ) : (
          <div className="project-image" />
        )}
      </div>

      <div className="project-content">
        <div className="project-block">
          <div className="project-block">
            <div className="project-title">{title}</div>
          </div>
        </div>

        <div className="project-description">
          {developedUsing && (
            <div className="developed-using-wrapper">
              <p className="project-text">{developedUsing}</p>
            </div>
          )}

          <div className="project-box">
            <p className="project-text">{description}</p>
          </div>
        </div>

        {learnMore && (
          <a className={learnMore.className} href={learnMore.url} rel="noopener noreferrer" target="_blank">
            <div className="project">
              <div className="project-text-wrapper">
                <span className="text-wrapper-6">Learn More</span>
              </div>
            </div>
          </a>
        )}

        {liveDemo && (
          <a className={liveDemo.className} href={liveDemo.url} rel="noopener noreferrer" target="_blank">
            <div className="project-button-wrapper">
              <div className="project-text-wrapper">
                <span className="text-wrapper-6">Live Demo</span>
              </div>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};
