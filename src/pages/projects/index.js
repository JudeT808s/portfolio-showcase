import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projectsJSON from '../../assets/data/projects.json';
import ProjectCard from '../../components/ProjectCard';
import ProjectFilter from '../../components/TagDropdown'; 
import { useTheme } from '../../components/ThemeContext';
import { Container } from 'react-bootstrap';

const Index = () => {
  const isDarkMode = useTheme();
  const [projects, setProjects] = useState(projectsJSON);
  const { slug } = useParams();
  const allTags = [...new Set(projectsJSON?.flatMap(project => project.tags) || [])];
  const containerClass = isDarkMode ? 'dark-theme' : 'light-theme'; // Class for the theme

  const [selectedTag, setSelectedTag] = useState('');

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
    if (tag) {
      const filteredProjects = projectsJSON.filter((p) => p.tags.includes(tag));
      setProjects(filteredProjects);
    } else {
      setProjects(projectsJSON);
    }
  };

  useEffect(() => {
    if (slug) {
      const filteredProjects = projectsJSON?.filter((p) => p.slug === slug) || [];
      setProjects(filteredProjects);
    } else {
      setProjects(projectsJSON || []);
    }
  }, [slug]);

  return (
    <>
      <ProjectFilter tags={allTags} selectedTag={selectedTag} onSelectTag={handleTagChange} className={containerClass}/>
      <div className={`grid grid-cols-2 gap-4 place-items-center mt-10${isDarkMode ? 'dark' : 'light'}`}>
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </>
  );
};

export default Index;
