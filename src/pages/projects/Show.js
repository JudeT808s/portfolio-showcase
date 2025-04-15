import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import projectsJSON from '../../assets/data/projects.json';
import { useTheme } from '../../components/ThemeContext';

const Show = () => {
  const [project, setProject] = useState(null);
  const { slug } = useParams();
  const { isDarkMode } = useTheme();
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setProject(projectsJSON.find((p) => p.slug === slug));
  }, [slug]);

  if (!project) {
    return <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-300">Project does not exist</h1>
    </div>;
  }

  const nextSlide = () => {
    if (project.images && project.images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }
  };

  const prevSlide = () => {
    if (project.images && project.images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const imageCarousel = (
    <div className="carousel w-full rounded-lg shadow-md mb-6">
      {project.images.map((image, i) => (
        <div
          key={`items${i}`}
          id={`item${slug}-${i}`}
          className={`carousel-item w-full relative ${i === currentIndex ? 'block' : 'hidden'}`}
        >
          <img
            title={image.caption}
            src={image.path}
            alt={image.caption}
            className="w-full object-scale-down max-h-[500px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button onClick={prevSlide} className={`btn btn-circle ${isDarkMode ? 'btn-dark' : ''}`}>❮</button>
            <button onClick={nextSlide} className={`btn btn-circle ${isDarkMode ? 'btn-dark' : ''}`}>❯</button>
          </div>
        </div>
      ))}
      <div className="flex justify-center w-full py-2 gap-2 mt-2">
        {project.images.map((_, i) => (
          <button
            key={`indicator${i}`}
            className={`btn btn-xs btn-circle ${isDarkMode ? 'btn-dark' : ''} ${i === currentIndex ? 'btn-active' : ''}`}
            onClick={() => goToSlide(i)}
          ></button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-6 md:p-10 lg:p-12">
      {project.images && project.images.length > 0 ? imageCarousel : (
        <div className="rounded-lg shadow-md mb-6 p-6 text-center">
          <p className={`text-lg italic ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            No images available for this project.
          </p>
        </div>
      )}

      <div className="mb-8">
        <h1 className={`text-3xl md:text-4xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>{project.title}</h1>
        <p className={`${isDarkMode ? "text-white" : "text-black"} leading-relaxed mb-5`}>{project.description}</p>
        <p className={`text-gray-600 ${isDarkMode ? "dark:text-gray-400" : ""} mb-2`}>
          <span className="font-semibold">Date:</span> {project.date}
        </p>
        <div className="mb-4">
          <span className={`font-semibold text-gray-600 ${isDarkMode ? "dark:text-gray-400" : ""} mr-2`}>Tags:</span>
          {project.tags.map((tag, i) => (
            <div key={i} className={`badge badge-neutral`}>
              {tag}
            </div>
          ))}
        </div>
        {project.website && (
          <p className="mb-2">
            <span className={`font-semibold text-gray-600 ${isDarkMode ? "dark:text-gray-400" : ""} mr-2`}>Website:</span>
            <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {project.website}
            </a>
          </p>
        )}
        {project.github && (
          <p className="mb-2">
            <span className={`font-semibold text-gray-600 ${isDarkMode ? "dark:text-gray-400" : ""} mr-2`}>GitHub Repository:</span>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {project.github}
            </a>
          </p>
        )}
        {project.demo && (
          <p className="mb-2">
            <span className={`font-semibold text-gray-600 ${isDarkMode ? "dark:text-gray-400" : ""} mr-2`}>Demo:</span> {project.demo}
          </p>
        )}
      </div>
    </div>
  );
};

export default Show;