import React from 'react';
import { Link } from 'react-router-dom';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <ul>
          <li><Link to="/week" className="link">Week</Link></li>
          <li><Link to="/login" className="link">Login</Link></li>
        </ul>
      </div>
    );
  }
}

export default HomePage;
