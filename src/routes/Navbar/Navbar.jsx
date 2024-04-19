import style from "./Navbar.module.scss";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LinkContext } from "../../Context/LinkContext/LinkContext";

const Navbar = () => {
  const { activeLink, handleLinkClick } = useContext(LinkContext);
  return (
    <>
      <div className={style.navMain}>
        <img src={logo} alt="the logo" />

        <ul>
          <li>
            <NavLink
              to={"/"}
              className={
                activeLink === 0 ? style.clickedStyle : style.unclickedStyle
              }
              onClick={() => {
                handleLinkClick(0);
              }}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"portfolio"}
              className={
                activeLink === 1 ? style.clickedStyle : style.unclickedStyle
              }
              onClick={() => {
                handleLinkClick(1);
              }}
            >
              Portfolio
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink
              to={"about"}
              className={
                activeLink === 2 ? style.clickedStyle : style.unclickedStyle
              }
              onClick={() => {
                handleLinkClick(2);
              }}
            >
              About
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink
              to={"contact"}
              className={
                activeLink === 3 ? style.clickedStyle : style.unclickedStyle
              }
              onClick={() => {
                handleLinkClick(3);
              }}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
