import classes from "./campusCard.module.scss";
import Image from "next/image";
export type CardProps = {
  img: string;
  title: string;
  text?: string;
  link: string;
};
export default function CampusCard({ img, title, text, link }: CardProps) {
  return (
    <div className={classes.card}>
      <a href={link}>
        <div className={classes.card_img}>
          <Image src={`/media/images/${img}`} layout="fill" alt="campus" />
        </div>
        <div className={classes.card_title}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </a>
    </div>
  );
}
