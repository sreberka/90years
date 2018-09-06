import React from 'react';
import { Link } from 'react-router-dom';


class WeekPage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const d = new Date();
    const today = days[d.getDay() - 1];
    return (
      <div>
        <h1>Week Page</h1>
        <div className="container container-week">
          {
            days.map((index) => (
            <div className={index === today ? 'day today' : 'day'} id={index} key={index}>
              <Link to="/day" className="link">{index}</Link>
            </div>
          ))}
        </div>
        <Link to="/" className="link">Home</Link>
      </div>
    );
  }
}

export default WeekPage;
