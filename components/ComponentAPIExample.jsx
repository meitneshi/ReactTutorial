import React from 'react';
import ReactDOM from 'react-dom';

class ComponentAPIExample extends React.Component {
  //Constructor
  constructor() {
    super();

    //state declaration
    this.state = {
      data: []
    }

    //method binding
    this.setStateHandler = this.setStateHandler.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.findDOMNodeHandler = this.findDOMNodeHandler.bind(this);
  };

  //Method definition
  setStateHandler() {
    var item = "button clicked..."
    var array = this.state.data;
    array.push(item);
    this.setState({data: array});
  };

  forceUpdateHandler() {
    this.forceUpdate();
  };

  findDOMNodeHandler() {
    var divToUpdate = document.getElementById('divToUpdate');
    ReactDOM.findDOMNode(divToUpdate).style.color = 'green';
  }

  //render
  render() {
    return (
      <div>
        <h5>Set State Handler : </h5>
        <button onClick = {this.setStateHandler}>Set state button</button>
        State Array : {this.state.data}
        <br/>
        <h5>Force Update</h5>
        <button onClick = {this.forceUpdateHandler}>Force Update</button>
        Random Value : {Math.random()}
        <br/>
        <h5>Find DOM Node</h5>
        <button onClick = {this.findDOMNodeHandler}>Update color</button>
        <div id="notUpdatedDivOne">This node should not change</div>
        <div id="divToUpdate">This node should change to green</div>
        <div id="notUpdatedDivTwo">This node should not change</div>
      </div>
    );
  }
}

export default ComponentAPIExample;
