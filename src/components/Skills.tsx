import React from 'react';
import SkillItem from './SkillItem';

const skills = [
  { title: 'JavaScript', img: 'assets/javascript.png' },
  { title: 'TypeScript', img: 'assets/typescript.png' },
  { title: 'React', img: 'assets/react.png' },
  { title: 'Redux', img: 'assets/redux.png' },
  { title: 'Tailwind', img: 'assets/tailwind.png' },
  { title: 'HTML', img: 'assets/html.png' },
  { title: 'CSS', img: 'assets/css.png' },
  { title: 'SCSS', img: 'assets/scss.png' },
  { title: 'GIT', img: 'assets/git.png' },
];

const Skills: React.FC = () => {
  return (
    <div className="flex">
      <div>
        <img src="assets/skills.png" alt="Skills" />
      </div>
      <div>
        <h2 className="text-orange text-5xl">My Skills</h2>
        <p>These are technologies and tools that I use when developing projects</p>
        <div className="grid grid-cols-4 gap-3">
          {skills.map((obj) => (
            <SkillItem title={obj.title} img={obj.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
