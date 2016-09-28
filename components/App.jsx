import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import TableRow from './TableRow.jsx';
import PropValidationExample from './PropValidationExample.jsx';


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      data:[
        {
          "id":1,
          "name":"John",
          "age":"20"
        },{
          "id":2,
          "name":"Mark",
          "age":"30"
        },{
          "id":3,
          "name":"Pat",
          "age":"40"
        }
      ],
      header: "Header from props...",
      content: "Content from props..."
    }
  }

  render() {
    return (
      <div>
        <Header headerProp = {this.state.header}/>
        <Content contentProp = {this.state.content}/>
        <table>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
          </tbody>
        </table>
        <PropValidationExample />
      </div>
    );
  }
}

export default App;
