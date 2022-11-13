import classes from "./style.module.scss";
import MiniLayout from "../../components/MiniLayout";
import Programs from "../../components/Programs";
import AboutCard from "../../components/AboutCard";
export default function About() {
  const programs = [
    "Cater to the individual needs of every child (student-centred).",
    "Generate remarkable levels of academic progress.  ",
    "Foster a global mindset, with an awareness and respect for other cultures and ways of thinking. ",
    "Are highly transferable. We work hard to help our pupils and their families to seamlessly transition between countries and different curriculums with as minimal disruption as possible. ",
  ];
  return (
    <>
      <MiniLayout title={"About"}>
        <div className={classes.body}>
          <h2>
            Amity International School Abu Dhabi is part of the Amity Education
            Group, a not-for-profit Education Foundation with campuses across
            the world.
          </h2>
          <p>
            Our school was founded in September 2015 as a small primary school
            providing the National Curriculum of England and Wales for boys and
            girls. The school’s popularity amongst the Abu Dhabi community has
            grown rapidly. Six years later, the school has grown by over 600%
            and now caters for a diverse range of pupils aged 3 to 18 with an
            equally diverse range of interests, backgrounds, and aspirations.
          </p>
          <p>
            The school features state-of-the-art, unrivalled facilities that,
            together with an outstanding team of educators and support staff,
            help pupils to fulfil their academic aspirations, as well as develop
            into independent, confident, global citizens and life-long learners.
          </p>
          <p>
            With a wide range of subjects and co-curricular activities, we
            ensure that every child’s needs, interests, and talents are catered
            for. We take great pride in the culturally diverse and caring
            environment that we provide for our pupils and the global outlook
            that we foster.
          </p>
          <div className={classes.body_programs}>
            <Programs title="Our Programmes" titles={programs} />
          </div>
        </div>
      </MiniLayout>
      <AboutCard />
    </>
  );
}
