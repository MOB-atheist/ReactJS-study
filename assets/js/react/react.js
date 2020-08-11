var React = require('react');
import ReactDOM from "react-dom";
import { FrontPage } from './components/appComponents'

function App(){
    return (
        <div>
            <FrontPage></FrontPage>
        </div>
    );
}
  export default App;
  
  const wrapper = document.getElementById("container");
  wrapper ? ReactDOM.render(<App />, wrapper) : false;