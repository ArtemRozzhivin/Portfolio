import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="flex items-center relative">
      <div className="absolute h-[300px] w-[300px] xs:top-[20%] xs:-left-7 sm:top-[5%] left-0 -z-10 opacity-20 flex-1/3 md:static md:opacity-100 md:h-auto md:w-auto ">
        <img src="assets/contact.png" alt="Contact" />
      </div>
      <div className="text-right md:text-left">
        <h2 className="text-orange text-5xl mb-4">{t('about.title')}</h2>
        <div>
          <p className="mb-4">
            {t('about.main.part1')}
            <span className="text-orange"> front-end </span>
            {t('about.main.part2')}
          </p>
          <p>{t('about.main.part3')}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
