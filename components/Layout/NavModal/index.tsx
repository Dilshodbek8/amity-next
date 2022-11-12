import routes, { Links } from "../routes";
import classes from "./navModal.module.scss";
import Link from "next/link";
import { exit } from "./../../../public/media/icons";
import Image from "next/image";

const navModal = (toggleDrawer: any) => {
  const links = routes();
  return (
    <div role="presentation" className={classes.nav}>
      <div className={classes.nav__links}>
        <div className={classes.nav__links_top}>
          <form action="">
            <input type="text" />
          </form>
          <Image
            onClick={toggleDrawer("left", false)}
            src={exit}
            width="25"
            height="25"
            alt="exit"
          />
        </div>
        <div className={classes.nav__links_bottom}>
          <div>
            <h2>About Us</h2>
            <ul>
              {links.about?.map((l: Links, i: number) => (
                <li key={i}>
                  <Link href={l.href}>{l.rel}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Admission</h2>
            <ul>
              {links.admission?.map((l: Links, i: number) => (
                <li key={i}>
                  <Link href={l.href}>{l.rel}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Information</h2>
            <ul>
              {links.information?.map((l: Links, i: number) => (
                <li key={i}>
                  <Link href={l.href}>{l.rel}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navModal;
