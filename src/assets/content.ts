import { ILinkWithSimpleIcon, Project, WhoIAm } from '../types/types';
import * as simpleIcon from './simpleIcon';
import { skillsRecord } from './skillSet';

export const projects: Record<string, Project> = {
    'front-page': {
        title: 'Front-Page',
        subtitle: 'A hub and A showcase',
        techArr: [
            {
                title: 'Languages',
                skills: [ skillsRecord['typescript'] ]
            },
            {
                title: 'Frontend',
                skills: [ skillsRecord['gatsby'], skillsRecord['tailwind_css'], skillsRecord['html5'], skillsRecord['css3'] ]
            },
            {
                title: 'Tools',
                skills: [ skillsRecord['yarn'], skillsRecord['git'] ]
            }
        ],
        linksArr: [
            {
                url: 'https://jonpardev.github.io/',
                title: 'Front-Page'
            },
            {
                url: 'https://github.com/jonpardev/jonpardev.github.io',
                title: 'Github Repo'
            }
        ],
        descArr: [
            'Static site based on Gatsby, styled with TailwindCSS and deployed on Github Pages using Github Actions.',
            'All text is stored as one file for better maintenance.',
        ],
    },
    'tt-see': {
        title: 'TT-See',
        subtitle: 'Toronto Subway Watcher',
        techArr: [
            {
                title: 'Languages',
                skills: [ skillsRecord['typescript'] ]
            },
            {
                title: 'Frontend',
                skills: [ skillsRecord['react'], skillsRecord['tailwind_css'], skillsRecord['html5'], skillsRecord['css3'] ]
            },
            {
                title: 'Backend',
                skills: [ skillsRecord['node_js'], skillsRecord['express'] ]
            },
            {
                title: 'Tools',
                skills: [ skillsRecord['vite'], skillsRecord['yarn'], skillsRecord['git'] ]
            }
        ],
        linksArr: [
            {
                url: 'https://jonpardev.github.io/tt-see',
                title: 'TT-See'
            },
            {
                url: 'https://github.com/jonpardev/tt-see',
                title: 'Github Repo'
            }
        ],
        descArr: [
            'Frontend is based on React, styled with TailwindCSS and deployed on Github Pages using Github Actions.',
            'Vite is used to create a project and Axios is also used to access APIs.',
            'Basic subway information, like lines and stations, is stored in Local Storage for faster access and less data consumption.',
            'Backend is on Node.js with Express and deployed on Koyeb using Github repository',
            'It periodically takes an alert from the TTC official website and processes it as a format of TT-See alert.',
            'The APIs are designed to minimize the size  for delivering the data faster and lighter considering the weak signal problem in underground stations.',
        ],
    }
};

export const externalLinks: ILinkWithSimpleIcon[] = [
    {
        title: 'Github',
        url: 'https://github.com/jonpardev',
        icon: simpleIcon.github,
    },
    {
        title: 'LinkedIn',
        url: 'https://linkedin.com/in/jonpardev',
        icon: simpleIcon.linkedIn,
    },
    {
        title: 'Gmail',
        url: 'mailto:jonpardev@gmail.com',
        icon: simpleIcon.gmail,
    },
]

export const whoIAmArr: WhoIAm[] = [ 
    {
        iAm: "a Full stack web Developer.",
    },
    {
        iAm: "a Problem Solver.",
    },
    {
        iAm: "a TypeScript Lover.",
    }
]