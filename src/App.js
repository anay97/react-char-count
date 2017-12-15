import React, { Component } from 'react';
import AddText from './Components/AddText';
import Display from './Components/Display';

class App extends Component {
    constructor(){
        super();
        this.state={
            char:'',
            count:0
        }
    }
    getContent(x){
        this.setState({
            char:x
        },this.calculateCount);
    }
    calculateCount(){
        let x=this.state.char;
        this.setState({
            count:x.length
        })
    }
  render() {
    return (
      <div className="App">
        <h2 align="center">Character Count</h2><br /><br />
        <AddText getVal={this.getContent.bind(this)} /><br />
        <Display txt={this.state.count} />
      </div>
    );
  }
}

export default App;
