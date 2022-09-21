import React from "react";

function ProjectItem({ name, about, technologies, isObject }) {
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <span>{technologies[0]}</span>
        <span>{technologies[1]}</span>
        {isObject ? <span>{technologies[2]}</span> : null}
      </div>
    </div>
  );
}

export default ProjectItem;
