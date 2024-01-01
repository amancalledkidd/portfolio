import './Project.scss';
import Project from "../../types/Project";
import Button from "../Button/Button";


type ProjectCardProps = {
    project: Project;
    }



const ProjectCard = ({ project }: ProjectCardProps) => {

    const handleLiveClick = () => {
        window.open(project.live_url);
    }

    const handleCodeClick = () => {
        window.open(project.github_url);
    }


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
                <div onClick={handleCodeClick}>
                    <Button label="Code" />
                </div>
                <div onClick={handleLiveClick}>
                    <Button label="Preview" />
                </div>
                
            </div>
        </div>
    );
    }

    export default ProjectCard;