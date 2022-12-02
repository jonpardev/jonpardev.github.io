import * as simpleIcon from "./simpleIcon"

export type Skill = {
    title: string,
    icon?: simpleIcon.SimpleIcon,
    internalLink?: string,
    externalLink?: string,
}

export const skillsRecord: Record<string, Skill> = {
    'typescript': {
        title: 'TypeScript',
        icon: simpleIcon.typeScript,
    },
    'react': {
        title: 'React',
        icon: simpleIcon.react,
    },
    'tailwind_css': {
        title: 'TailwindCSS',
        icon: simpleIcon.tailwindCss,
    },
    'html5': {
        title: 'HTML',
        icon: simpleIcon.html5,
    },
    'css3': {
        title: 'CSS',
        icon: simpleIcon.css3,
    },
    'vite': {
        title: 'Vite',
        icon: simpleIcon.vite,
    },
    'yarn': {
        title: 'Yarn',
        icon: simpleIcon.yarn,
    },
    'git': {
        title: 'Git',
        icon: simpleIcon.git,
    },
    'node_js': {
        title: 'Node.js',
        icon: simpleIcon.nodeJs,
    },
    'express': {
        title: 'Express',
        icon: simpleIcon.express,
    },
    'gatsby': {
        title: 'Gatsby',
        icon: simpleIcon.gatsby,
    }
}