import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';
import Info from '../components/Info';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      day: '',
      month: '',
      year: ''
    };
    this.addInfo = this.addInfo.bind(this);
  }

  addInfo(name, day, month, year) {
    this.setState({
      name: name,
      day: day,
      month: month,
      year: year
    });
  }


  render() {
    return (
      <div>
       <h1>Login Page</h1>
        <Info name={this.state.name} day={this.state.day} month={this.state.month} year={this.state.year} />
        <Login add={this.addInfo} />
       <Link to="/" className="link">Home</Link>
      </div>
    );
  }
}

export default LoginPage;
