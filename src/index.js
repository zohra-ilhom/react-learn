import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

import Counterz from "./components/table";



//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);
//^ the same clode as below can be wrriten as above
ReactDOM.render(<Counterz/>, document.getElementById('root'));

