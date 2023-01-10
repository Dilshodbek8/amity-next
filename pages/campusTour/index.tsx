import classes from "./style.module.scss";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Image from "next/image";
export default function News() {
  const links = [
    { href: "/studentsLife", rel: "Students Life" },
    { href: "/campusTour", rel: "Campus Tour" },
    { href: "/transportServices", rel: "Transport Services" },
    { href: "/campusSafety", rel: "Campus Safety" },
    { href: "/campusSports", rel: "Campus Sports" },
    { href: "/campusLibrary", rel: "Campus Library" },
  ];
  return (
    <>
      <Header title={"Campus Tour"} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_card}>
            <div className={classes.body_img}>
              <Image
                src={"/media/images/mainCampus.jpg"}
                layout={"fill"}
                alt={"campus"}
              />
            </div>
            <p>
              We are a multifaceted university in Tashkent, committed to
              delivering world-class education and research. At Amity University
              Tashkent Campus, you’ll gain more than just an outstanding
              education, you’ll be exposed to a world of opportunities and learn
              from faculty who are masters in their field.
            </p>
          </div>
          <div className={classes.body_links}>
            <Navigation links={links} />
          </div>
        </div>
      </div>
    </>
  );
}
