import React from "react";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    id: 1,
    name: "Reciplease",
    about: "A recipe tracking app",
    technologies: ["Rails", "Bootstrap CSS"],
  },
  {
    id: 2,
    name: "Kibbles N Bitz",
    about: "Tinder for dogs",
    technologies: ["React", "Redux"],
  },
  {
    id: 3,
    name: "Alienwares",
    about: "Etsy for aliens",
    technologies: ["React", "Redux", "Rails"],
  },
]

function ProjectList() {
  const projectCards = projects.map((userObj) => {
    return <ProjectItem isObject = {userObj.technologies[1,2]} key={userObj.id} name ={userObj.name} about={userObj.about} technologies={userObj.technologies}/>
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectCards}</div>
    </div>
  );
}

export default ProjectList;
