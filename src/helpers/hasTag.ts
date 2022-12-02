import { projects } from "../assets/content"
import { skillsRecord } from "../assets/skillSet";

const hasTag = (key:string, tag: string): boolean => {
    const project = projects[key];
    const result = project.techArr?.find(stack => stack.skills.find(skill => skill === skillsRecord[tag]));
    if (result) return true;
    return false;
}

export default hasTag;