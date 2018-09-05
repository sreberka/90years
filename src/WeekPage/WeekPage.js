import React from 'react';
import { Link } from 'react-router-dom';


class WeekPage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h1>Week Page</h1>
        <Link to="/" className="link">Home</Link>
      </div>
    );
  }
}

export default WeekPage;
