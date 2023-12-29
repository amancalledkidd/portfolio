import Project from "../../types/Project";


type ProjectCardProps = {
    project: Project;
    }



const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div id="projects" className="project-card">
        <div className="project-card__image">
            <img src={project.image} alt={project.name} />
        </div>
        <div className="project-card__content">
            <h3 className="project-card__title">{project.name}</h3>
            <p className="project-card__description">{project.description}</p>
            <a
            className="project-card__link"
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
            >
            View Project
            </a>
        </div>
        </div>
    );
    }

    export default ProjectCard;