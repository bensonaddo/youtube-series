import layoutCss from "./Layout.module.css";
import MainNavigation from "../main-nav/MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={layoutCss.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
