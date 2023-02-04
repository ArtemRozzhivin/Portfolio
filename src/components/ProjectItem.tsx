import clsx from 'clsx';
import React from 'react';
import SkillItem from './SkillItem';

interface ProjectItemType {
  className?: string;
  name: string;
  desrciption: string;
  img: string;
  stack: string[];
}

const ProjectItem: React.FC<ProjectItemType> = ({
  className,
  name,
  desrciption,
  img,
  stack,
}) => {
  return (
    <div className='p-5 bg-second rounded-lg'>
      <div
        className='flex flex-col justify-center items-center lg:flex-row'>
        <div className='mr-0 lg:mr-5'>
          <h3 className="text-xl mb-2">{name}</h3>
            <div className="block pb-[50%] relative overflow-hidden my-3 lg:hidden">
              <img
                className="absolute top-0 left-0 object-cover object-top  w-full h-full rounded-lg"
                src={img}
                alt="Sneakers Project"
              />
            </div>
          <div className="mb-3">{desrciption}</div>
          <div className='flex flex-wrap gap-1'>
						{stack.map((name) => (<SkillItem className='bg-app' title={name}/>))}
					</div>
        </div>
        <div className='hidden lg:p-0 lg:block flex-1/2 min-h-[300px] relative'>
          <img className="max-w-full rounded-lg w-full h-full object-cover absolute top-0 left-0" src={img} alt="Sneakers Project" />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
