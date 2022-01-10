import R from "react";
import style from "./hourCard.module.css";

class HourCard extends R.Component {
  render() {
    return (
      <div className={style.container}>
        <p className={style.time}>{this.props.time}</p>
        <img className={style.icon} src={`https://openweathermap.org/img/wn/${this.props.icon}@2x.png`}/> 
        <p className={style.weather}> {this.props.weather}</p>
      </div>
    );
  }
}

export default HourCard;
