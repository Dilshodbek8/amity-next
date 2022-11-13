import React from "react";
import classes from "./AboutCard.module.scss";
import MainTitle from "../Maintitle";
export default function AboutCard() {
  return (
    <div className={classes.card}>
      <div className={classes.card_img}></div>
      <div className={classes.card_text}>
        <MainTitle
          minititle="Campus"
          title={"A campus unlike any other "}
          textposition="left"
          style="whitetitle"
        />
        <p>
          Amity University Dubai spans across 700,000 square feet. Not only is
          it environmentally sustainable, with intelligent building management
          systems, such as motion-sensor lights, the classrooms are digitised
          and there are sports and fitness facilities to help flex your athletic
          aspirations or simply stay fit and healthy. Amity University Dubai is
          also home to over 30 specialised laboratories to provide students with
          hands-on experience and insight into the future of industries.
        </p>
        <p>
          If it’s space you’re after, you won’t be disappointed. Students have
          access to various areas for brainstorming and studying. Designed by a
          world-renowned firm, Canon Design, each area has been carefully
          thought through, with bold colours strategically placed throughout the
          walkways and classrooms to inspire creativity and create a strong
          sense of community.
        </p>
      </div>
    </div>
  );
}
