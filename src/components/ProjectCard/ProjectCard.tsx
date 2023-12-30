import './Project.scss';
import Project from "../../types/Project";
import Button from "../Button/Button";


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
            </div>
            <div className="project-card__buttons">
                <Button label="Code" />
                <Button label="Preview" />
            </div>
        </div>
    );
    }

    export default ProjectCard;