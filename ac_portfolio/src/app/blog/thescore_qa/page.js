"use client";
import React from "react";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";\
import Image from "next/image";

const theScoreQa = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-900" : "bg-white"
      }`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
        <h1
          className={`text-4xl font-extrabold mb-4 text-center ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Life at theScore - QA Analyst
        </h1>
        <p
          className={`mb-2 text-center ${
            darkMode ? "text-white" : "text-black-600"
          }`}
        >
          August 2022
        </p>
        <p
          className={`mb-2 text-center ${
            darkMode ? "text-white" : "text-black-600"
          }`}
        >
          By: Andrew Chow
        </p>
        <div className="max-w-full mb-8">
          <Image
            src="/images/blog/tsb.jpg"
            alt="theScore Company Logo"
            layout="responsive"
            width={500}
            height={300}
          />
        </div>
        <div className="max-w-3xl mx-auto text-left text-gray-800 dark:text-gray-300">
          <p className="mb-4 italic">
            During my first work term, I was a QA Analyst on the Promotions
            team, working on theScore Bet. The journey was a great experience as
            I was surrounded by an amazing environment of positive and
            like-minded individuals, while having the opportunity to learn life
            long goals and skills.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-4">What is theScore?</h3>
          <p>
            Score Media and Gaming Inc. empowers millions of sports fans through
            its digital media and sports betting products. Its media app
            ‘theScore’ is one of the most popular in North America, delivering
            fans highly personalized live scores, news, stats, and betting
            information from their favorite teams, leagues, and players.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-4">
            My Responsibilities
          </h3>
          <p className="mb-4">
            As a QA Analyst, my main focus was on the delivery of high-quality
            releases that satisfied product requirements to meet user
            expectations. Some of my work included the following:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Created document test plans, test cases, and utilized validation
              techniques for application functionality.
            </li>
            <li>
              Participated in bug prioritizing, priority assessment, and
              coverage tracking of reported bugs within the defect tracking
              system.
            </li>
            <li>
              Communicated with product, design, and executive teams through
              reports to identify and solve quality issues.
            </li>
          </ul>
          <p className="mb-4">
            Similarly, other personal goals that I wanted to accomplish:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Understanding other areas of software development, including
              product, design and development teams across theScore organization
            </li>
            <li>
              Getting involved in people & culture life at theScore, including
              co-op projects and volunteer opportunities
            </li>
          </ul>
          <h3 className="text-xl font-semibold mt-8 mb-4">April 2022</h3>
          <p className="mb-4">
            In April I came across an open position for a QA Analyst at
            theScore. It was extremely busy during this time as I was
            interviewing for several other companies as well as finishing the
            last of my exams for the school year. After applying, I was reached
            out a week later where I was offered two interviews. The interview
            process was smooth as I had the opportunity to demonstrate my
            skills. Later that day, I received a call where I was offered the
            position. The onboarding process was fairly quick as was I provided
            with the necessary equipment to start the following week.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-4">May 2022</h3>
          <p className="mb-4">
            During the first couple of days at theScore, there was a lot of
            information to cover during my onboarding, including documents,
            architecture, services, and different software tools. At first, it
            was overwhelming, however, everybody was extremely helpful which
            made learning a lot easier. I mainly spent the first couple of weeks
            playing around with the TSB app, as well as understanding the
            application for the promotions service.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-4">
            July 2022 - December 2022
          </h3>

          <p className="mb-4">
            For the next couple of months, I worked on different tickets for
            various products. I found it motivating to continue testing these
            new features knowing that they are used daily. July was a very
            successful month since it was the launch of theScore's in-house tech
            stack that enhanced markets and betting capabilities.
          </p>
          <p className="mb-4">
            Near the end of July, I had the opportunity to present a co-op
            project to the Sr. Leadership team, including the CEO, Directors and
            HR at theScore. Our project was a resource that would be used to
            target new employees that were interested in applying to theScore.
            We decided to create a prototype website to illustrate theScore's
            culture; theScoreStories which talks about theScore including
            individual stories from current co-op students.
          </p>
          <p className="mb-4">
            Fast forward to August, theScore had a special volunteer event with
            partnership with the Blue Jays Foundation. Alongside 100+ theScore
            employees, we had the opportunity to host and lead many games and
            activities for athletes of all ages for the annual Challenger
            Baseball National Jamboree. December being the last month of the
            year meant for small releases in preparation for the holiday break
            and New Year. Looking back at the last several months, I had worked
            on a lot of interesting projects/products. Furthermore, I was able
            to achieve all of my learning goals. From signing off on tickets, to
            performing neccessary adhoc testing to watching these features come
            to life, it was an admirable experience.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-4">Conclusion</h3>

          <p className="mb-4">
            Working at theScore for my first co-op term was a great experience.
            I had the opportunity to learn a lot about the sports betting
            industry, including what the products and architecture were at
            theScore. Similarily, I learned a lot about quality assurance,
            performing quality testing, problem-solving, and identifying
            critical bugs within the workflow. Some of my favourite work
            included promotions feature work on the Viva/Vegas and Parlay+
            launch. Both were very large milestones that took an all-around
            amazing effort across all teams within the organization.
          </p>

          <p className="mb-4">
            Although this is the end of my first work term, I will miss my
            colleagues and my time here working at theScore. However, I am
            excited about my future work terms as I want to continue expanding
            my skills and knowledge in software development.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Acknowledgments</h3>
          <ul className="list-none pl-6 mb-4">
            <li>
              🥇 Special thanks to Charlotte and Jamie, my supervisor and
              manager at theScore who gave me feedback to achieve my learning
              goals as well as helping to answer any work related questions I
              had
            </li>
            <li>
              🥈 I would also like to thank everyone on the Promotions and QA
              team for being amazing people to work with, from Vegas launch to
              Parlay+ it was a great experience to work with everybody
            </li>
            <li>
              🥉 Lastly, I would like to thank Michelle for the smooth hiring
              process, as well as organizing projects and activities for the
              co-op students at theScore
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Highlights</h3>

          <div className="max-w-full mb-8">
            <div className="relative">
              <Image
                src="/images/blog/coop_2.jpg"
                alt="Coop Event"
                layout="responsive"
                width={500}
                height={300}
              />
              <p className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white text-center py-2">
                theScore Co-op Project Summer 2022
              </p>
            </div>
          </div>

          <div className="max-w-full mb-8">
            <div className="relative">
              <Image
                src="/images/blog/jayscare.jpg"
                alt="theScore Company Logo"
                layout="responsive"
                width={500}
                height={300}
              />
              <p className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white text-center py-2">
                National Jamboree '22 - Blue Jays Foundation
              </p>
            </div>
          </div>

          <div className="max-w-full mb-8">
            <div className="relative">
              <Image
                src="/images/blog/promotion_team.jpg"
                alt="Promotion Team"
                layout="responsive"
                width={500}
                height={300}
              />
              <p className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white text-center py-2">
                Promotions Team Event
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default theScoreQa;
