import './AboutMe.scss';
import profilePic from '../../assets/images/profile-pic.jpeg';

const AboutMe = () => {
    
    return (
        <div id="about" className="about-me">
            <h2>About Me</h2>
            <div className="about-me__container">
                <div className="about-me__container__img">
                    <img src={profilePic} alt="Me" />
                </div>
                <div className="about-me__container__content">
                    <p>May nfsfoojeoge ekfp ewkg ekfg</p>
                </div>
            </div>
        </div>
    );
    }

    export default AboutMe;