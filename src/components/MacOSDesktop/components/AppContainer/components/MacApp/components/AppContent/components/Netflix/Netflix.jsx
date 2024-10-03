import style from "./Netflix.module.css";
import Image from "next/image";
import neftlix1 from "./movies/netflix (1).jpg";
import neftlix2 from "./movies/netflix (2).jpg";
import neftlix3 from "./movies/netflix (3).jpg";
import neftlix4 from "./movies/netflix (4).jpg";
import neftlix5 from "./movies/netflix (5).jpg";
import neftlix6 from "./movies/netflix (6).jpg";
import neftlix7 from "./movies/netflix (7).jpg";
import neftlix8 from "./movies/netflix (8).jpg";
import neftlix9 from "./movies/netflix (9).jpg";
import neftlix10 from "./movies/netflix (10).jpg";
import neftlix11 from "./movies/netflix (11).jpg";
import neftlix12 from "./movies/netflix (12).jpg";

function Netflix() {
  return (
    <div className={style.netflix}>
      <div className={style.content}>
        <h3>New on Netflix</h3>
        <Image
          src={neftlix1}
          alt='Neflix Movie'
          width={"auto"}
          height={"auto"}
        />
        <Image
          src={neftlix2}
          alt='Neflix Movie'
          width={"auto"}
          height={"auto"}
        />
        <Image
          src={neftlix3}
          alt='Neflix Movie'
          width={"auto"}
          height={"auto"}
        />
        <Image
          src={neftlix4}
          alt='Neflix Movie'
          width={"auto"}
          height={"auto"}
        />
        <h3>Worth the Wait</h3>
        <Image
          src={neftlix5}
          alt='Neflix Movie'
          width={"auto"}
          height={"auto"}
        />
        <Image
          src={neftlix6}
          alt='Neflix Movie'
          width={"auto"}
          height={"auto"}
        />
        <Image
          src={neftlix7}
          alt='Neflix Movie'
          width={"auto"}
          height={"auto"}
        />
        <Image
          src={neftlix8}
          alt='Neflix Movie'
          width={"auto"}
          height={"auto"}
        />
        <h3>Coming Next Week</h3>
        <Image
          src={neftlix9}
          alt='Neflix Movie'
          width={"auto"}
          height={"auto"}
        />
        <Image
          src={neftlix10}
          alt='Neflix Movie'
          width={"auto"}
          height={"auto"}
        />
        <Image
          src={neftlix11}
          alt='Neflix Movie'
          width={"auto"}
          height={"auto"}
        />
        <Image
          src={neftlix12}
          alt='Neflix Movie'
          width={"auto"}
          height={"auto"}
        />
      </div>
    </div>
  );
}

export default Netflix;
