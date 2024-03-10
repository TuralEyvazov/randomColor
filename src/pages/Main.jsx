import { useState } from "react";
import Color from "../components/color/Color";
import Button from "../components/buttons/Button";
import style from "./main.module.css";

const Main = () => {
  const [random, setRandom] = useState("");

  return (
    <div
      className={style.main}
      style={{ boxShadow: `0px 0px 6px 4px ${random || "#8a2be2"}` }}
    >
      <Color random={random} />
      <Button setRandom={setRandom} />
    </div>
  );
};

export default Main;
