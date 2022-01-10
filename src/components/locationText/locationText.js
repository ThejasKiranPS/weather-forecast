import R from "react";
import { MdLocationPin } from "react-icons/md";
import style from "./locationText.module.css";

class LocationText extends R.Component {
  render() {
    return (
      <span className={style.locationContainer}>
        <MdLocationPin className={style.icon} />
        <p>{this.props.location}</p>
      </span>
    );
  }
}

export default LocationText;
