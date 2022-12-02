import React from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

type HeaderProps = {
  className?: string,
  isMenuShown: boolean;
  onClickHandler: () => void;
}

const tw = {
  transition: "transition-all ease-in-out duration-500",
  logoText: "opacity-0 sm:opacity-100 text-[0] sm:text-xl",
}

const Header = ({ className, isMenuShown, onClickHandler }: HeaderProps) => {
  const onMenuButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClickHandler();
  }

  return(
    <header className={`${className} flex flex-row justify-between relative z-50`}>
      <Link
        to="/"
        className={`flex flex-row lg:flex-col no-underline gap-2 lg:gap-0 items-center lg:items-start text-xl lg:text-2xl ${tw.transition}`}
      >
        <StaticImage
          src="../assets/images/logo.svg"
          className="w-[3em] lg:w-[4em]" alt="Front-Page Logo"
        />
        <div className="font-black leading-none whitespace-nowrap">
          <span>{"<J"}<span className={`${tw.logoText} ${tw.transition}`}>onny </span>P
          <span className={`${tw.logoText} ${tw.transition}`}>ark</span>{" />"}</span>
        </div>
      </Link>
      <button
        onClick={onMenuButtonClick}
        className="font-MaterialSymbols lg:hidden text-4xl"
      >{isMenuShown ? "close" : "menu" }</button>
    </header>
  );
}

export default Header
