import clsx from 'clsx';
import React from 'react';

interface ProjectItemType {
  className?: string;
  name: string;
  desrciption: string;
  img: string;
  stack: string;
  oneColumn?: boolean;
}

const ProjectItem: React.FC<ProjectItemType> = ({
  className,
  name,
  desrciption,
  img,
  stack,
  oneColumn,
}) => {
  return (
    <div className={clsx('p-5 bg-second rounded-lg', {}, className)}>
      <div
        className={clsx('flex', {
          'flex-col justify-center items-center': oneColumn,
        })}>
        <div className={clsx('mr-5', { 'mr-0': oneColumn })}>
          <h3 className="text-xl mb-2">{name}</h3>
          {oneColumn && (
            <div className="pb-[70%] relative overflow-hidden my-3">
              <img
                className="absolute top-0 left-0 object-cover object-top  w-full h-full rounded-lg"
                src={img}
                alt="Sneakers Project"
              />
            </div>
          )}
          <div className="mb-3">{desrciption}</div>
          <div>{stack}</div>
        </div>
        <div className={clsx('block', { 'hidden p-0': oneColumn })}>
          <img className="max-w-full rounded-lg" src={img} alt="Sneakers Project" />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
