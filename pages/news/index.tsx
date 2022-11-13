import classes from "./style.module.scss";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
export default function News() {
  const links = [
    { href: "/news?ctegory=all", rel: "All Categories" },
    { href: "/news?ctegory=Admission", rel: "Admission" },
    { href: "/news?ctegory=Application", rel: "Application" },
    { href: "/news?ctegory=Competition", rel: "Competition" },
    { href: "/news?ctegory=Courses", rel: "Courses" },
    { href: "/news?ctegory=Events", rel: "Events" },
  ];
  return (
    <>
      <Header title={"News"} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_news}>
            <h1>cards</h1>
          </div>
          <div className={classes.body_links}>
            <Navigation links={links} />
          </div>
        </div>
      </div>
    </>
  );
}
