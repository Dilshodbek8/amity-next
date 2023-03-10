import Head from "next/head";
import Image from "next/image";
import MySlider from "../components/Slider";
import ShowcaseCard from "../components/Home/ShowcaseCard";
import MiniLayout from "../components/MiniLayout";
import {
  uz,
  fTel,
  Facebook,
  Instagram,
  LinkedIn,
  location,
  logo,
  menu,
  message,
  oxford,
  pearson,
  TikTok,
  Twitter,
  YouTube,
  aqa,
  bsme,
  caie,
  chat,
  checked,
  en,
  fLocation,
  fMessage,
  plus,
  ru,
  scroll,
  tel,
} from "../public/media/icons";
import MyButton from "../components/MyButton";
import TextInput from "../components/TextField";
import ContactCard from "../components/Home/ContactCard";
import MyTab from "../components/MyTab";
import Header from "../components/Header";
import MainTitle from "../components/Maintitle";
import ProgramsCard from "../components/Programscard";
import Newscard from "../components/Newscard";
import Informationcard from "../components/Informationcard";
import Breadcrumb from "../components/Breadcrumb";
const data = [
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

const newsdata = [
  {
    date: "Mon Nov 14 2022 12:11:05 GMT+0500 (Uzbekistan Standard Time)",
    img: "/media/images/card.png",
    categ: "Category",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    date: "Mon Nov 14 2022 12:11:05 GMT+0500 (Uzbekistan Standard Time)",
    img: "/media/images/card.png",
    categ: "Category",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    date: "Mon Nov 14 2022 12:11:05 GMT+0500 (Uzbekistan Standard Time)",
    img: "/media/images/card.png",
    categ: "Category",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function Components() {
  return (
    <div>
      <Head>
        <title>Components</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainTitle
        title="PROGRAM & Academics"
        subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit porro, aliquid reprehenderit iusto inventore sint beatae ipsum impedit in sit  illum distinctio sequi quisquam et hic tempore"
        minititle="Relevant news"
        style="blueborder"
        textposition="center"
      />

      <div className="container">
        <Breadcrumb className={""} />
        <ProgramsCard data={data} />
        <Newscard datas={newsdata} />
        <Informationcard />
      </div>
      <Header
        title={"Programs"}
        white
        btns={[
          { title: "International Foundation Program", id: "111" },
          { title: "Undergraduate", id: "222" },
          { title: "Postgraduate", id: "333" },
        ]}
      />
      <div className="container">
        <MyButton title={"undergraduate"} primary fullWidth={true} />
        <MyButton title={"about"} href="/about" />
      </div>
      <Header title={"without tab"} />

      <ShowcaseCard
        img="fakeNews.jfif"
        link="Apply"
        href="/apply"
        title="Inspiring adventure and confidence"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit placerat sit purus molestie."
      />
      <div className="container">
        <h1>components</h1>

        <MySlider
          show={6}
          sliders={[
            <TextInput
              key={"1"}
              fullWidth
              error
              errorLabel={"This is errored input"}
              radius={"15"}
              label="Outlined"
            />,
            <TextInput
              key={"2"}
              fullWidth
              error
              errorLabel={"This is errored input"}
              radius={"15"}
              label="Outlined"
            />,
            <TextInput
              key={"3"}
              fullWidth
              error
              errorLabel={"This is errored input"}
              radius={"15"}
              label="Outlined"
            />,
            <TextInput
              key={"4"}
              fullWidth
              error
              errorLabel={"This is errored input"}
              radius={"15"}
              label="Outlined"
            />,
            <TextInput
              key={"5"}
              fullWidth
              error
              errorLabel={"This is errored input"}
              radius={"15"}
              label="Outlined"
            />,
            <TextInput
              key={"6"}
              fullWidth
              error
              errorLabel={"This is errored input"}
              radius={"15"}
              label="Outlined"
            />,
            <TextInput
              key={"7"}
              fullWidth
              error
              errorLabel={"This is errored input"}
              radius={"15"}
              label="Outlined"
            />,
            <TextInput
              key={"8"}
              fullWidth
              error
              errorLabel={"This is errored input"}
              radius={"15"}
              label="Outlined"
            />,
          ]}
        />
        <div className="primaryTab">
          <MyTab
            titles={["asd", "qwe", "zxz"]}
            components={[
              <h1 key={"1"}>111sdassd</h1>,
              <h1 key={"2"}>222asdassd</h1>,
              <h1 key={"3"}>33asdassd</h1>,
            ]}
          />
        </div>
        <MyTab
          titles={["asd", "qwe", "zxz"]}
          components={[
            <h1 key={"1"}>111sdassd</h1>,
            <h1 key={"2"}>222asdassd</h1>,
            <h1 key={"3"}>33asdassd</h1>,
          ]}
        />

        <ContactCard
          icon={"message.svg"}
          title={"Email us:"}
          text={"admission@amityabudhabi.ae"}
          link={"mailto: admission@amityabudhabi.ae"}
        />
        <TextInput
          fullWidth
          error
          errorLabel={"This is errored input"}
          radius={"15"}
          label="Outlined"
        />
        <Image src={uz} width="40" height="40" alt="uz" />
        <Image src={Facebook} width="150" height="150" alt="uz" />
        <Image src={TikTok} width="150" height="150" alt="uz" />
        <Image src={Instagram} width="150" height="150" alt="uz" />
        <Image src={Twitter} width="150" height="150" alt="uz" />
        <Image src={YouTube} width="150" height="150" alt="uz" />
        <Image src={LinkedIn} width="150" height="150" alt="uz" />
        <Image src={location} width="40" height="40" alt="uz" />
        <Image src={fTel} width="40" height="40" alt="uz" />
        <Image src={logo} width="200" height="200" alt="uz" />
        <Image src={menu} width="40" height="40" alt="uz" />
        <Image src={message} width="40" height="40" alt="uz" />
        <Image src={oxford} width="40" height="40" alt="uz" />
        <Image src={pearson} width="40" height="40" alt="uz" />
        <Image src={aqa} width="40" height="40" alt="uz" />
        <Image src={bsme} width="40" height="40" alt="uz" />
        <Image src={caie} width="40" height="40" alt="uz" />
        <Image src={chat} width="40" height="40" alt="uz" />
        <Image src={checked} width="40" height="40" alt="uz" />
        <Image src={en} width="40" height="40" alt="uz" />
        <Image src={fLocation} width="40" height="40" alt="uz" />
        <Image src={fMessage} width="40" height="40" alt="uz" />
        <Image src={plus} width="40" height="40" alt="uz" />
        <Image src={ru} width="40" height="40" alt="uz" />
        <Image src={scroll} width="40" height="40" alt="uz" />
        <Image src={tel} width="40" height="40" alt="uz" />
      </div>
    </div>
  );
}
