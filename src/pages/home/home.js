import React from 'react';
import style from './home.module.css';
import Search from '../../components/search/search';
import { MdLocationPin } from 'react-icons/md';
import Card from '../../components/dayCard/card';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            location: ''
        }
    }
    geturl = (location) => `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=8771e349f3087c578d3ad5cadef7ebe3`

    fetchData = async () => {
        console.log(this.geturl(this.state.location))
        const result = await fetch(this.geturl(this.state.location));
        const data = await result.json();
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
                    <Card classes={style.item1}/>
                    <Card classes={style.item2}/>
                    <Card classes={style.item3}/>
                    <Card classes={style.item4}/>
                    <Card classes={style.item5}/>

                </div>

            </>
        );
    }
}

export default Home;