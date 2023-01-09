import classes from "./style.module.scss";
import MiniLayout from "../../components/MiniLayout";
import CampusCard from "../../components/campusCard";
export default function internationalCampus() {
  const campuses = [
    {
      img: "boy.png",
      title: "Abu Dabi",
      link: "https://amityabudhabi.com/",
    },
  ];

  return (
    <MiniLayout title={"International Campus page"}>
      <h1>International Campus page</h1>
      {campuses?.map((c: any, i: number) => (
        <CampusCard key={i} title={c.title} link={c.link} img={c.img} />
      ))}
    </MiniLayout>
  );
}
