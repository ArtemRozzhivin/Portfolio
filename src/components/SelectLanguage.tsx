import React, { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

export type MouseEventClick = MouseEvent & {
  path: Node[];
};

const languages = [
  {
    value: 'en',
    name: 'English',
    flag: 'https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.2/Assets/SVG/GB.svg',
  },
  {
    value: 'uk',
    name: 'Українська',
    flag: 'https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.2/Assets/SVG/UA.svg',
  },
];

const SortPopup: React.FC = () => {
  const sortRef = useRef<HTMLDivElement>(null);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const { t, i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(languages[0]);

  const changeLanguage = (obj: { value: string; name: string; flag: string }) => {
    i18n.changeLanguage(obj.value);
    setActiveLanguage(obj);
    setVisiblePopup(false);
  };

  const changeVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setVisiblePopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sortRef]);

  return (
    <div ref={sortRef} className='cursor-pointer w-full relative'>
      <div
        onClick={changeVisiblePopup}
        className='w-auto py-2 px-4 bg-app hover:bg-orange rounded-md transition-all'>
        <div className='w-auto flex items-center gap-2'>
          <img src={activeLanguage.flag} alt={activeLanguage.value} />
          <div>{activeLanguage.name}</div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='white'
            aria-hidden='true'
            className={clsx('h-8 w-8 transition-all', visiblePopup ? 'rotate-180' : 'rotate-0')}>
            <path
              fill-rule='evenodd'
              d='M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z'
              clip-rule='evenodd'></path>
          </svg>
        </div>
      </div>

      {visiblePopup && (
        <div className='absolute bg-second top-14 left-0 z-10 rounded-b-lg shadow-xl'>
          <ul className='border rounded-lg py-2 text-left transition-all'>
            {languages.map((obj) => (
              <li
                onClick={() => changeLanguage(obj)}
                className='px-2 py-3 flex items-center gap-2 hover:bg-orange transition-all cursor-pointer'
                key={obj.name}>
                <img src={obj.flag} alt={obj.value} />
                <div>{obj.name}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortPopup;
