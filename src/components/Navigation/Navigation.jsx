import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "../Navigation/Navigation.module.css";
const Navigation = () => {
  const buildLinkClass = ({ isActive }) =>
    clsx(s.link, isActive && s.activeLink);

  return (
    <div className={s.leftLinks}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink
        className={buildLinkClass}
        to="/contacts"
      >
        Contacts
      </NavLink>
    </div>
  );
};

export default Navigation;
