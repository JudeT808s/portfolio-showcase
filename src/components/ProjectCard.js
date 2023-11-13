import { Link } from 'react-router-dom';
const ProjectCard = ({ project }) => {
    const tags = project.tags.map((tag, i) => (
        <div key={i} className="badge badge-neutral">
            {tag}
        </div>
    ));
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={project.images[0].path} alt={project.images[0].caption} /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {project.title}
                </h2>
                <p>{project.description}</p>
                <div class="card-actions justify-end">
                    {tags}
                    {project.website ? (<a href={project.website} target="_blank" rel="noreferrer" className="btn btn-primary">Website</a>) : null}
                    {project.github ? (<a href={project.github} target="_blank" rel="noreferrer" className="btn btn-primary">GitHub</a>) : null}
                    <Link to={`/projects/${project.slug}`}>Show</Link>
                </div>
            </div>
        </div>
    )
}
export default ProjectCard