import React, { ReactNode, useEffect, useState } from "react";
import { useLocation } from "@gatsbyjs/reach-router";
import Header from "./header";
import Footer from "./footer";
import Nav from "./nav";

type LayoutProps = {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const tw = {
    flexBox: "pb-6 sm:pb-0",
  }

  const [isMenuShown, setIsMenuShown] = useState(false);

  const pathname = useLocation() !== undefined ? useLocation().pathname : undefined;
  const search = useLocation() !== undefined ? useLocation().search : undefined;
  useEffect(() => { if (search !== undefined && search.length > 0) toggleMenuShown(); }, [search]);

  const toggleMenuShown = () => setIsMenuShown(prev => !prev);

  return (
    <div
      className="min-h-screen grid grid-cols-1 lg:grid-cols-[max-content_max-content_1fr] grid-rows-[max-content_max-content_max-content] lg:grid-rows-[1fr_max-content] bg-black text-white p-6 sm:p-16 gap-16"
    >
      <Header
        isMenuShown={isMenuShown}
        onClickHandler={toggleMenuShown}
      />
      <Nav
        pathname={pathname ?? ""}
        search={search ?? ""}
        className={`absolute lg:static top-0 left-0 w-full lg:w-fit h-full bg-black lg:row-span-2 p-6 sm:p-16 lg:p-0 pt-32 sm:pt-44 ${isMenuShown ? "z-10" : "hidden lg:block -z-50 lg:z-0"}`}
      />
      <main className={`lg:row-span-2 ${isMenuShown && "hidden lg:block"}`}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
