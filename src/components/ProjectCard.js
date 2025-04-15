import { Link } from "react-router-dom";
import { useTheme } from "../components/ThemeContext";

const ProjectCard = ({ project }) => {
    const placeholderImage = "https://firebasestorage.googleapis.com/v0/b/jude-portfolio-e99bb.appspot.com/o/images%2FPortfolio%20Placeholder%20Black.jpg?alt=media&token=5fa7e0cf-2672-4375-8007-3d2a6083be01"
  const { isDarkMode } = useTheme();

  const tags = project.tags.map((tag, i) => (
    <div key={i} className="badge badge-neutral">
      {tag}
    </div>
  ));

  const truncate = (text, length = 90) => {
    if (!text) return "";
    const trimmed = text.trim();
    return trimmed.length > length
      ? trimmed.slice(0, length).trim() + "..."
      : trimmed;
  };

  const imageUrl =
  project.images && Array.isArray(project.images) && project.images.length > 0
    ? project.images[0].path
    : placeholderImage;
    
  return (
    <div className="card w-full max-w-sm sm:max-w-md md:max-w-lg bg-base-100 shadow-xl mb-4 mx-auto">
      <figure className="p-2">
        <img
          className="w-full object-contain max-h-[250px] sm:max-h-[300px] md:max-h-[350px]"
          src={imageUrl}
          alt={`Project: ${project.title}`}
        />
      </figure>
      <div className={`card-body ${isDarkMode ? "text-white" : "text-black"}`}>
        <h2
          className={`card-title ${isDarkMode ? "text-white" : "text-black"}`}
        >
          {project.title}
        </h2>
        <p className="text-sm">{truncate(project.description, 90)}</p>

        <div className="card-actions flex flex-wrap gap-2 justify-start mt-3">
          {tags}
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 mt-4">
          {project.website?.trim() !== "" && (
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary w-full sm:w-auto"
            >
              Website
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary w-full sm:w-auto"
            >
              GitHub
            </a>
          )}
          <Link
            to={`/projects/${project.slug}`}
            className="btn btn-primary w-full sm:w-auto"
          >
            Show
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
