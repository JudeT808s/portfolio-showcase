import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import projectsJSON from '../../assets/data/projects.json';
import { useTheme } from '../../components/ThemeContext';

const Show = () => {
  const [project, setProject] = useState(null);
  const { slug } = useParams();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setProject(projectsJSON.find((p) => p.slug === slug));
  }, [slug]);

  if (!project) {
    return <h1>Project does not exist</h1>;
  }

  let imageCarousel = "";

  let items = project.images.map((image, i) => (
    <div key={`items${i}`} className='carousel-item w-full'>
      <img title={image.caption} src={`${image.path}`} className="w-full" alt={image.caption} />
    </div>
  ));

  let buttons = project.images.map((image, i) => (
    <a key={`button${i}`} href={`#items${i}`} className='btn btn-xs'>{i + 1}</a>
  ));

  imageCarousel = (
    <div className="carousel">
      {items}
      <div className="flex mt-2">{buttons}</div>
    </div>
  );

  return (
    <div>
      {imageCarousel}

      <div className={`mb-4 ${isDarkMode ? 'dark' : 'light'}`}>
        <h1 className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>{project.title}</h1>
        <p className={`text-gray-700 mb-4 ${isDarkMode ? 'text-white':'dark'  }`}>{project.description}</p>
        <p className={`text-gray-600 mb-2 ${isDarkMode ? 'text-white':'dark'  }`}>
          <span className="font-bold">Date:</span> {project.date}
        </p>
        <p className={`text-gray-800 mb-2 ${isDarkMode ? 'text-white':'dark'  }`}>
          <span className="font-bold">Tags:</span>{' '}
          {project.tags.map((tag, i) => (
            <div key={i} className={`badge badge-neutral m-1 ${isDarkMode ? 'text-white':'dark'  }`}>
              {tag}
            </div>
          ))}
        </p>
        {project.website && (
          <p className={`text-blue-500 mb-2 `}>
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              Website
            </a>
          </p>
        )}
        <p className={`text-gray-800 mb-2 ${isDarkMode ? 'text-white':'dark'  }`}>
          <span className="font-bold">GitHub Repository:</span>{' '}
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            {project.github}
          </a>
        </p>
        {project.demo && <p className={`text-gray-600 mb-2 ${isDarkMode ? 'dark' : 'light'}`}>Demo: {project.demo}</p>}
      </div>
    </div>
  );
};

export default Show;
