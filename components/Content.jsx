import React from 'react';

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>{this.props.headerProp}</h2>
            <p>{this.props.contentProp}</p>
         </div>
      );
   }
}

//Props are immutable
Content.defaultProps = {
  headerProp: "Header from local props (immutable)"
}

export default Content;
