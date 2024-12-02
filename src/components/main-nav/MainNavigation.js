import { useContext } from "react";
import { NavLink } from "react-router-dom";
import mainNavCss from "./MainNavigation.module.css";
import FavoritesContext from "../../state-mgmt/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
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
            <NavLink to="/favorites">
              Favorites
              <span className={mainNavCss.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
