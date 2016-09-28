import React from 'react';

class PropValidationExample extends React.Component {
  render() {
    return (
      <div>
        <h5>Array: {this.props.propArray}</h5>
        <h5>Bool: {this.props.propBool ? "True..." : "False..."}</h5>
        <h5>Func: {this.props.propFunc(3)}</h5>
        <h5>Number: {this.props.propNumber}</h5>
        <h5>String Valid: {this.props.propStringValid}</h5>
        <h5>String Invalid (shoud shout a warning in console): {this.props.propStringInvalid}</h5>
        <h5>Object: {this.props.propObject.objectName1}</h5>
        <h5>Object: {this.props.propObject.objectName2}</h5>
     </div>
   );
  }
}

PropValidationExample.propTypes = {
  propArray: React.PropTypes.array.isRequired,
  propBool: React.PropTypes.bool.isRequired,
  propFunc: React.PropTypes.func,
  propNumber: React.PropTypes.number,
  propStringValid: React.PropTypes.string,
  propStringInvalid: React.PropTypes.string,
  propObject: React.PropTypes.object
}

PropValidationExample.defaultProps = {
  propArray: [1,2,3,4,5],
  propBool: true,
  propFunc: function (a) { return a; },
  propNumber: 1,
  propStringValid: "String",
  propStringInvalid: 5,
  propObject: {
    objectName1: "ObjectValue1",
    objectName2: "ObjectValue2",
  }
}

export default PropValidationExample;
