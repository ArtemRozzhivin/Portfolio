import clsx from 'clsx';
import React from 'react';
import Button from '../ui/Button';
import SkillItem from './SkillItem';

interface ProjectItemType {
  className?: string;
  name: string;
  desrciption: string;
  img: string;
  stack: string[];
  links: { github: string; preview: string };
  view: number;
}

const ProjectItem: React.FC<ProjectItemType> = ({
  className,
  name,
  desrciption,
  img,
  stack,
  links,
  view,
}) => {
  return (
    <div className="p-5 bg-second rounded-lg group">
      <div className="flex gap-5 flex-col justify-center items-center lg:flex-row">
        <div className={'order-' + view}>
          <div className="flex items-center justify-between">
            <h3 className="text-xl mb-2">{name}</h3>
            <div className="flex items-center gap-5">
              <a href={links.preview}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 17 17"
                  height="24px"
                  width="24px">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
              <a href={links.github}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 25 25"
                  stroke-width="1.5"
                  stroke="currentColor"
                  height="24px"
                  width="24px">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="block pb-[50%] relative overflow-hidden my-3 lg:hidden">
            <img
              className="absolute top-0 left-0 object-cover object-top  w-full h-full rounded-lg"
              src={img}
              alt="Sneakers Project"
            />
          </div>
          <div className="mb-3">{desrciption}</div>
          <div className="flex flex-wrap gap-1">
            {stack.map((name) => (
              <SkillItem className="bg-app" title={name} />
            ))}
          </div>
        </div>
        <div className="hidden lg:p-0 lg:block flex-1/2 min-h-[300px] overflow-hidden relative">
          <img
            className="max-w-full rounded-lg w-full h-full object-cover absolute top-0 left-0 group-hover:scale-125"
            src={img}
            alt="Sneakers Project"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
