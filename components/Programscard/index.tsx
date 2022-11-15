import React from "react";
import ProgramsCard from "./Programscard";
import classes from "./programscard.module.scss";
interface wrapCardProps {
  data: Array<{
    img: string;
    title: string;
  }>;
}

const wrapCard = (props: wrapCardProps) => {
  return (
    <>
      <div className={classes.wrapCard}>
        {props.data.map((item) => (
          <ProgramsCard title={item.title} img={item.img} />
        ))}
      </div>
    </>
  );
};

export default wrapCard;
