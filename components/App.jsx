import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import TableRow from './TableRow.jsx';


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
         title: "This is a variable title"
      }
   }

   render() {
      return (
         <div>
            <Header />
            <Content />
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}

export default App;
