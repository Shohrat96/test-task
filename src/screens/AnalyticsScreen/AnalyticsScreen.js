import React, { useState } from 'react';
import GraphComponent from '../../components/GraphComponent/GraphComponent';
import KeyRequests from '../../components/KeyRequests/KeyRequests';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import styles from './AnalyticsScreen.module.scss';
import graphImg1 from '../../assets/img/graph1.png';
import graphImg2 from '../../assets/img/graph2.png'
import graphImg3 from '../../assets/img/graph3.png'
import MonitoringPeriod from '../../components/MonitoringPeriod/MonitoringPeriod';
import CustomTable from '../../components/CustomTable/CustomTable';



const AnalyticsScreen=()=>{
    const [selectedProject, setSelectedProject]=useState(0);

    return (
        <div className={styles.container}>
            <h1 className={styles.contentTitle}>Analytics</h1>
            <section className={styles.content}>
                <div className={styles.projectsList}>
                    <ProjectsList projectSelectHandler={(idx)=>setSelectedProject(idx)}/>
                </div>
                <div className={styles.projectInfo}>
                    <div className={styles.keyRequests}>
                        <KeyRequests selectedProject={selectedProject}/>
                    </div>
                    <div className={styles.monitoringPeriod}>
                        <MonitoringPeriod/>
                    </div>
                    <div className={styles.graphsWrap}>
                        <GraphComponent
                        style={{width:'32%'}}
                        domainName={"autotrader.com"}
                        graphImg={graphImg1}
                        trackerIdx={1.3}
                        changeValue={0.2}
                        />
                        <GraphComponent
                        style={{width:'32%'}}
                        domainName={"carrent-ind.com"}
                        graphImg={graphImg2}
                        trackerIdx={2.8}
                        changeValue={-0.1}
                        />
                        <GraphComponent
                        style={{width:'32%'}}
                        domainName={"incom-auto.us"}
                        graphImg={graphImg3}
                        trackerIdx={4.2}
                        changeValue={2.4}
                        />
                    </div>
                    <div className={styles.infoTable}>
                        <CustomTable/>
                    </div>
                </div>  
            </section>
        </div>
    )
}

export default AnalyticsScreen