import s from "./AuthNav.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  const buildLinkClass = ({ isActive }) =>
    clsx(s.link, isActive && s.activeLink);
  return (
    <div className={s.leftLinks}>
      <NavLink
        className={buildLinkClass}
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        className={buildLinkClass}
        to="/register"
      >
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
