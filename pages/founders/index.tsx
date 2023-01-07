import classes from "./style.module.scss";
import MiniLayout from "../../components/MiniLayout";
import MyTab from "../../components/MyTab";
import MainTitle from "../../components/Maintitle";
import Image from "next/image";
import Programs from "../../components/Info";
export default function Founders() {
  const programs = [
    "Cater to the individual needs of every child (student-centred).",
    "Generate remarkable levels of academic progress.  ",
    "Foster a global mindset, with an awareness and respect for other cultures and ways of thinking. ",
    "Are highly transferable. We work hard to help our pupils and their families to seamlessly transition between countries and different curriculums with as minimal disruption as possible. ",
  ];
  return (
    <MiniLayout title={"Founders"}>
      <div className={classes.body}>
        <MyTab
          titles={[
            "Founder",
            "Chancellors",
            "Group Vice Chancellors",
            "Vice Chancellor",
          ]}
          components={[
            <div key={"1"} className={classes.body}>
              <div className={classes.body_top}>
                <div>
                  <h2>Dr. Ashok K. Chauhan</h2>
                  <h3>
                    Founder President, Ritnand Balved Education Foundation
                  </h3>
                  <p>
                    (The Foundation of Amity Institutions and the sponsoring
                    body of Amity Universities) Chairman, AKC Group of Companies
                  </p>
                  <p>
                    My mission is nation building through education and beyond.
                  </p>
                  <span>
                    Each one of our students will be a success story. This is my
                    dream; this is my commitment.
                  </span>
                </div>
                <div className={classes.body_img}>
                  <Image
                    src={`/media/images/founder.jpg`}
                    layout="fill"
                    alt="img"
                  />
                </div>
              </div>

              <p>
                Amity is not just a group of institutions which imparts
                world-class education, but an experience where everyone
                associated is part of a dream, a mission to see that we nurture
                truly great leaders.
              </p>
              <p>
                In my over 30 years stay in West Germany I realised, through
                interacting with the over 6000 Europeans working for me, that we
                Indians have the intelligence, the talent and the potential to
                be the more successful people in the world. That is why we
                established the Ritnand Balved Education Foundation in 1986 to
                start institutions which will groom young future leaders to be
                complete, value-driven human beings and competent professionals
                with a deep passion for humanity. These will be the people who
                will lead the world.
              </p>
              <p>
                Today, we are proud that Amity is synonymous with practical,
                industryfocussed education, and attracts the best students. The
                fact that our alumni are working in the best companies across
                the world is a testament to our extremely talented faculty who
                inculcate, by example, in each student the spirit of dedication,
                sincerity and loyalty, and to all the corporates who support our
                mission with so much enthusiasm.
              </p>
              {/* <div className={classes.body_programs}>
                <Programs title="Our Programmes" titles={programs} />
              </div> */}
            </div>,
            <div key={"2"} className={classes.body_cards}>
              <div className={classes.card}>
                <div>
                  <h2>Dr. Atul Chauhan</h2>
                  <h4>Chancellor, Amity University</h4>
                  <h4>President, Ritnand Balved Education Foundation</h4>
                  <h4>CEO, AKC Group of Companies</h4>
                  <p>
                    We are creating centres of thought leadership across the
                    world, where faculty, scientists and brilliant students can
                    explore and expand the frontiers of knowledge.
                  </p>
                </div>

                <div className={classes.body_img_full}>
                  <Image
                    src={`/media/images/atul.jpg`}
                    layout="fill"
                    alt="img"
                  />
                </div>
              </div>
              <div className={classes.card}>
                <div>
                  <h2>Dr. Aseem Chauhan</h2>
                  <h4>Chancellor, Amity University</h4>
                  <h4>
                    Additional President, Ritnand Balved Education-Foundation
                  </h4>
                  <h4>CEO, Amity Capital Ventures</h4>
                  <p>
                    Our endeavour is to nurture holistic world citizens, who are
                    driven by human values and equipped to excel on a global
                    stage
                  </p>
                </div>

                <div className={classes.body_img_full}>
                  <Image
                    src={`/media/images/aseem.jpg`}
                    layout="fill"
                    alt="img"
                  />
                </div>
              </div>
            </div>,
            <div key={"3"} className={classes.body_cards}>
              <div className={classes.card}>
                <div>
                  <h2>Maj. Gen. K. Jai Singh</h2>
                  <h4>Group Vice Chancellor, Amity Universities</h4>
                  <h4>
                    Executive Senior Vice President, Ritnand Balved Education
                    Foundation
                  </h4>
                  <h4 className={classes.text_top}>
                    Former Additional DG - Systems, Indian Army
                  </h4>
                  <h4>Jt. Secretary, Cabinet Secretariat Advisor, DRDO</h4>
                  <p>
                    Amity is a forward-thinking University where world-class
                    education and research develops intellectuals who shall
                    change the world tomorrow.
                  </p>
                </div>

                <div className={classes.body_img_full}>
                  <Image
                    src={`/media/images/jai.jpg`}
                    layout="fill"
                    alt="img"
                  />
                </div>
              </div>
              <div className={classes.card}>
                <div>
                  <h2>Prof. (Dr.) Gurinder Singh</h2>
                  <h4>Group Vice Chancellor, Amity Universities</h4>
                  <h4>
                    Director General, Amity Directorate of Management and Allied
                    Areas
                  </h4>
                  <h4>
                    Director General, Amity International Business School & Vice
                    Chairman, Global Foundation for Learning & Excellence
                  </h4>
                </div>

                <div className={classes.body_img_full}>
                  <Image
                    src={`/media/images/gurinder.jpg`}
                    layout="fill"
                    alt="img"
                  />
                </div>
              </div>
            </div>,
            <div key={"4"} className={classes.card_vertical}>
              <div>
                <h2>Dr. B. Shukla</h2>
                <h4>Vice Chancellor, Amity University Uttar Pradesh</h4>
                <h4>M.Tech. (IIT Kharagpur), Ph.D. Queens University, U.K.</h4>
                <h4>Council member of AIMA</h4>
                <p>
                  At Amity, we focus on each & every student, to bring out their
                  full potential and empower them with a winning attitude.
                </p>
              </div>

              <div className={classes.body_img_full}>
                <Image
                  src={`/media/images/shukla.jpg`}
                  layout="fill"
                  alt="img"
                />
              </div>
            </div>,
          ]}
        />
      </div>
    </MiniLayout>
  );
}
