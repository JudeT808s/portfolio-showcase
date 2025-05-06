import React from 'react';
import { useParams } from 'react-router-dom';
import projectsJSON from '../../assets/data/featprojects.json';
import { useTheme } from '../../components/ThemeContext'; 

const Show = () => {
  const { slug } = useParams();
  const project = projectsJSON.find((p) => p.slug === slug);
  const { isDarkMode } = useTheme(); // Access current theme mode

  if (!project) {
    return <div className="p-6 text-center text-gray-500">Project not found.</div>;
  }

  const { title, description, date, tags, github, website, design_process, images } = project;

  return (
    <div
      className={`max-w-4xl mx-auto px-6 py-12`
    } 
    >
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className={`mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{date}</p>
      <p className={`mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{description}</p>

      {tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span key={i} className="badge badge-outline">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* DESIGN PROCESS */}
      {design_process && (
        <>
          <h2 className="text-2xl font-semibold mb-4">Design Process</h2>
          <div className="space-y-6">
            {Object.entries(design_process).map(([section, content]) => (
              <div key={section}>
                <h3 
                  className={`text-lg font-medium capitalize mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {section.replace(/_/g, ' ')}
                </h3>
                {Array.isArray(content) ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {content.map((item, i) => (
                      <div key={i}>
                        <img src={item.path} alt={item.caption} className="rounded shadow" />
                        {item.caption && (
                          <p className={`text-sm mt-1 ${isDarkMode ? 'text-white' : 'text-gray-500'}`}>{item.caption}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className={`text-gray-700 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{content}</p>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* SCREENSHOTS */}
      {images?.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mt-10 mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((img, i) => (
              <div key={i}>
                <img src={img.path} alt={img.caption} className="rounded shadow" />
                {img.caption && (
                  <p className={`text-sm mt-1 ${isDarkMode ? 'text-white' : 'text-gray-500'}`}>{img.caption}</p>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* ACTION BUTTONS */}
      <div className="mt-8 flex flex-wrap gap-4">
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Website
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default Show;
