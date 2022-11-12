import classes from "./MiniLayout.module.scss";

export default function MiniLayout({ children }: any) {
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
            <h1>left</h1>
          </div>
          <div className={classes.body_bottom_r}>{children}</div>
        </div>
      </div>
    </div>
  );
}
