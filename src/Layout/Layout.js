import React, { useEffect, useState } from 'react';
import styles from './Layout.module.scss';
import avatar from '../assets/img/avatar.png';
import CommentIcon from '../components/LeftNavIcons/CommentIcon/CommentIcon';
import GraphIcon from '../components/LeftNavIcons/GraphIcon/GraphIcon';
import ProjectIcon from '../components/LeftNavIcons/ProjectIcon/ProjectIcon';
import FilterIcon from '../components/LeftNavIcons/FilterIcon/FilterIcon';
import CustomProgresBar from '../components/CustomProgresBar/CustomProgresBar';
import {Switch, Route, Link, useLocation, Redirect} from 'react-router-dom';
import AnalyticsScreen from '../screens/AnalyticsScreen/AnalyticsScreen';
import CreateProjectScreen from '../screens/CreateProjectScreen/CreateProjectScreen';
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';
import FilterScreen from '../screens/FilterScreen/FilterScreen';


// const NAV_TABS=['project, graph, comment, filter'];

const Layout=()=>{
    const location=useLocation();
    const [selectedNavTab, setSelectedNavTab]=useState('');
    useEffect(()=>{
        setSelectedNavTab(location.pathname)
    },[location]);

    return (
        <div className={styles.container}>
            <div className={styles.leftNavigation}>
                <div className={styles.leftNavWrap}>
                    <div className={styles.navigationTab} >
                        <Link to="createProject">
                            <ProjectIcon selected={selectedNavTab==='/createProject'}/>
                        </Link>
                    </div>
                    <div className={styles.navigationTab} >
                        <Link to="/analytics">
                            <GraphIcon  selected={selectedNavTab==='/analytics'}/>
                        </Link>
                    </div>
                    <div className={styles.navigationTab} >
                        <Link to="/comments">
                            <CommentIcon   selected={selectedNavTab==='/comments'} />
                        </Link>
                    </div>
                    <div className={styles.navigationTab}>
                        <Link to="/filter">
                            <FilterIcon  selected={selectedNavTab==='/filter'}/>
                        </Link>
                    </div>
                </div>

            </div>
            <div className={styles.mainContent}>
                <div className={styles.header}>
                    <div className={styles.addRequestWrapper}>
                        <a className={styles.addRequestWrapperBtn} href="#">Add requests</a>
                        <span className={styles.addRequestPlusIcon}>+</span>
                    </div>
                    <div className={styles.requestsBar}>
                        <div className={styles.requestBarGraph}>
                            <CustomProgresBar percent={50} trailColor={styles.mainBorderColor}/>
                        </div>
                        <div className={styles.requestBarData}>120 / 240 requests</div>
                    </div>
                    <div className={styles.account}>
                        <div className={styles.accountData}>
                            <span className={styles.accountName}>Dmitry Galkin</span>
                            <span className={styles.accountEmail}>dgalkin@gmail.com</span>
                        </div>
                        <div className={styles.accountAvatar}>
                            <img src={avatar} alt="avatar-img"/>
                        </div>
                    </div>
                </div>
                <div className={styles.contentWrapper}>
                    <Switch>
                        <Route path="/" exact>
                            <Redirect to="/analytics"/>
                        </Route>
                        <Route path="/createProject" component={CreateProjectScreen}/>
                        <Route path="/analytics" component={AnalyticsScreen}/>
                        <Route path="/comments" component={CommentsScreen}/>
                        <Route path="/filter" component={FilterScreen}/>
                    </Switch>
                </div>

            </div>
        </div>
    )
}   

export default Layout