import React from 'react';
import Image from "next/image";

const ExperienceSection = ({ darkMode }) => {
    const experiences = [
        {
          companyLogo: '/images/experience/theScore.jpg', 
          role: 'Software Developer',
          companyName: 'theScore',
          date: 'May 2023 - August 2023',
          description: 'theScore, a wholly-owned subsidiary of PENN Entertainment, empowers millions of sports fans through its digital media and sports betting products. Worked on the Promotions team for theScoreBet. A team responsible for creating dynamic marketing campaigns',
        },
        {
          companyLogo: '/images/experience/Guelph.jpg', 
          role: 'Teaching Assistant',
          companyName: 'University of Guelph',
          date: 'January 2023 - May 2023',
          description: 'Teaching Assistant for CIS*2170 - User Interface Design for Winter 2023. Teaching students about UI/UX, Design practices and prototyping',
        },
        {
          companyLogo: '/images/experience/theScore.jpg', 
          role: 'QA Analyst',
          companyName: 'theScore',
          date: 'May 2022 - December 2022',
          description: 'theScore, a wholly-owned subsidiary of PENN Entertainment, empowers millions of sports fans through its digital media and sports betting products. Worked on the Promotions team for theScoreBet. A team responsible for creating dynamic marketing campaigns',
        },
      ];

      return (
        <section className={`py-10 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
          <div className="container mx-auto px-4">
            <h2 className={`text-4xl md:text-5xl text-center font-semibold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Experience
            </h2>
            <div className="grid gap-8">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row p-8 rounded-lg shadow-md mb-8 ${
                    darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                  }`}
                >
                  <div className="md:w-1/3 pr-6 mb-4 md:mb-0 md:pr-12">
                    <Image
                      src={experience.companyLogo}
                      alt={`${experience.companyName} Logo`}
                      className="w-full h-auto object-contain"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className={`text-xl md:text-2xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {experience.role}
                    </h3>
                    <p className={`text-gray-600 ${darkMode ? 'text-white' : ''}`}>
                      {experience.companyName}
                    </p>
                    <p className={`text-gray-600 mt-1 ${darkMode ? 'text-white' : ''}`}>
                      {experience.date}
                    </p>
                    <p className={`mt-4 text-base ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>
                      {experience.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
      
      
};

export default ExperienceSection;

