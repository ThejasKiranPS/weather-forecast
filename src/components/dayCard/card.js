import R from 'react';
import className from '../../className';
import style from './card.module.css';

class Card extends R.Component{
    render() {
        const classes = className(style.card, this.props.classes);
        return(
            <div className={this.props.classes}>
                <div className={style.card}></div>
            </div>
        );
    }
}

export default Card;