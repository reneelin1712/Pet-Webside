import React, { Component} from 'react'; 
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Pets from './pages/Pets';
import PetDetail from './pages/PetDetail';


class App extends Component {
  render(){
  return (
    <>
    <Router>
      <Route path="/" component={Home} exact></Route>
      <Route exact path="/pets" component={Pets}></Route>
      <Route exact path="/pet/:slug" component={PetDetail}></Route>
    </Router>

    </>
  );
}
}

export default App;
