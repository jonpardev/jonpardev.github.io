import React from "react";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { toggleIsShown } from "../state/menuButtonSlice";

const MenuButton = () => {
  const dispatch = useAppDispatch();
  const isShown = useAppSelector(state => state.menuButton.isShown);

  return(
    <button
        onClick={() => dispatch(toggleIsShown())}
        className="font-MaterialSymbols lg:hidden text-4xl"
      >{isShown ? "close" : "menu" }</button>
  );
}

export default MenuButton;