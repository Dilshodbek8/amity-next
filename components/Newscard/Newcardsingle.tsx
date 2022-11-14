import React from "react";
import classes from "./newscard.module.scss";
import Image from "next/image";
import MainTitle from "../Maintitle";

interface NewscardProps {
  date: string;
  img: string;
  categ: string;
  text: string;
}

const Newcardsingle = (props: NewscardProps) => {
  let newDate = new Date(props.date);
  let day = newDate.getDate();
  let month = newDate.toLocaleString("en-US", { month: "short" });
  let year = newDate.getFullYear();
  return (
    <>
      <div className={classes.card}>
        <div className={classes.dates}>
          <h5>{day}</h5>
          <h4>{month}</h4>
          <h6>{year}</h6>
        </div>
        <div className={classes.image}>
          <Image src={props.img} alt={props.img} layout="fill" />
          <p className={classes.category}>{props.categ}</p>
        </div>
        <div className={classes.foot}>
          <MainTitle textposition="left" style="card" title={props.text} />
        </div>
      </div>
    </>
  );
};

export default Newcardsingle;

// const DetailedCard = ({ date, img, categ, text }) => {
//     let newDate = new Date(date);
//     let day = newDate.getDate();
//     let month = newDate.toLocaleString("en-US", { month: "short" });
//     let year = newDate.getFullYear();
//     return (
//       <div className={classes.card}>
//         <div className={classes.head}>
//           <div className={classes.dates}>
//             <h5>{day}</h5>
//             <h4>{month}</h4>
//             <h6>{year}</h6>
//           </div>
//           <Image
//             src={`/media/fakeimages/${img}`}
//             alt={img}
//             width="1000"
//             height="1000"
//           />
//           <p>{categ}</p>
//         </div>

//         <div className={classes.foot}>
//           <p>{text}</p>
//         </div>
//       </div>
//     );
//   };
