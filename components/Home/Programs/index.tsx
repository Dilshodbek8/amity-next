import ProgramsCard from "../../Programscard";
import classes from "./Programs.module.scss";
import MainTitle from "../../Maintitle";
export default function Programs() {
  const programs = [
    {
      img: "/media/images/upgraduate.png",
      title: "Undergraduate",
    },
    {
      img: "/media/images/postgraduate.png",
      title: "Postgraduate",
    },
    {
      img: "/media/images/foundationprogram.png",
      title: "International Foundation Program",
    },
  ];
  return (
    <div className={classes.body}>
      <div className="container">
        <MainTitle title="PROGRAM & Academics" style="blueborder" />
        <ProgramsCard data={programs} />
      </div>
    </div>
  );
}
