import classes from "./Partners.module.scss";
import Image from "next/image";
import MySlider from "../../Slider";

export default function Partners() {
  const partners = [
    "albison.svg",
    "aqa.svg",
    "bsme.svg",
    "caie 1.svg",
    "bsme.svg",
    "oxford.svg",
    "pearson.svg",
  ];
  const elems = partners.map((p: string, i: number) => (
    <div className={classes.card_img}>
      <Image
        src={`/media/icons/${p}`}
        alt="partners"
        width={200}
        height={100}
      />
    </div>
  ));
  return (
    <div className={classes.card}>
      <MySlider show={5} sliders={elems} dotsFalse />
    </div>
  );
}
