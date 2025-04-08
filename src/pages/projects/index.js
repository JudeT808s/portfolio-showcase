import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projectsJSON from '../../assets/data/projects.json';
import ProjectCard from '../../components/ProjectCard';
import ProjectFilter from '../../components/TagDropdown';

const ITEMS_PER_PAGE = 3;

const Index = () => {
  const [projects, setProjects] = useState(projectsJSON);
  const { slug } = useParams();
  const allTags = [...new Set(projectsJSON?.flatMap(project => project.tags) || [])];

  const [selectedTag, setSelectedTag] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('desc'); // Default sorting order is descending

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
    setCurrentPage(1); // Reset to first page on tag change
    let filteredProjects = projectsJSON;
    if (tag) {
      filteredProjects = filteredProjects.filter((p) => p.tags.includes(tag));
    }
    sortProjects(filteredProjects, sortOrder); // Re-sort after filtering
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
    sortProjects(projects, order); // Re-sort when order changes
  };

  const sortProjects = (projectsToSort, order) => {
    const sortedProjects = [...projectsToSort].sort((a, b) => {
      if (order === 'asc') {
        return a.date - b.date; 
      } else {
        return b.date - a.date; 
      }
    });
    setProjects(sortedProjects);
  };

  useEffect(() => {
    if (slug) {
      const filteredProjects = projectsJSON?.filter((p) => p.slug === slug) || [];
      sortProjects(filteredProjects, sortOrder);
    } else {
      sortProjects(projectsJSON, sortOrder);
    }
    setCurrentPage(1); // Reset on slug change
  }, [slug]);

  // Pagination logic
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <ProjectFilter tags={allTags} selectedTag={selectedTag} onSelectTag={handleTagChange} />
      
      {/* Sorting Buttons */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={() => handleSortChange('asc')}
          className={`px-4 py-2 rounded ${sortOrder === 'asc' ? 'bg-blue-500 text-white' : 'bg-neutral-400'}`}
        >
          Sort by Year (Ascending)
        </button>
        <button
          onClick={() => handleSortChange('desc')}
          className={`px-4 py-2 rounded ${sortOrder === 'desc' ? 'bg-blue-500 text-white' : 'bg-neutral-400'}`}
        >
          Sort by Year (Descending)
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 place-items-center mt-10">
        {paginatedProjects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-neutral-400'}`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-neutral-400 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Index;
