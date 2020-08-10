var React = require('react');
import ReactDOM from "react-dom";
import Form from './components/form'

function App(){
    return (
        <div>
            <h1>Bem vindo</h1>
            <Form></Form>

        </div>
    );
}
  export default App;
  
  const wrapper = document.getElementById("container");
  wrapper ? ReactDOM.render(<App />, wrapper) : false;