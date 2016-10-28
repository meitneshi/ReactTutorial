import React from 'react';

class EventComponentContent extends React.Component {
  render() {
    return(
      <div>
        <button onClick = {this.props.updateStateProp}>Click to update to fix value</button>
        <h3>{this.props.myDataProp}</h3>
      </div>
    );
  }
}

export default EventComponentContent;
