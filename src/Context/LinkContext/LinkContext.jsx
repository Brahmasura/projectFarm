// the linkContext

import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const LinkContext = createContext();

export const LinkProvider = ({children}) => {
  const [activeLink, setActiveLink] = useState(0);
  const location = useLocation();

  console.log("the page reloaded again");

  //   helper function
    const handleLinkClick = (index) => {
    setActiveLink(index);
    console.log(`the link index no ${index} has been clicked `);
  }

  useEffect(() => {
    // Set activeLink based on current route pathname
    switch (location.pathname) {
      case "/":
        setActiveLink(0);
        break;
      case "/portfolio":
        setActiveLink(1);
        break;
      case "/about":
        setActiveLink(2);
        break;
      case "/contact":
        setActiveLink(3);
        break;
      default:
        setActiveLink(0);
        break;
    }
  }, [location.pathname]);

  const value = {
    activeLink,
    setActiveLink,
    handleLinkClick,
  };

  return <LinkContext.Provider value={value}>{children}</LinkContext.Provider>;
};
