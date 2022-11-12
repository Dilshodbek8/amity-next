import classes from "./MiniLayout.module.scss";
import Navigation from "../Navigation";
import routes from "../Layout/routes";
export default function MiniLayout({ children }: any) {
  const links = routes();
  return (
    <div className={classes.body}>
      <div className={classes.body_top}></div>
      <div className="container">
        <div className={classes.body_bottom}>
          <div className={classes.body_bottom_c}>
            <h3>breadcrumb</h3>
            <h1>title</h1>
          </div>

          <div className={classes.body_bottom_l}>
            <Navigation links={links?.about} />
          </div>
          <div className={classes.body_bottom_r}>{children}</div>
        </div>
      </div>
    </div>
  );
}
