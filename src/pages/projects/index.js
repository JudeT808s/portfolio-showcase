import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projectsJSON from '../../assets/data/projects.json';
import ProjectCard from '../../components/ProjectCard';
import ProjectFilter from '../../components/TagDropdown';

const ITEMS_PER_PAGE = 4;

const Index = () => {
  const { slug } = useParams();
  const allTags = [...new Set(projectsJSON?.flatMap((project) => project.tags) || [])];

  const [selectedTag, setSelectedTag] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let updated = projectsJSON;

    if (slug) {
      updated = updated.filter((p) => p.slug === slug);
    } else if (selectedTag) {
      updated = updated.filter((p) => p.tags.includes(selectedTag));
    }

    updated = [...updated].sort((a, b) =>
      sortOrder === 'asc' ? a.date - b.date : b.date - a.date
    );

    setFilteredProjects(updated);
    setCurrentPage(1);
  }, [slug, selectedTag, sortOrder]);

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-12">
      <ProjectFilter tags={allTags} selectedTag={selectedTag} onSelectTag={handleTagChange} />

      {/* Sorting Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center mt-4 gap-2 sm:gap-4">
        <button
          onClick={() => handleSortChange('asc')}
          className={`px-4 py-2 rounded w-full sm:w-auto ${sortOrder === 'asc' ? 'btn-primary text-white' : 'bg-neutral-400'}`}
        >
          Sort by Year (Ascending)
        </button>
        <button
          onClick={() => handleSortChange('desc')}
          className={`px-4 py-2 rounded w-full sm:w-auto ${sortOrder === 'desc' ? 'btn-primary text-white' : 'bg-neutral-400'}`}
        >
          Sort by Year (Descending)
        </button>
      </div>

      {/* Project Grid */}
      {paginatedProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center mt-10">
          {paginatedProjects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center mt-10 text-gray-500">No projects found.</p>
      )}

      {/* Pagination Controls */}
      <div className="flex flex-wrap justify-center items-center mt-6 gap-2">
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
            className={`px-4 py-2 rounded ${currentPage === i + 1 ? 'btn-primary text-white' : 'bg-neutral-400'}`}
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
    </div>
  );
};

export default Index;
