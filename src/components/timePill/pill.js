import style from "./pill.module.css";

function Pill(props) {
  return (
    <div className={style.container}>
      <div className={style.pill}>{props.children}</div>
      <div className={style.line} />
    </div>
  );
}

export default Pill;
