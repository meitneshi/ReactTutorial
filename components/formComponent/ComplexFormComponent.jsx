import React from 'react';
import InstantFormModifComponent from './InstantFormModifComponent.jsx';

class ComplexFormComponent extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: 'initial data...',
      other : 'initial data ...'
    }

    this.updateState = this.updateState.bind(this);
  };

  updateState(elem) {
    this.setState({data: elem.target.value});
  }

  render() {
    return(
      <div>
        Type here and value will be modify instantly
        <InstantFormModifComponent myDataProp = {this.state.data} updateStateProp = {this.updateState} />
      </div>
    );
  }
}

export default ComplexFormComponent;
