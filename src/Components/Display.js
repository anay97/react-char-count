import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div className="Display">
        Count:{this.props.txt}
      </div>
    );
  }
}

export default Display;
