import './App.css';
import Header from './Header';
import Home from './Home';
import {  
  Switch,
  Route,
  } from "react-router-dom";
import Checkout from './Checkout.js';

function App() {
  return (
    <div className="App">
       <Switch>
          <Route path="/checkout">
            <Header />
             <Checkout />
          </Route>         
          <Route path="/">
            <Header />
              <Home />
          </Route>
        </Switch>           
    </div>
  );
}



export default App;
