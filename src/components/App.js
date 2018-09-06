import React from 'react';
import { Router, Route } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';
import WeekPage from '../Pages/WeekPage';
import DayPage from '../Pages/DayPage';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/week" component={WeekPage} />
            <Route path="/day" component={DayPage} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
