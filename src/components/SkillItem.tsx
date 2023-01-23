import React from 'react';

type SkillItemType = {
  title: string;
  img: string;
};

const SkillItem: React.FC<SkillItemType> = ({ title, img }) => {
  return (
    <div className="inline-flex items-center bg-gray-600 py-3 rounded-xl text-white px-5">
      <img src={img} alt={title} />
      <p className="pl-3">{title}</p>
    </div>
  );
};

export default SkillItem;
