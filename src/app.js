import R from 'react';
import Home from './pages/home/home';
import style from './app.module.css';

class App extends R.Component {
    render() {
        return(
            <div className={style.container}>
                <Home />
            </div>
        );
    }
}
 export default App;