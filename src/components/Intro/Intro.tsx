import './Intro.scss';
import introPic from '../../assets/images/introPic.png';

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-container__content">
                <h3 className="intro-container__title">Hi, I'm <span className="intro__name">Kumani</span></h3>
                <h2 className="intro-container__role">A Fullstack Developer based in the UK</h2>
            </div>
            <div className="intro__image-container">
                <img className="intro__image-container__img" src={introPic} alt="profile picture" />
            </div>
        </div>
    );
}

export default Intro;
