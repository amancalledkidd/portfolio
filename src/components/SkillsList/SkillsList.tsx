import './SkillsList.scss';
import Skills from '../../data/Skills';
import SkillCard from '../SkillCard/SkillCard';



const SkillList = () => {
    return (
        <div className='skill-list'>
            <h2 className='skill-list__header'>SkillsList</h2>
            <p className='skill-list__description'>Here are some of the technologies I've worked with:</p>
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