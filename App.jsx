import React from 'react';

class App extends React.Component {
   render() {

      var i = 2;
      var myStyle = {
        fontSize: 25,
        color: '#ff00aa'
      }

      return (
         <div>
            <h1>Title H1</h1>
            <h2>Subtitle H2</h2>
            <p>this is a p tag</p>
            <p data-myattribute = "somevalue">this is a p tag with a attribute (inpect element to see)</p>
            <br/>
            -*-*-
            <br/>
            <h1> In this h1 tag, the value {1+2} is calculated from JS expression</h1>
            <h1> In this h1 tag the value is compiled from a ternary expression if var i in JS = 2 : {i == 2 ? 'TRUE ! i=2' : 'FALSE !'} </h1>
            <h2 style = {myStyle}> This h2 tag is styled with a style defined hard coded in app.jsx (style should be externalize, done later)</h2>

            <hr/>
            <p> All these tags must be wrapped into a single container : div in this example </p>
         </div>
      );
   }
}

export default App;
