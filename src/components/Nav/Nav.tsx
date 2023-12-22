import './Nav.scss';


const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__list-item">
                    <a href="#about" className="nav__list-item__link">
                        About
                    </a>
                </li>
                <li className="nav__list-item">
                    <a href="#projects" className="nav__list-item__link">
                        Projects
                    </a>
                </li>
                <li className="nav__list-item">
                    <a href="#contact" className="nav__list-item__link">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;