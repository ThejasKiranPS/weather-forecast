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



    render() {
        return(
            <>
                <Search onSubmit={(value) => this.setState({location: value})} />
            </>
        );
    }
}

export default Home;