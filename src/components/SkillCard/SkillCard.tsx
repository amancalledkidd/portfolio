import './SkillCard.scss';
import gitSkill from '../../assets/images/icons/git-skill-icon.png';

type SkillCardProps = {
    skill: string;
    image: string;
}

const SkillCard = () => {
    return (
        <div className='skill-card'>
            <img className='skill-card__img' src={gitSkill} />
        </div>
    )
}

export default SkillCard
