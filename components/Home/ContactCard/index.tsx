import classes from "./ContactCard.module.scss";
import { message, location, tel } from "../../../public/media/icons";
import Image from "next/image";

export type CardProps = {
  data: { icon: String; title: String; text: String; link?: string };
};
export default function ContactCard({ data }: CardProps) {
  return (
    <div className={classes.card}>
      <div className={classes.card__icon}>
        <Image src={`/media/icons/${data.icon}`} layout="fill" alt="icon" />
      </div>
      <div className={classes.card__text}>
        <h2>{data?.title}</h2>
        <a href={data?.link}>{data?.text}</a>
      </div>
    </div>
  );
}
