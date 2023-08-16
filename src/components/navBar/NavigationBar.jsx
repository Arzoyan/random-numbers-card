import React, { memo } from "react";
import Instructions from "../instruction/Instructions";

const NavigationBar = () => {
  return (
    <nav className="navigationBar">
      <Instructions />
    </nav>
  );
};

export default memo(NavigationBar);
