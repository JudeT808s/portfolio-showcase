import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const tags = project.tags.map((tag, i) => (
        <div key={i} className="badge badge-neutral">
            {tag}
        </div>
    ));

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={project.images[0].path} alt={`Project: ${project.title}`} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {project.title}
                </h2>
                <p>{project.description}</p>
                <div className="card-actions flex flex-wrap justify-between items-center">
                    {tags}

                    {project.website && (
                        <a
                            href={project.website}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary mt-2 sm:mt-0 sm:ml-2"
                        >
                            Website
                        </a>
                    )}

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary mt-2 sm:mt-0 sm:ml-2"
                        >
                            GitHub
                        </a>
                    )}

                    <Link to={`/projects/${project.slug}`} className="btn btn-primary mt-2 sm:mt-0 sm:ml-2">
                        Show
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
