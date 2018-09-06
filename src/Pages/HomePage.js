import React from 'react';
import { Link } from 'react-router-dom';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const weeks = 90*52;
    const wastedArray = [];
    const liveArray = [];
    const birthDay = new Date("1989-04-03");
    const dateNow = Date.now();
    const wasted = Math.round((dateNow - birthDay)/604800000);

    for(let i = 1; i <= wasted; i++) {
      wastedArray.push(i);
    }
    for(let i = wasted + 1; i <= weeks; i++) {
      liveArray.push(i);
    }
    return (
      <div>
        <h1>Home Page</h1>
        <ul>

          <li><Link to="/login" className="link">Login</Link></li>
        </ul>
        <div className="container">
          {
            wastedArray.map((index) => (
              <div className="week wasted-week" id={index} key={index}><Link to="/week" className="link"></Link></div>
            ))}
          {
            liveArray.map((index) => (
              <div className="week" id={index} key={index}><Link to="/week" className="link"></Link></div>
            ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
