import clsx from 'clsx';
import React from 'react';

interface SkillItemType {
	className?: string
  title: string;
  img?: string;
}

const SkillItem: React.FC<SkillItemType> = ({ title, img, className }) => {
  return (
    <div className={clsx("inline-flex items-center bg-second py-3 rounded-xl text-white px-5", {}, className)}>
      {img && <img className='pr-3' src={img} alt={title} />}
      <p>{title}</p>
    </div>
  );
};

export default SkillItem;
