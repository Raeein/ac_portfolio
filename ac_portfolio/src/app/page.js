"use client";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import ProfilePicture from "../../public/profile_pic.png";
import ContactSection from "../app/components/ContactSection";
import Header from "../app/components/Header";
import SkillSection from '../app/components/SkillSection';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Andrew Chow
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I'm Andrew, a Software Engineering student at the University of
              Guelph who loves to solve problems! I have a passion for building
              new products and applications through the world of technology.
            </p>

            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              From design and development to product management, my interest
              lies within the realm of understanding customers, identifying gaps
              and providing innovative solutions to solve user problems.
            </p>
            <div className="text-5xl flex justify-center gap-8 py-3 text-gray-600 dark:text-gray-400">
              <AiFillLinkedin />
              <AiFillFacebook />
              <AiFillGithub />
              <AiFillInstagram />
            </div>
            <div className="mx-auto  rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={ProfilePicture} objectFit="cover" />
            </div>
          </div>
        </section>
        <SkillSection />
        <ContactSection />
      </main>
    </div>
  );
}
