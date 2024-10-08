import React from 'react';
import Button from '../ui/Button';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Greeting: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id='greeting' className='flex items-center justify-center relative'>
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        whileInView={{ x: '0%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}>
        <h2 className='text-3xl lg:text-5xl'>{t('greeting.title')}</h2>
        <h1 className='text-4xl lg:text-7xl text-orange mb-4'>{t('greeting.name')}</h1>
        <p className='mb-4'>
          {t('greeting.main.part1')} <span className='text-orange'>front-end</span>{' '}
          {t('greeting.main.part2')}
        </p>
        <p className='mb-4'>{t('greeting.contact')}</p>
        <div className='flex flex-col'>
          <div className='mb-4'>
            <a href='mailto:artiomrozzhyvin@gmail.com'>
              <Button pirmary>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                  />
                </svg>
                <span className='ml-1'>artiomrozzhyvin@gmail.com</span>
              </Button>
            </a>
          </div>
          <div>
            <ul className='flex gap-x-1 sm:gap-x-4'>
              <li>
                <a href='https://github.com/ArtemRozzhivin'>
                  <Button noBackground>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      className='w-6 h-6'
                      strokeWidth='0'
                      viewBox='0 0 16 16'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z'></path>
                    </svg>
                    <span className='ml-1'>GitHub</span>
                  </Button>
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/artem-rozzhyvin-710757259/'>
                  <Button noBackground>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      className='w-6 h-6'
                      viewBox='0 0 16 16'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z'></path>
                    </svg>
                    <span className='ml-1'>LinkedIn</span>
                  </Button>
                </a>
              </li>
              <li>
                <a href='https://drive.google.com/file/d/14F_FG34a9RStijTHu4KGtQ91jDoTdUr0/view'>
                  <Button noBackground>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      className='w-6 h-6'
                      strokeWidth='0'
                      viewBox='0 0 256 256'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M227.6,58.3L179,9.6c-2.6-2.6-6.1-4-9.8-4H45.1c-11.5,0-20.8,9.3-20.8,20.8v203.3c0,11.5,9.3,20.8,20.8,20.8h165.8   c11.5,0,20.8-9.3,20.8-20.8V68C231.7,64.3,230.3,60.9,227.6,58.3z M221.5,229.6c0,5.8-4.8,10.6-10.6,10.6H45.1   c-5.8,0-10.6-4.8-10.6-10.6V26.4c0-5.8,4.8-10.6,10.6-10.6h124.2c1,0,1.9,0.4,2.6,1.1l48.6,48.6c0.7,0.7,1.1,1.6,1.1,2.6V229.6z' />
                      <path d='M209.2,71.7h-32.9c-5.8,0-10.6-4.8-10.6-10.6V28.1c0-2.8-2.3-5.1-5.1-5.1c-2.8,0-5.1,2.3-5.1,5.1v32.9   c0,11.5,9.3,20.8,20.8,20.8h32.9c2.8,0,5.1-2.3,5.1-5.1S212,71.7,209.2,71.7z' />
                      <path d='M105,143.5L105,143.5c2.2,11.1,12,19.2,23.3,19.2c11.3,0,21.1-8.1,23.3-19.2l2.9-14.9c1-7.1-1.2-14.2-5.9-19.6   c-4.7-5.4-11.5-8.5-18.6-8.5h-3.4c-7.1,0-13.9,3.1-18.6,8.5c-4.7,5.4-6.8,12.5-5.8,19.9L105,143.5z M115.6,115.7   c2.8-3.2,6.7-5,10.9-5h3.4c4.2,0,8.2,1.8,10.9,5c2.8,3.2,4,7.4,3.5,11.2l-2.8,14.7c-1.2,6.3-6.8,10.9-13.3,10.9   c-6.5,0-12-4.6-13.3-10.9l-2.8-14.4C111.6,123,112.9,118.8,115.6,115.7z' />
                      <path d='M168.8,177.7l-22.9-8.1l-17.7,17.7l-17.7-17.7l-22.9,8.1c-3.5,1.2-6.1,4.2-6.8,7.8l-8.1,38.1h111l-8.1-38.1   C174.9,182,172.3,179,168.8,177.7z M85.3,213.4l5.5-25.8c0-0.2,0.1-0.3,0.3-0.3l16.8-6l20.4,20.4l20.4-20.4l16.8,6   c0.1,0.1,0.3,0.2,0.3,0.3l5.5,25.8H85.3z' />
                    </svg>
                    <span className='ml-1'>Resume</span>
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        whileInView={{ x: '0%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}>
        <div className='absolute h-[300px] w-[300px] top-0 right-0 -z-10 opacity-20 flex-1/3 md:static md:opacity-100 md:h-auto md:w-auto'>
          <img src='assets/block1.png' alt='Greeting' />
        </div>
      </motion.div>
    </div>
  );
};

export default Greeting;
