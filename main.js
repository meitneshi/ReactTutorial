import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));

//Uncomment this make the page disappear after 10 second (use to see the unmount event in STEP 9)
//setTimeout(() => {
//  ReactDOM.unmountComponentAtNode(document.getElementById('app'));
//}, 10000);
