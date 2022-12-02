import React, { useEffect } from "react";
import { Link, navigate } from "gatsby";
import { projects } from "../assets/content"
import { skillsRecord } from "../assets/skillSet";
import hasTag from "../helpers/hasTag";
import { useAppDispatch } from "../state/hooks";
import { setIsShown } from "../state/menuButtonSlice";

type NavProps = {
  className?: string;
  search: string;
  pathname: string;
}

const Nav = ({ className, search, pathname }: NavProps) => {
  const tag = (new URLSearchParams(search)).get("tag");
  useEffect(() => { if (tag && !skillsRecord[tag]) navigate("404") }, [tag]);

  const dispatch = useAppDispatch();

  return(
    <nav className={`${className} space-y-6 flex flex-col text-5xl lg:text-4xl xl:text-5xl whitespace-nowrap`}>
      {tag && (
        <div className="flex flex-row gap-2 items-center">
          <Link
            to={`${pathname}`}
            className="inline-flex bg-rose-900 hover:bg-white active:bg-white active:scale-105 rounded-full text-white hover:text-rose-900 active:text-rose-900 text-lg leading-none cursor-pointer font-MaterialSymbols no-underline transition-colors duration-300"
          >close</Link>
          <div className="text-neutral-600 text-sm leading-none"> <span className="px-1 py-0.5 rounded text-white bg-neutral-600">{skillsRecord[tag] && skillsRecord[tag].title}</span></div>
        </div>
      )}
      {Object.keys(projects).map(key => (
        <Link
          key={key}
          to={tag ? `/project/${key}?tag=${tag}` : `/project/${key}`}
          className={`block w-fit font-black transition-all duration-300 leading-none ${(tag && `-skew-y-6 ${!hasTag(key, tag) && "text-2xl opacity-50"}`)}`}
          onClick={() => dispatch(setIsShown(false))}
        >{projects[key].title}</Link>
      ))}
    </nav>
  );
}

export default Nav;