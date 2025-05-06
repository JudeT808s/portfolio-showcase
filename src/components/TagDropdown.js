import React from 'react';

const ProjectFilter = ({ tags, selectedTag, onSelectTag }) => {
  return (
    <div className="dropdown dropdown-closed mt-4">
      <div tabIndex={0} role="button" className="btn m-1">
        Filter by Tag
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a onClick={() => onSelectTag('')}>All</a>
        </li>
        {tags.map((tag, index) => (
          <li key={index}>
            <a onClick={() => onSelectTag(tag)}>{tag}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectFilter;
