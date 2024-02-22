import uniqid from "uniqid";
import ProjectCard from "./ProjectCard";
import Spacer from "../components/Spacer";
import { projects } from "@/data/profiles";
import Navbar from "../components/Navbar";
import "@/styles/Navbar.css";
import "@/styles/Projects.css";
import "@/styles/index.css";
import "@/styles/App.css";


const Projects = () => {
  if (!projects.length) return null;

  return (
    
    <div id="top" className="app">
      <Navbar />
      {Spacer(1)}
      <h2 className="section__title">Projects</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard {...project}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;
