var React = require('react');
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// Components //
import FrontPage from './components/frontPage/front-page'
import Navbar from './components/navbar/navbar'

function App(){
    return (
        <div>
            <Navbar></Navbar>
            <FrontPage nome="PABLO"></FrontPage>
        </div>
    );
}
export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;

// console.log('react.js');
