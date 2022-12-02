import { SimpleIcon } from "../assets/simpleIcon"
import { Skill } from "../assets/skillSet"

export interface ILink {
    url: string,
    title: string,
}

export interface ILinkWithSimpleIcon extends ILink {
    icon: SimpleIcon,
}

export type Tech = {
    title: string,
    skills: Skill[]
}

export type Project = {
    title: string,
    subtitle?: string,
    descArr: string[],
    techArr: Tech[],
    linksArr: ILink[],
    screenShotUrl?: string
}

export type WhoIAm = {
    iAm: string,
    desc?: string,
}