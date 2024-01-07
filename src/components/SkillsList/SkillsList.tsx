import './SkillsList.scss';
import Skills from '../../data/Skills';
import SkillCard from '../SkillCard/SkillCard';



const SkillList = () => {
    return (
        <div className='skill-list'>
            <h4 className='skill-list__header'>Tech Stack</h4>
            <div className='skill-list__card-container'>
                {Skills.map((skill) => {
                    return (
                        <SkillCard key={skill.id} skill={skill} />
                    )
                }
            )}
            </div>
        </div>
    );
}
export default SkillList;