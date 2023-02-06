import React from 'react';

const About: React.FC = () => {
  return (
    <div id="about" className="flex items-center relative">
      <div className="absolute h-[300px] w-[300px] xs:top-[20%] xs:-left-7 sm:top-[5%] left-0 -z-10 opacity-20 flex-1/3 md:static md:opacity-100 md:h-auto md:w-auto ">
        <img src="assets/contact.png" alt="Contact" />
      </div>
      <div className="text-right md:text-left">
        <h2 className="text-orange text-5xl mb-4">About me</h2>
        <div>
          <p className="mb-4">
            Hello everybody! My name is Artem, I am an ambitious
            <span className="text-orange"> front-end</span> developer from Ukraine. Every day I
            learn something new, improve my skills in practice and theory. I strive to apply my
            experience and skills to help businesses and companies achieve their goals by creating
            user-centric digital products.
          </p>
          <p>
            In my free time from the code, I spend it with my family, friends, watching series or
            shows about travel. I also like to read some non-fiction books, especially on the topic
            of psychology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
