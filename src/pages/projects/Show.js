import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import projectsJSON from '../../assets/data/projects.json';

const Show = () => {
    const [project, setProject] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        setProject(projectsJSON.find((p) => p.slug === slug));
    }, [slug]);

    if (!project) {
        return <h1>Project does not exist</h1>;
    }

    let imageCarousel = "";

    let items = project.images.map((image, i) => (
        <div key={`items${i}`} className='carousel-item w-full'>
            <img title={image.caption} src={`${image.path}`} className="w-full" alt={image.caption} />
        </div>
    ));

    let buttons = project.images.map((image, i) => (
        <a key={`button${i}`} href={`#items${i}`} className='btn btn-xs'>{i + 1}</a>
    ));

    imageCarousel = (
        <div className="carousel">
            {items}
            <div className="flex mt-2">{buttons}</div>
        </div>
    );

    return (
        <div>
            {imageCarousel}

            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <p>{project.date}</p>
            <p>{project.tags.join(', ')}</p>
            {project.website && <p><a href={project.website} target="_blank" rel="noopener noreferrer">Website</a></p>}
            <p><a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
            {(project.demo) ? <p>Demo</p> : ""}
        </div>
    );
};

export default Show;
