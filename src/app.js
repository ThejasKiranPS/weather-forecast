import R from "react";
import Home from "./pages/home/home";
import style from "./app.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hourly from "./components/hourly/hourly";

class App extends R.Component {
  render() {
    return (
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <div className={style.container}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/hourly/:location/:id" component={Hourly} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
