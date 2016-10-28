import React from 'react';
import EventComponentContent from './EventComponentContent.jsx';

class EventComponent extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      data: 'Initial Data'
    };

    this.updateState = this.updateState.bind(this);
  };

  updateState() {
    this.setState({data: 'Data Updated !'});
  }

  render() {
    return (
      <div>
        <EventComponentContent myDataProp = {this.state.data} updateStateProp = {this.updateState} />
      </div>
    );
  }
}

export default EventComponent;
