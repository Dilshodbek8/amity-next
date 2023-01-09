import classes from "./Showcase.module.scss";
import ShowcaseCard, { ShowcaseProps } from "../ShowcaseCard";
import MySlider from "../../Slider";
export default function Showcase() {
  const data = [
    {
      img: "aboutCard.jfif",
      title: "Inspiring adventure and confidence",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit placerat sit purus molestie.",
      link: "Apply",
      href: "/apply",
    },
    {
      img: "fakeNews.jfif",
      title: "Inspiring adventure and confidence",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit placerat sit purus molestie.",
      link: "Apply",
      href: "/apply",
    },
    {
      img: "fakeNews.jfif",
      title: "Inspiring adventure and confidence",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit placerat sit purus molestie.",
      link: "Apply",
      href: "/apply",
    },
    {
      img: "fakeNews.jfif",
      title: "Inspiring adventure and confidence",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit placerat sit purus molestie.",
      link: "Apply",
      href: "/apply",
    },
  ];
  const elems = data?.map((d: ShowcaseProps, i: number) => (
    <div className={classes.body} key={i}>
      <ShowcaseCard
        img={d?.img}
        title={d?.title}
        text={d?.text}
        link={d?.link}
        href={d?.href}
      />
    </div>
  ));
  return (
    <div className={classes.body}>
      <MySlider sliders={elems} show={1} />
    </div>
  );
}
