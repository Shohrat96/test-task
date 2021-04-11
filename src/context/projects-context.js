import React, { createContext, useState } from 'react';

export const ProjectsContext=createContext();

export const ProjectsProvider=(props)=>{
    const [projects, setProjects]=useState([
        {
            title:"Tesla Model S",
            count:7,
            keyRequests:[
                {
                    title:'Buy Tesla Model S',
                    location:'San-Francisco'
                },
                {
                    title:'Tesla Model S in Orlando',
                    location:'Orlando'
                },
                {
                    title:'Tesla in New York',
                    location:'New York'
                },
                {
                    title:'Buy Car',
                    location:'USA'
                },
                {
                    title:'Buy Tesla Model S in Orlando',
                    location:'Orlando'
                },
                {
                    title:'Buy Tesla Model S',
                    location:'San-Francisco'
                },
                {
                    title:'Buy Car',
                    location:'USA'
                },
                {
                    title:'Tesla in New York',
                    location:'New York'
                }
            ]
        },
        {
            title:"Tesla Model S",
            count:12,
            keyRequests:[
                {
                    title:'Buy Tesla Model S-2',
                    location:'Miami'
                },
                {
                    title:'BMW Model S in Orlando',
                    location:'Texas'
                },
                {
                    title:'Mercedes in Washington',
                    location:'Washington'
                },
                {
                    title:'Buy Another Car',
                    location:'USA'
                },
                {
                    title:'Buy Mercedes Model in Missipi',
                    location:'Missipi'
                },
                {
                    title:'Buy Suburban Model S',
                    location:'California'
                },
                {
                    title:'Buy Car',
                    location:'USA'
                },
                {
                    title:'Tesla in New York',
                    location:'New York'
                }
            ]
        },
        {
            title:"Tesla Model S",
            count:26,
            keyRequests:[
                {
                    title:'Buy Another Car',
                    location:'USA'
                },
                {
                    title:'Buy Mercedes Model in Missipi',
                    location:'Missipi'
                },
                {
                    title:'Buy Suburban Model S',
                    location:'California'
                },
                {
                    title:'Buy Car',
                    location:'USA'
                },
                {
                    title:'Tesla in New York',
                    location:'New York'
                },
                {
                    title:'Buy Car',
                    location:'USA'
                },
                {
                    title:'Tesla in New York',
                    location:'New York'
                },
                {
                    title:'Tesla in New York',
                    location:'New York'
                }
            ]
        },
        {
            title:"Tesla Model S",
            count:38,
            keyRequests:[
                {
                    title:'Buy Another Car',
                    location:'USA'
                },
                {
                    title:'Buy Mercedes Model in Missipi',
                    location:'Missipi'
                },
                {
                    title:'Buy Suburban Model S',
                    location:'California'
                },
                {
                    title:'Buy Suburban Model S',
                    location:'California'
                },
                {
                    title:'Buy Suburban Model S',
                    location:'California'
                },
                {
                    title:'Buy Suburban Model S',
                    location:'California'
                },
                {
                    title:'Buy Suburban Model S',
                    location:'California'
                },
                {
                    title:'Buy Suburban Model S',
                    location:'California'
                }
            ]
        },
        {
            title:"Tesla Model S",
            count:41,
            keyRequests:[
                {
                    title:'Buy Another Car',
                    location:'USA'
                },
                {
                    title:'Buy Mercedes Model in Missipi',
                    location:'Missipi'
                },
                {
                    title:'Buy Suburban Model S',
                    location:'California'
                },
                {
                    title:'Buy Mercedes Model in Missipi',
                    location:'Missipi'
                },
                {
                    title:'Buy Suburban Model S',
                    location:'California'
                },
                {
                    title:'Buy Mercedes Model in Missipi',
                    location:'Missipi'
                },
                {
                    title:'Buy Suburban Model S',
                    location:'California'
                },
                {
                    title:'Buy Suburban Model S',
                    location:'California'
                }
            ]
        },
        {
            title:"Tesla Model S",
            count:24,
            keyRequests:[
                {
                    title:'Buy Another Car',
                    location:'USA'
                },
                {
                    title:'Buy Mercedes Model in Missipi',
                    location:'Missipi'
                },
                {
                    title:'Buy Suburban Model S',
                    location:'California'
                },
                {
                    title:'Buy Suburban Model S',
                    location:'California'
                },
                {
                    title:'Buy Suburban Model S',
                    location:'California'
                },
                {
                    title:'Buy Suburban Model S',
                    location:'California'
                },
                {
                    title:'Buy Suburban Model S',
                    location:'California'
                },
                {
                    title:'Buy Suburban Model S',
                    location:'California'
                }
            ]
        }
    ])
    return <ProjectsContext.Provider value={[projects, setProjects]}>{props.children}</ProjectsContext.Provider>
}