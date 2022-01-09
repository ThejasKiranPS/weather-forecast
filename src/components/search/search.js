import react from "react";
import style from './search.module.css';
import className from '../../className';

class Search extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state.value);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <button type="submit" className={className(style.searchBg)} >submit</button>
                <input value={this.state.value} onChange={this.handleChange} />
            </form>
        );
    }
}

export default Search;