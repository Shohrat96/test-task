import React, { useContext, useState } from 'react';
import { ProjectsContext } from '../../context/projects-context';
import SingleProjectItem from '../SingleProjectItem/SingleProjectItem';
import styles from './KeyRequests.module.scss';


const KeyRequests=({selectedProject})=>{

    const [selectedRequestId, setSelectedRequestId]=useState(null);
    const [projects, setProjects]=useContext(ProjectsContext);
    const requests=projects[selectedProject].keyRequests;

    return (
        <div className={styles.container}>
            <h3 className={styles.requestsTitle}>KEY REQUESTS</h3>
            <div className={styles.requestsWrapper}>
                {
                    requests.map((request, idx)=>(
                        <SingleProjectItem 
                        onClick={()=>setSelectedRequestId(idx)}
                        selectedRequest={idx===selectedRequestId}
                        key={idx} 
                        request={request}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default KeyRequests