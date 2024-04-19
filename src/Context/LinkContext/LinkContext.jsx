// the linkContext

import { createContext, useState } from "react";

export const LinkContext = createContext();

export const LinkProvider = ({children}) => {
  const [activeLink, setActiveLink] = useState(0);

  console.log("the page reloaded again");

  //   helper function
    const handleLinkClick = (index) => {
    setActiveLink(index);
    console.log(`the link index no ${index} has been clicked `);
  }

  const value = {
    activeLink,
    setActiveLink,
    handleLinkClick,
  };

  return <LinkContext.Provider value={value}>{children}</LinkContext.Provider>;
};
