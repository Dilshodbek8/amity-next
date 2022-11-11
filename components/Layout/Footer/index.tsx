import classes from "./footer.module.scss";
import {
  logo,
  fLocation,
  fMessage,
  fTel,
  YouTube,
  TikTok,
  Twitter,
  Facebook,
  LinkedIn,
  Instagram,
  Telegram,
} from "./../../../public/media/icons";
import Image from "next/image";
import routes, { Links } from "../routes";
import Link from "next/link";
export default function Footer() {
  const links = routes();
  return (
    <div className={classes.footer}>
      <div className="container">
        <div className={classes.footer_container}>
          <div className={classes.footer_top}>
            <div className={classes.footer_left}>
              <Image src={logo} width="160" height="80" alt="logo" />
              <div className={classes.footer_info}>
                <Image src={fLocation} width="15" height="15" alt="location" />
                <p>P.O. Box 345019 Dubai International Academic City</p>
              </div>
              <div className={classes.footer_info}>
                <Image src={fMessage} width="15" height="15" alt="location" />
                <p>
                  <a href="mailto: info@amityuniversity.com">
                    info@amityuniversity.com
                  </a>
                </p>
              </div>
              <div className={classes.footer_info}>
                <Image src={fTel} width="15" height="15" alt="location" />
                <p>
                  <a href="tel: +1 (123) 456 7890">+1 (123) 456 7890</a>
                </p>
              </div>
            </div>
            <div className={classes.footer_right}>
              <div>
                <h2>About Us</h2>
                <ul>
                  {links.about?.map((l: Links) => (
                    <li>
                      <Link href={l.href}>{l.rel}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>Admission</h2>
                <ul>
                  {links.admission?.map((l: Links) => (
                    <li>
                      <Link href={l.href}>{l.rel}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>Information</h2>
                <ul>
                  {links.information?.map((l: Links) => (
                    <li>
                      <Link href={l.href}>{l.rel}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={classes.footer_bottom}>
            <div className={classes.footer_icon}>
              <Image src={Facebook} layout="fill" alt="icon" />
            </div>
            <div className={classes.footer_icon}>
              <Image src={Twitter} layout="fill" alt="icon" />
            </div>
            <div className={classes.footer_icon}>
              <Image src={LinkedIn} layout="fill" alt="icon" />
            </div>
            <div className={classes.footer_icon}>
              <Image src={Instagram} layout="fill" alt="icon" />
            </div>
            <div className={classes.footer_icon}>
              <Image src={TikTok} layout="fill" alt="icon" />
            </div>
            <div className={classes.footer_icon}>
              <Image src={Telegram} layout="fill" alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
