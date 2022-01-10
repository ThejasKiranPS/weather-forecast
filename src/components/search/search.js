import react from "react";
import style from "./search.module.css";
import className from "../../className";
import {FaSearch} from 'react-icons/fa';
import {IconContext} from 'react-icons';

class Search extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={className(style.container)}>
        <button 
            type="submit" 
            className={className(style.searchBg)} 
        >
            <div className={style.iconContainer}> 
                <IconContext.Provider value={{className: style.icon}}>
                    <FaSearch style={style.icons} />
                </IconContext.Provider>
            </div>
        </button>

        <input 
            className={className(style.searchFg)}
            value={this.state.value} 
            onChange={this.handleChange} 
            placeholder={this.props.placeholder}
        />
      </form>
    );
  }
}

export default Search;
