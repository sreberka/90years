import React from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="info">
        <p>Name: {this.props.name}</p>
        <p>Day of born: {this.props.day} {this.props.month} {this.props.year}</p>
      </div>
    );
  }
}

export default Info;
