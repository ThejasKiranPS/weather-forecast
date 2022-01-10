import React from "react";
import style from "./home.module.css";
import Search from "../../components/search/search";
import Card from "../../components/dayCard/card";
import { Link } from "react-router-dom";
import LocationText from "../../components/locationText/locationText";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: JSON.parse(window.localStorage.getItem('location')).location || "",
      dailyData: [],
    };
  }

  //I know we shouldn't put api keys like this.
  geturl = (location) =>
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=8771e349f3087c578d3ad5cadef7ebe3`;
  getdailyurl = (lat, long) =>
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=8771e349f3087c578d3ad5cadef7ebe3`;

  fetchData = async () => {
    //fetching hourly data (fetching here to get lat and long which is needed for next request)
    let result = await fetch(this.geturl(this.state.location));
    const data = await result.json();

    //fetching daily data
    result = await fetch(
      this.getdailyurl(data.city.coord.lat, data.city.coord.lon)
    );
    let dailyData = await result.json();
    dailyData = dailyData.daily;

    this.setState({ dailyData });
  };

  handleSubmit = async (location) => {
    await window.localStorage.setItem('location', JSON.stringify({location: location}));
    this.setState({ location }, this.fetchData);
  };

  componentDidMount() {
    if(this.state.location ==="") {
      this.handleSubmit("London");
    } else {
      this.handleSubmit(this.state.location);
    }
  }


  render() {
    return (
      <>
        <Search onSubmit={this.handleSubmit} placeholder="location" />
        <LocationText location={this.state.location} />
        <div className={style.cardContainer}>
          {this.state.dailyData.slice(0, 5).map((day, index) => {

            const date = new Date(day.dt * 1000);
            const month = date.toLocaleString("default", { month: "short" });

            return (
              <Link 
                to={`/hourly/${this.state.location}/${index}`}
                  >
                <Card
                  key={index}
                  date={index === 0 ? "Today" : `${date.getDate()} ${month}`}
                  weather={day.weather[0].description}
                  weatherId={day.weather[0].id}
                  temp={Math.round(day.temp.day - 273.15)}
                  classes={style[`item${index + 1}`]}
                />
              </Link>
            );
          })}
        </div>
      </>
    );
  }
}

export default Home;
