import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projectsJSON from '../../assets/data/featprojects.json';
import ProjectCard from '../../components/ProjectCard';
import ProjectFilter from '../../components/TagDropdown';
import { Link } from 'react-router-dom';

const ITEMS_PER_PAGE = 4;

const Index = () => {
  const { slug } = useParams();
  const allTags = [...new Set(projectsJSON.flatMap((project) => project.tags))];

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
      sortOrder === 'asc' ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)
    );

    setFilteredProjects(updated);
    setCurrentPage(1);
  }, [slug, selectedTag, sortOrder]);

  const handleTagChange = (tag) => setSelectedTag(tag);
  const handleSortChange = (order) => setSortOrder(order);
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="px-4 sm:px-6 md:px-12">
      <ProjectFilter tags={allTags} selectedTag={selectedTag} onSelectTag={handleTagChange}  />

      {/* Sort Controls */}
      {/* <div className="flex justify-center gap-4 my-4">
        <button
          onClick={() => handleSortChange('asc')}
          className={`px-4 py-2 rounded ${sortOrder === 'asc' ? 'btn-primary text-white' : 'bg-gray-300'}`}
        >
          Sort by Year ↑
        </button>
        <button
          onClick={() => handleSortChange('desc')}
          className={`px-4 py-2 rounded ${sortOrder === 'desc' ? 'btn-primary text-white' : 'bg-gray-300'}`}
        >
          Sort by Year ↓
        </button>
      </div> */}

      {/* Project Cards */}
      {paginatedProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {paginatedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} onFeatured={1} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No projects found.</p>
      )}

      {/* Pagination */}
       <div className="flex justify-end mt-6 me-5 ">
       {/* <Link to="/projects" className='btn'>All Projects</Link> */}
       {/* <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-black text-white' : 'bg-gray-300'}`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button> */} 
        
      </div>
    </div>
  );
};

export default Index;
