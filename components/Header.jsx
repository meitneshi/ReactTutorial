import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super (props);

    //state are mutable
    this.state = {
      header: "Header From State",
      subHeader: "Sub_header From State"
    }
  }

   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.subHeader}</h2>
         </div>
      );
   }
}

export default Header;
