import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      day: '',
      month: '',
      year: ''
    };
    this.showName = this.showName.bind(this);
    this.setDay = this.setDay.bind(this);
    this.setMonth = this.setMonth.bind(this);
    this.setYear = this.setYear.bind(this);
    this.setInfo = this.setInfo.bind(this);
  }

  showName(event) {
    this.setState({name: event.target.value});
  }

  setDay(event) {
    this.setState({day: event.target.value});
  }

  setMonth(event) {
    this.setState({month: event.target.value});
  }

  setYear(event) {
    this.setState({year: event.target.value});
  }

  setInfo(e) {
    e.stopPropagation();
    e.preventDefault();
    if(this.state.name && this.state.day && this.state.month && this.state.year) {
      this.props.add(this.state.name, this.state.day, this.state.month, this.state.year);
      this.setState({name: '', text: ''})
    }
  }


  render() {
    let days = [];
    for (let i = 1; i < 32; i++) {
      days.push(i);
    }
    let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let year = [];
    for (let i = 1930; i < (new Date()).getFullYear(); i++) {
      year.push(i);
    }

    return (
      <div className="login">
        <label>Enter Your Name:</label>
        <input onChange={this.showName} value={this.state.name} type="text"/>

        <label>Your Birth Day:</label>
        <select aria-placeholder={'Day'} onChange={this.setDay}>
        {
          days.map((index) => (
            <option value={index} key={index}>{index}</option>
          ))}
        </select>
        <select aria-placeholder={'Month'} onChange={this.setMonth}>
        {
          month.map((index) => (
            <option value={index} key={index}>{index}</option>
          ))}
        </select>
        <select aria-placeholder={'Year'} onChange={this.setYear}>
          {
            year.map((index) => (
              <option value={index} key={index}>{index}</option>
            ))}
        </select>
        <button onClick={this.setInfo}>Login</button>
      </div>
    );
  }
}

export default Login;
