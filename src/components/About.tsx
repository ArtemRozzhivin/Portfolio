import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="flex-1/3">
        <img src="assets/contact.png" alt="Contact" />
      </div>
      <div className="text-right md:text-left">
        <h2 className="text-orange text-5xl mb-4">About me</h2>
        <div>
          <p className="mb-4">
            Hello everybody! My name is Artem, I am an ambitious front-end developer from Ukraine.
            Every day I learn something new, improve my skills in practice and theory. I strive to
            apply my experience and skills to help businesses and companies achieve their goals by
            creating user-centric digital products.
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
