import React, { useContext, useState } from 'react';
import { ProjectsContext } from '../../context/projects-context';
import ProjectIcon from '../LeftNavIcons/ProjectIcon/ProjectIcon';
import SingleProjectItem from '../SingleProjectItem/SingleProjectItem';
import styles from './ProjectsList.module.scss';



const ProjectsList=({projectSelectHandler})=>{
    const [selectedProjId, setSelectedProjId]=useState(0);
    const [projects, setProjects]=useContext(ProjectsContext);

    const selectHandler=(idx)=>{
        setSelectedProjId(idx);
        projectSelectHandler(idx);
    }
    return (
        <div className={styles.container}>
            <h3 className={styles.projectsTitle}>PROJECTS</h3>
            {
                projects.map((project, idx)=>(
                    <SingleProjectItem 
                    onClick={()=>selectHandler(idx)}
                    selectedProject={idx===selectedProjId} 
                    key={idx} 
                    project={project}/>
                ))
            }
            <div className={styles.createProject}>
                <ProjectIcon/>
                <span className={styles.creteProjText}>Create project</span>
            </div>
        </div>
    )
}

export default ProjectsList