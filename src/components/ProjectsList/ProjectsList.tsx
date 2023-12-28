import ProjectCard from "../ProjectCard/ProjectCard";
import Projects from "../../data/Projects";

const ProjectsList = () => {
    return (
        <div>
        <h1>ProjectsList</h1>
            <div className="projects-list__card-container">
                {Projects.map((project) => {
                    return <ProjectCard project={project} />;
                })}
            </div>
        </div>
    );
}

export default ProjectsList;