import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import TableRow from './TableRow.jsx';
import PropValidationExample from './PropValidationExample.jsx';
import ComponentAPIExample from './ComponentAPIExample.jsx';
import ComponentLifeCycleExample from './componentLifeCycle/ComponentLifeCycleExample.jsx';


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
        Component Header :
        <Header headerProp = {this.state.header}/>

        <hr/>
        Component Content :
        <Content contentProp = {this.state.content}/>

        <hr/>
        Table with component inside :
        <table>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
          </tbody>
        </table>

        <hr/>
        Prop Validation :
        <PropValidationExample />

        <hr/>
        Component Api :
        <ComponentAPIExample />

        <hr/>
        Component Life Cycle
        <ComponentLifeCycleExample />
      </div>
    );
  }
}

export default App;
