import React from 'react';
import Login from './Login';
import Info from './Info';

class App extends React.Component {
  constructor(props){
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
        <Info name={this.state.name} day={this.state.day} month={this.state.month} year={this.state.year} />
        <Login add={this.addInfo} />
      </div>
    )
  }
}

export default App;
