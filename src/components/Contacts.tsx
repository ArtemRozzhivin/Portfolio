import React from 'react';
import Button from '../ui/Button';

const Contacts: React.FC = () => {
  return (
    <div className="flex items-center gap-10 relative mb-10">
      <div className="absolute h-[300px] w-[300px] top-[10%] left-0 -z-10 opacity-20 flex-1/3 md:static md:opacity-100 md:h-auto md:w-auto">
        <img src="assets/home.png" alt="Skills" />
      </div>
      <div className='flex-auto text-right md:text-left'>
        <h2 className="text-orange text-5xl mb-4">Contact me</h2>
        <div className="mb-4">
          Feel free to reach me for any collaboration or work opportunities, I’m looking to
          collaborate on any exciting projects! So, you can reach me by writing an email
          artiomrozzhyvin@gmail.com
        </div>
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
        <div className='mt-4'>
          Or you can contact me by phone number: <span className="text-orange">+380961850861</span>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
