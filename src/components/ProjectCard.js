import { Link } from "react-router-dom";
import { useTheme } from "../components/ThemeContext";
import { motion } from "framer-motion";


const placeholderImage =
  "https://firebasestorage.googleapis.com/v0/b/jude-portfolio-e99bb.appspot.com/o/images%2FPortfolio%20Placeholder%20Black.jpg?alt=media&token=5fa7e0cf-2672-4375-8007-3d2a6083be01";

const truncate = (text, length = 90) =>
  text?.trim().length > length ? text.trim().slice(0, length) + "..." : text;

const ProjectCard = ({ project, onFeatured = false }) => {
  const { isDarkMode } = useTheme();

  const getProjectImage = (project, onFeatured) => {
    // First priority: project.images
    if (Array.isArray(project.images) && project.images.length > 0 && project.images[0]?.path) {
      return project.images[0].path;
    }
  
    // If it's a featured project, check design_process.images
    if (
      onFeatured &&
      project.design_process?.images &&
      Array.isArray(project.design_process.images) &&
      project.design_process.images.length > 0 &&
      project.design_process.images[0]?.path
    ) {
      return project.design_process.images[0].path;
    }
  
    // Fallback
    return placeholderImage;
  };
  
  const imageUrl = getProjectImage(project, onFeatured);
  

  return (
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: "easeOut" }}>
    <div
      className="relative group transform transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-1 w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto rounded-2xl shadow-2xl bg-white/80 dark:bg-black/40 backdrop-blur-md border border-gray-200 dark:bg-base-100 overflow-hidden"
    >
      <figure className="overflow-hidden">
        <img
          src={imageUrl}
          alt={`Project: ${project.title}`}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </figure>

      <div className={`p-3 transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-sm opacity-80">{truncate(project.description)}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-200 dark:bg-base-100 text-xs px-3 py-1 rounded-full font-medium transition-all duration-200 hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-4">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-outline btn-primary w-full sm:w-auto"
            >
              Website
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-outline btn-primary w-full sm:w-auto"
            >
              GitHub
            </a>
          )}
          <Link
            to={`/${onFeatured ? "featuredProjects" : "projects"}/${project.slug}`}
            className="btn btn-sm btn-outline btn-primary w-full sm:w-auto"
          >
            Show
          </Link>
        </div>
      </div>
    </div>
    </motion.div>

  );
};

export default ProjectCard;
