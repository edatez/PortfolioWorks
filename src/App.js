import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Portfolio from "./pages/portfolio" ;
import About from "./pages/about" ;

import Top from "./components/navbar";
import Footer from "./components/footer";



function App() {
  return (
    <Router>
    <div className="App">
        <Top />
        <Switch>
        <Route exact path={"/"}>
            <About />
          </Route>
          <Route exact path={"/about"}>
            <About />
          </Route>
        <Route exact path={"/portfolio"}>
            <Portfolio />
          </Route>
          </Switch>
        <Footer/>
    </div>
    </Router>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
