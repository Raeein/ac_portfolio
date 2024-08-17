"use client";
import React, { useState } from "react";
import Head from "next/head";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { FaCamera, FaSearch } from "react-icons/fa";
import { photos } from "../data/photos";

export default function PhotographyHome() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const photosPerPage = 6;
  const totalPages = Math.ceil(photos.length / photosPerPage);

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`mx-1 px-3 py-1 rounded ${
            darkMode
              ? i === currentPage
                ? "bg-gray-700 text-white"
                : "bg-gray-800 text-gray-400"
              : i === currentPage
              ? "bg-gray-200 text-black"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Andrew Chow's Photography</title>
        <meta name="description" content="My place where I capture moments!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParticlesBackground darkMode={darkMode} />
      <main className="bg-white dark:bg-gray-900">
        <section className="min-h-screen">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <section className="font-firacode container mx-auto p-4">
            <h2 className="text-center text-black text-3xl font-semibold mb-4 p-4 dark:text-white">
              My Gear
            </h2>
            <div className="text-black dark:text-white flex flex-col items-center text-xl">
              <div className="flex items-center">
                <span className="mr-2">
                  <FaCamera />
                </span>
                <p>Sony a6100</p>
              </div>
              <div className="flex items-center">
                <span className="mr-2">
                  <FaSearch />
                </span>
                <p>Sony 16-50mm f/3.5-5.6</p>
              </div>
            </div>
          </section>

          <section className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentPhotos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              {renderPageNumbers()}
            </div>
          </section>
        </section>
        <Footer darkMode={darkMode} />
        <BackToTopButton />
      </main>
    </div>
  );
}
