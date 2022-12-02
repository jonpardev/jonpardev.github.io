import React from "react";
import { externalLinks } from "../assets/content";

type FooterProps = {
  className?: string;
}

const Footer = ({ className }: FooterProps) => (
  <footer className={`${className} flex flex-row lg:flex-col justify-between items-center lg:items-start lg:gap-16`}>
    <ul className="flex flex-row lg:flex-col gap-6 lg:gap-4">
      {externalLinks.map((link, index) => (
        <li key={index} className="opacity-50 hover:opacity-100 hover:-skew-y-6 transition-all duration-300">
          <a
            href={link.url}
            className="flex flex-row items-center gap-2 font-bold no-underline text-sm"
          >
            <svg
              role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-[1.5em] fill-white"
            >
              <path d={link.icon.svgPath} />
            </svg>
            <span className="grow hidden lg:inline-block">{link.title}</span>
          </a>
        </li>
      ))}
    </ul>
    <span className="whitespace-nowrap text-xs text-neutral-700 cursor-default hover:animate-pulse">by Jonny Park</span>
  </footer>
);

export default Footer;