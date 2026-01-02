import ProjectData from '../data/projects.json';
import ProjectCard from './ProjectCard';

const Projects = () => {

    return (
        <div className=' py-12 px-6'>
            <h2 className=' mb-10 text-center text-3xl md:text-5xl text-blue-500'>My Projects</h2>

            <div className='grid gap-6 md:grid-cols-12 lg:grid-cols-3'>
                {ProjectData.map((p)=>(
                    <ProjectCard key={p.id} title={p.title} description={p.description} tech={p.technologies}/>
                ))}
            </div>
        </div>
    );
};

export default Projects;