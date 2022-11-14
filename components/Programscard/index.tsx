import React from "react";
import ProgramsCard from "./Programscard";
import classes from "./programscard.module.scss";
interface wrapCardProps {
  data: [
    {
      title: string;
      img: string;
    }
  ];
}

const wrapCard = (props: wrapCardProps) => {
  return (
    <>
      <div className={classes.wrapCard}>
        {props.data.map((item) => (
          <ProgramsCard title={item.title} img={item.img} />
        ))}
      </div>
      ;
    </>
  );
};

export default wrapCard;
