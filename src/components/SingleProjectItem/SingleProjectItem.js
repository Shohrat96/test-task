import React from 'react';
import styles from './SingleProjectItem.module.scss';

const SingleProjectItem=({project, request, selectedProject, selectedRequest, onClick})=>{
    return (
        <div 
        onClick={onClick} 
        className={[styles.container, selectedProject?styles.selectedProjectContainer:null, selectedRequest?styles.selectedRequest:null].join(" ")}>
            {
                project && <div className={[styles.projectCount].join(" ")}>{project.count}</div>

            }
            <div className={styles.title}>
                {project?.title || request?.title}
                {
                    request && <span className={styles.location}>{request.location}</span>
                }
            </div>
            
            <div className={styles.dotsWrapper}>
                <div className={styles.singleDot}></div>
                <div className={styles.singleDot}></div>
                <div className={styles.singleDot}></div>
            </div>
        </div>
    )
}

export default SingleProjectItem