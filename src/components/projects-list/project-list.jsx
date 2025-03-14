import {ProjectCard} from "../project-card/project-card.jsx";
import './project-list.scss'

export const ProjectList = ({projects}) => {
    return (
        <div className='project-list'>
            {projects.map((project) => (
                <ProjectCard  key={project.id} card={project}/>
            ) )}
        </div>
    )
}