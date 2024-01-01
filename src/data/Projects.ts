import Project from "../types/Project";
import flavourfinder from "../assets/images/flavourFinder.png";
import shootingarray from "../assets/images/ShootingArray.png";

const Projects: Project[] = [
    {
        id: 1,
        name: "FlavourFinder",
        description: "A recipe generator using the power of AI.",
        image: flavourfinder,
        github_url: "https://github.com/amancalledkidd/FlavourFinders",
        live_url: "https://flavour-finder.onrender.com/",
    },
    {
        id: 2,
        name: "Shooting Array",
        description: "A game based on the classic fairground game, Shooting Gallery.",
        image: shootingarray,
        github_url: "https://github.com/amancalledkidd/fairground-shooting-gallery",
        live_url: "https://amancalledkidd.github.io/fairground-shooting-gallery/",
    },
    {
        id: 3,
        name: "Project 3",
        description: "This is the third project.",
        image: "https://via.placeholder.com/150",
        github_url: "https://github.com",
        live_url: "https://github.com",
    },
    {
        id: 4,
        name: "Project 4",
        description: "This is the fourth project.",
        image: "https://via.placeholder.com/150",
        github_url: "https://github.com",
        live_url: "https://github.com",
    },
];

export default Projects;