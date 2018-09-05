import React from 'react';
import { Router, Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import WeekPage from '../WeekPage/WeekPage';
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
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
