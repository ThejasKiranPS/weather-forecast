import React from 'react';
import style from './home.module.css';
import Search from '../../components/search/search';
import { MdLocationPin } from 'react-icons/md';
import Card from '../../components/dayCard/card';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            location: '',
            dailyData: []
        }
    }
    geturl = (location) => `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=8771e349f3087c578d3ad5cadef7ebe3`
    getdailyurl = (lat,long) => `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=8771e349f3087c578d3ad5cadef7ebe3`

    fetchData = async () => {
        console.log(this.geturl(this.state.location))
        let result = await fetch(this.geturl(this.state.location));
        const data = await result.json();
        result = await fetch(this.getdailyurl(data.city.coord.lat,data.city.coord.lon))
        let dailyData = await result.json();
        dailyData = dailyData.daily;
        this.setState({dailyData});

    }

    handleSubmit = (location) => {
        this.setState({location}, this.fetchData)
    }

    componentDidMount() {
        console.log('testing');
        this.handleSubmit('London');
    }


    render() {
        return(
            <>
                <Search onSubmit={this.handleSubmit} placeholder="location" />
                <span className={style.locationContainer}>
                    <MdLocationPin />
                    <p>{this.state.location}</p>
                </span>
                <div className={style.cardContainer}>
                    {this.state.dailyData.slice(0,5).map((day,index) => {
                        const date = new Date(day.dt*1000);
                        const month = date.toLocaleString('default', { month: 'short' });
                        return(
                            <Card
                                key={date}
                                date={index===0 ? "Today":`${date.getDate()} ${month}`}
                                weather={day.weather[0].description}
                                weatherId={day.weather[0].id}
                                temp={Math.round((day.temp.day)-273.15)}
                                classes={style[`item${index+1}`]}
                            />
                        );
                    })}
                </div>

            </>
        );
    }
}

export default Home;