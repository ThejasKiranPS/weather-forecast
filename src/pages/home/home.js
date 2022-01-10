import React from 'react';
import style from './home.module.css';
import Search from '../../components/search/search';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            location: ''
        }
    }
    geturl = (location) => `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=8771e349f3087c578d3ad5cadef7ebe3`

    onSubmit = async (location) => {
        this.setState({location});
        console.log(this.geturl(location))
        const result = await fetch(this.geturl(location));
        const data = await result.json();
    }

    render() {
        return(
            <>
                <Search onSubmit={this.onSubmit} />

            </>
        );
    }
}

export default Home;