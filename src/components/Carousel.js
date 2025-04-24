import React from "react";
import { useTheme } from "./ThemeContext";
import slides from "../assets/data/gifs.json";

const Carousel = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`overflow-hidden w-full py-8 transition-colors duration-500 ${
        isDarkMode ? "bg-[#1e1e1e]" : "bg-zinc-100"
      }`}
    >
      <h2 className="text-2xl font-semibold text-center mb-4">
        Some of my marketing campaigns
      </h2>

      <div className="flex animate-marquee space-x-6">
        {[...slides, ...slides].map((slide, i) => (
          <img
            key={i}
            src={slide.url}
            alt={slide.title}
            className="w-48 h-32 object-cover rounded-xl shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
