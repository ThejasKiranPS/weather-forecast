import React from "react";
import HourCard from "../hourCard/hourCard";
import LocationText from "../locationText/locationText";
import style from "./hourly.module.css";

const geturl = (location) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=8771e349f3087c578d3ad5cadef7ebe3`;

const fetchData = async (location) => {
  //fetching hourly data (fetching here to get lat and long which is needed for next request)
  let result = await fetch(geturl(location));
  const data = await result.json();
  return data;
};

class Hourly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.index = props.match.params.id;
    this.location = props.match.params.location;
  }

  dateChecker = (data) => {
    const date =
      Number(new Date().getDate()) + Number(this.props.match.params.id);
    const dtDate = new Date(data.dt * 1000).getDate();
    return dtDate === date;
  };
  async componentDidMount() {
    let result = await fetchData(this.location);

    this.setState({ data: result.list.filter(this.dateChecker) });
  }
  render() {
    let date, month;
    const day = this.state.data[0];
    if (day != null) {
      date = new Date(day.dt * 1000);
      month = date.toLocaleString("default", { month: "short" });
      date = date.getDate();
    }
    return (
      <>
        <LocationText location={this.location} />
        <p className={style.date}> {`${date} ${month}`}</p>
        <div className={style.hourCardContainer}>
        {this.state.data.map((hourData, index) => {
            console.log(hourData);
            return(
            <HourCard 
                time={getTime(hourData.dt)}
                weather={hourData.weather[0].description}
                icon={hourData.weather[0].icon}
            />
        )})}
        </div>
      </>
    );
  }
}

function getTime(dt) {
    let D = new Date(dt*1000).toTimeString().split(':');
    return `${D[0]}:${D[1]}`
}

export default Hourly;
