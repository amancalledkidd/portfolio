import './SkillCard.scss';
import Skill from '../../types/Skill';

type SkillCardProps = {
    skill: Skill;
}

const SkillCard = ({ skill }:SkillCardProps) => {
    return (
        <div className='skill-card'>
            <img className='skill-card__img' src={skill.image} />
        </div>
    )
}

export default SkillCard
