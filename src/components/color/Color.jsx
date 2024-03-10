import style from "./color.module.css";

const Color = ({ random }) => {
  const hanldeCopy = (e) => {
    navigator.clipboard.writeText(e.target.textContent);
    alert(`Text copyalandi ${e.target.textContent}`);
  };

  return (
    <div className={style.colorBox}>
      <h1>Random Color Generate</h1>
      <div
        className={style.color}
        style={{ backgroundColor: `${random}` }}
      ></div>
      <span onClick={(e) => hanldeCopy(e)} className={style.hexCode}>
        {random || "#8a2be2"}
      </span>
    </div>
  );
};

export default Color;
