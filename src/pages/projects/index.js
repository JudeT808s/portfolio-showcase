import React, { useState } from 'react';
import projectJSON from '../../assets/data/projects.json';
import ProjectCard from '../../components/ProjectCard';

import { useTheme } from '../../components/ThemeContext';

const Index = () => {
  

  const [projects, setProjects] = useState(projectJSON);

  const projectList = projects.map((project, i) => (
    <ProjectCard key={i} project={project} />
  ));

  return (
    <>
      <div className={`grid grid-cols-2 gap-4 place-items-center `}>
        {projectList}
      </div>
    </>

  );
};

export default Index;
