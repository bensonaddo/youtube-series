import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div>Great MeetUps</div>
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
