import classes from "./style.module.scss";
import MiniLayout from "../../components/MiniLayout";
import Header from "../../components/Header";
import { useRouter } from "next/router";
export default function Programs() {
  const router = useRouter();
  return (
    <>
      <Header
        title={"Programs"}
        btns={[
          { title: "International Foundation Program", id: "111" },
          { title: "Undergraduate", id: "222" },
          { title: "Postgraduate", id: "333" },
        ]}
      />
      <div className="container">
        <h1>Programs page {router.query.id}</h1>
      </div>
    </>
  );
}
