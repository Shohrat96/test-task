import React, { useState } from 'react';
import styles from './MonitoringPeriod.module.scss';
import periodImg from '../../assets/img/periodsIcon.png';


const MonitoringPeriod=()=>{
    const options=['day', 'week', 'month', 'year'];
    const [selectedOption,setSelectedOption]=useState(null)
    return(
        <div className={styles.container}>
            <h3 className={styles.periodTitle}>MONITORING PERIOD</h3>
            <div className={styles.periodContent}>
                <div className={styles.periodOptions}>
                    {
                        options.map((option,index)=>{
                            return (
                                <div 
                                onClick={()=>setSelectedOption(index)}
                                className={[styles.periodOption, selectedOption===index?styles.selectedOption:null].join(" ")} 
                                key={index}>{option}
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.periodData}>
                    <img className={styles.optionsImg} src={periodImg} alt="periods-icon" />
                    <span className={styles.periodShown}>4 Oct 2019 - 4 Nov 2019</span>
                </div>
            </div>
        </div>
    )
}

export default MonitoringPeriod