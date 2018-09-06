import React from 'react';
import { Link } from 'react-router-dom';


class DayPage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <Link to="/" className="link">Home</Link>
      </div>
    );
  }
}

export default DayPage;
