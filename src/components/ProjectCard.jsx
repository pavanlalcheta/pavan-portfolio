
const ProjectCard = ({title,description,tech}) => {

    return (
        <div className="card">
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
            <div className="flex flex-wrap gap-2">
                {tech.map((t,index)=>(
                    <span key={index} className="tech">{t}</span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;