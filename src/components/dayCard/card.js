import R from 'react';
import className from '../../className';
import style from './card.module.css';
import cloudy from '../../assets/cloudy.jpg';
import snowy from '../../assets/snowy.jpg';
import sunny from '../../assets/sunny-min.jpg';
import rainy from '../../assets/rainy.jpg';
import Pill from '../timePill/pill';

class Card extends R.Component{
    getImage(weatherId) {
        if(weatherId < 600) {
            //rain
            return rainy;

        } else if(weatherId < 800) {
            //snow
            return snowy;

        } else if(weatherId === 800) {
            //clear
            return sunny;
        } else {
            //clouds
            return cloudy;
        }
    }
    render() {
        const classes = className(style.container, this.props.classes);

        return(
            <div className={classes}>
                    <Pill>{this.props.date===0 ? "Today":this.props.date}</Pill>
                <div className={style.card}>
                    <img src={this.getImage(this.props.weatherId)} alt={`${this.props.weather}`} className={style.image} />
                    <div className={style.overlay}>
                        <p className={style.temp}>{this.props.temp}°C</p>
                        <p className={style.weather}>{this.props.weather}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;