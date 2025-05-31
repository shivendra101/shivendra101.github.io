import React from 'react';
import './SkillsDisplay.scss';
import { useTheme } from '../../contexts/ThemeContext';

export interface Skill {
  name: string;
  category: string;
  level: number; // 1-10
}

interface SkillsDisplayProps {
  skills?: Skill[];
}

const defaultSkills: Skill[] = [
  // Frontend
  { name: 'React', category: 'Frontend', level: 9 },
  { name: 'TypeScript', category: 'Frontend', level: 8 },
  { name: 'JavaScript', category: 'Frontend', level: 9 },
  { name: 'HTML/CSS', category: 'Frontend', level: 9 },
  { name: 'SCSS/SASS', category: 'Frontend', level: 8 },
  { name: 'Redux', category: 'Frontend', level: 7 },
  { name: 'Next.js', category: 'Frontend', level: 8 },
  
  // Backend
  { name: 'Node.js', category: 'Backend', level: 8 },
  { name: 'Express', category: 'Backend', level: 8 },
  { name: 'RESTful APIs', category: 'Backend', level: 9 },
  { name: 'GraphQL', category: 'Backend', level: 7 },
  { name: 'MongoDB', category: 'Backend', level: 7 },
  { name: 'SQL', category: 'Backend', level: 7 },
  
  // Tools & Others
  { name: 'Git', category: 'Tools', level: 8 },
  { name: 'Docker', category: 'Tools', level: 7 },
  { name: 'AWS', category: 'Tools', level: 6 },
  { name: 'Jest', category: 'Testing', level: 7 },
  { name: 'CI/CD', category: 'DevOps', level: 7 },
];

const SkillsDisplay: React.FC<SkillsDisplayProps> = ({ skills = defaultSkills }) => {
  const { theme } = useTheme();
  
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
  
  // Sort categories alphabetically
  const categories = Object.keys(skillsByCategory).sort();
  
  return (
    <div className="skills-display">
      <div className="skills-header">
        <div className="header-line"></div>
        <h2>TECHNICAL PROFILE</h2>
        <div className="header-line"></div>
      </div>
      
      <div className="skills-grid">
        {categories.map((category) => (
          <div key={category} className="skill-category">
            <div className="category-header">
              <h3>{category}</h3>
              <div className="category-line"></div>
            </div>
            
            <div className="skills-list">
              {skillsByCategory[category].map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar-container">
                    <div 
                      className="skill-bar" 
                      style={{ width: `${skill.level * 10}%` }}
                    >
                      <div className="skill-level-marker">{skill.level}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="skills-footer">
        <div className="footer-line"></div>
        <div className="skills-note">SKILL LEVELS RATED 1-10</div>
        <div className="footer-line"></div>
      </div>
    </div>
  );
};

export default SkillsDisplay;