import Project from "../types/Project";
import flavourfinder from "../assets/images/flavourFinder.png";
import shootingarray from "../assets/images/ShootingArray.png";
import punkbeer from '../assets/images/PunkBeer.png'
import tickettracker from '../assets/images/TicketTracker.png'

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
        name: "Punk Beer Catalogue",
        description: "A Web Application for browsing Punk's beer catalogue.",
        image: punkbeer,
        github_url: "https://github.com/amancalledkidd/punk-beer-catalogue",
        live_url: "https://amancalledkidd.github.io/punk-beer-catalogue/",
    },
    {
        id: 4,
        name: "Ticket Tracker",
        description: "This is a web application for tracking job tickets.",
        image: tickettracker,
        github_url: "https://github.com/amancalledkidd/ticket-tracker",
        live_url: "https://amancalledkidd.github.io/ticket-tracker/",
    },
];

export default Projects;