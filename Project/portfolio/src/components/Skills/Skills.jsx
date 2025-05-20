import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = [
    { icon: <FaReact />, name: 'React', level: '90%' },
    { icon: <FaNodeJs />, name: 'Node.js', level: '85%' },
    { icon: <FaPython />, name: 'Python', level: '80%' },
    { icon: <FaDatabase />, name: 'MongoDB', level: '75%' },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="skill-progress">
                <div 
                  className="progress-bar" 
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;