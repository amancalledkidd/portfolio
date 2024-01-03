import './AboutMe.scss';
import Me from '../../data/Me';

const AboutMe = () => {
    
    return (
        <div id="about" className="about-me">
            <h2>My Journey</h2>
            <div className="about-me__container">
                <div className="about-me__container__img">
                    <img src={Me.image} alt="Me" />
                </div>
                <div className="about-me__container__content">
                    <p>{Me.description}</p>
                </div>
            </div>
        </div>
    );
    }

    export default AboutMe;