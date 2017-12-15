import React, { Component } from 'react';

class AddText extends Component {
    changer(){
        let x=this.refs.abc.value;
        this.props.getVal(x);
    }
  render() {
    return (
      <div className="AddText">
        <textarea ref="abc" cols="50" rows="10" onChange={this.changer.bind(this)}></textarea>
      </div>
    );
  }
}

export default AddText;
