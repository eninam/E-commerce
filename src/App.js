import React, {
  Component
} from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Error from './pages/Error'
import SingleProduct from './pages/SingleProduct'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

class App extends Component {

  render() {
  return (
  <Router  >
    <Navbar/>
    <Switch> 
      {/* SWTICH renders the first child that maches the URL */}
      <Route exact path="/"><Home/></Route>
      <Route exact path = "/cart" > <Cart/> </Route>
      <Route path="/product/:id"><SingleProduct/></Route>
      <Route exact path = "*" > <Error/> </Route>
      < Route path = "*"> <Error/> </Route>
    </Switch>
  </Router>
  );
  }
}

export default App;
