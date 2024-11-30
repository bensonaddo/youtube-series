import { NavLink } from "react-router-dom";
import mainNavCss from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={mainNavCss.header}>
      <div className={mainNavCss.logo}>Great MeetUps</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">All MeetUps</NavLink>
          </li>
          <li>
            <NavLink to="/new-meetup">New MeetUps</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">My Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
