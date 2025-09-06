"use client";
import React, { useState, useEffect } from "react";

const phrases = [
  "Redefine Your Interview Game! Step into confidence with cutting-edge AI mock interviews.",
  "Master Every Question! Your success story starts here with AI-backed preparation.",
  "Ace Your Next Interview! Smart tools, tailored preparation, real results.",
  "Your Future, Perfectly Prepared! AI-powered mock interviews for unstoppable confidence.",
  "The Smarter Way to Succeed! Prepare. Practice. Perfect. All with AI on your side."
];

const RotatingText = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const splitPhrase = phrases[currentPhraseIndex].split("!");

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center">
      <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-800 to-blue-400 text-transparent bg-clip-text">
        {splitPhrase[0]}!
      </div>
      <div className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-600 to-gray-900 text-transparent bg-clip-text">
        {splitPhrase[1]}
      </div>
      <button className="mt-12 px-7 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold hover:bg-blue-700 transition">
        Get Started
      </button>
      <p className="mt-6 text-lg text-black px-4 max-w-2xl">
        Discover how the dashboard helps you organize and excel in your interviews.
      </p>
    </div>
  );
};

export default RotatingText;