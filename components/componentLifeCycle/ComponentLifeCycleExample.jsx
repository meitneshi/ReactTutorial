import React from 'react';
import ComponentLifeCycleContent from './ComponentLifeCycleContent.jsx'

class ComponentLifeCycleExample extends React.Component {

  //constructor
  constructor(props) {
    super(props);

    this.state = {
      data: 0
    }

    this.setNewNumber = this.setNewNumber.bind(this);
  };

  setNewNumber() {
    this.setState({data: this.state.data + 1});
  }

  //render
  render() {
    return (
      <div>
        <h5>Open console for log</h5>
        <button onClick = {this.setNewNumber}>Increment</button>
        <ComponentLifeCycleContent number={this.state.data} />
      </div>
    );
  }
}

export default ComponentLifeCycleExample;
