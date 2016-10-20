import React from 'react';

class InstantFormModifComponent extends React.Component {

  render() {
    return(
      <div>
        Input : <input type = "text" value = {this.props.myDataProp} onChange = {this.props.updateStateProp} />
        Result : <span>{this.props.myDataProp}</span>
      </div>
    );
  }
}

export default InstantFormModifComponent;
