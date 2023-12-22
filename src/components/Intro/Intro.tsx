import './Intro.scss';
import profilePic from '../../assets/images/profile-pic.jpeg';

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-container__content">
                <h1 className="intro-container__title">Hi, I'm <span className="intro__name">Kumani</span></h1>
                <h2 className="intro-container__role">Frontend Developer</h2>
                <p className="intro-container__description">I'm a Frontend Developer with 2 years of experience. I have a passion for web development and love to create for web and mobile devices.</p>
            </div>
            <div className="intro__image-container">
                <img className="intro__image-container__img" src={profilePic} alt="profile picture" />
            </div>
        </div>
    );
}

export default Intro;
