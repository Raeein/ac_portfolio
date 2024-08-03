"use client";
import Head from "next/head";
import { useState } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Andrew Chow</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="./favicons/favicon.ico" />
      </Head>
      <main className=" bg-white dark:bg-gray-900">
        <section className="min-h-screen">
          <ParticlesBackground darkMode={darkMode} />
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <HeroSection darkMode={darkMode} />
        </section>
        <Footer darkMode={darkMode} />
        <BackToTopButton />
      </main>
    </div>
  );
}
