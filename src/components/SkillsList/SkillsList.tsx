import './SkillsList.scss';
import Skills from '../../data/Skills';
import SkillCard from '../SkillCard/SkillCard';



const SkillList = () => {
    return (
        <div>
        <h1>SkillsList</h1>
            {Skills.map((skill) => {
                return (
                    <SkillCard skill={skill} />
                )
            }
            )}
        </div>
    );
}
export default SkillList;