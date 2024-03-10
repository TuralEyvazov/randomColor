import style from "./button.module.css";

const Button = ({ setRandom }) => {
  const handleRandom = () => {
    let color = "#";
    let str = "ABCDEF1234567890";
    for (let i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * 16);
      color += str[random];
    }
    setRandom(color);
  };

  return (
    <>
      <button className={style.btn} onClick={() => handleRandom()}>
        Generate Color
      </button>
    </>
  );
};

export default Button;
