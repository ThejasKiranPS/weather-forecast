import React from 'react';
import style from './home.module.css';
import Search from '../../components/search/search';
import { MdLocationPin } from 'react-icons/md';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            location: 'London'
        }
    }
    geturl = (location) => `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=8771e349f3087c578d3ad5cadef7ebe3`

    fetchData = async () => {
        console.log(this.geturl(this.state.location))
        const result = await fetch(this.geturl(this.state.location));
        const data = await result.json();
    }

    render() {
        return(
            <>
                <Search onSubmit={(location) => this.setState({location}, this.fetchData)} />
                <span className={style.locationContainer}>
                    <MdLocationPin />
                    <p>{this.state.location}</p>
                </span>

            </>
        );
    }
}

export default Home;