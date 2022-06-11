import React, {Component,} from "react";
import "../src/App.css"
// import Dashboard from "./pages/js/Dashboard";
// import State from "./pages/js/state";
import Json from "./json";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component{

  render() {
    return(
      <div>
        {/* <Dashboard/> */}
        {/* <State/> */}
        <Json/>
      </div>
    )
  }
}