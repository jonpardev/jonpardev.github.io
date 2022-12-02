import React from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import MenuButton from "./menubutton";

type HeaderProps = {
  className?: string;
}

const tw = {
  transition: "transition-all ease-in-out duration-500",
  logoText: "opacity-0 sm:opacity-100 inline-block origin-left scale-x-0 sm:scale-x-100 absolute sm:static",
}

const Header = ({ className }: HeaderProps) => (
    <header className={`${className} flex flex-row justify-between relative z-50`}>
      <Link
        to="/"
        className={`flex flex-row lg:flex-col no-underline gap-2 lg:gap-0 items-center lg:items-start text-xl lg:text-2xl ${tw.transition}`}
      >
        <StaticImage
          src="../assets/images/logo.svg"
          className="w-[3em] lg:w-[4em]" alt="Front-Page Logo"
        />
        <span className="font-black leading-none whitespace-nowrap">
          <span>{"<J"}</span>
            <span className={`${tw.logoText} ${tw.transition}`}>onny</span>
          <span>P</span>
            <span className={`${tw.logoText} ${tw.transition}`}>ark</span>
          <span>{"/>"}</span>
        </span>
      </Link>
      <MenuButton />
    </header>
  )

export default Header;
