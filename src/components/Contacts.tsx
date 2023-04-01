import React, { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button';
import { useTranslation } from 'react-i18next';

const Contacts: React.FC = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef(0);

  useEffect(() => {
    return () => {
      clearTimeout(copyTimerRef.current);
    };
  }, []);

  const setToClipboard = (value: string) => {
    if (!copied) {
      navigator.clipboard.writeText(value);
      setCopied(true);
      copyTimerRef.current = window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <div id="contacts" className="flex items-center gap-10 relative mb-10">
      <div className="absolute h-[300px] w-[300px] top-[10%] left-0 -z-10 opacity-20 flex-1/3 md:static md:opacity-100 md:h-auto md:w-auto">
        <img src="assets/home.png" alt="Skills" />
      </div>
      <div className="flex-auto text-right md:text-left">
        <h2 className="text-orange text-5xl mb-4">{t('contact.title')}</h2>
        <div className="mb-4">{t('contact.main')}</div>
        <a href="mailto:artiomrozzhyvin@gmail.com" className="mb-4">
          <Button pirmary>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <span className="ml-1">artiomrozzhyvin@gmail.com</span>
          </Button>
        </a>
        <div className="mt-4 ">
          {t('contact.phone')}:
          <Button
            onClick={() => setToClipboard('+380961850861')}
            className="relative ml-3 p-1"
            border>
            +380961850861
            {copied && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="ml-1 w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                />
              </svg>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
