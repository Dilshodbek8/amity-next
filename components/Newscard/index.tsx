import React from "react";
import classes from "./newscard.module.scss";
import Newscardsingle from "./Newcardsingle";
interface NewscardProps {
  datas: [
    {
      date: string;
      img: string;
      categ: string;
      text: string;
    }
  ];
}

const Newscard = (props: NewscardProps) => {
  return (
    <div className={classes.wrapCards}>
      {props.datas.map((dat) => (
        <Newscardsingle
          date={dat.date}
          text={dat.text}
          categ={dat.categ}
          img={dat.img}
        />
      ))}
    </div>
  );
};

export default Newscard;
